import { useState, useCallback, useRef, useEffect } from "preact/hooks";
import { marked } from "marked";
import { FileTree, type TreeNode } from "../components/FileTree";
import {
  buildFolderChartSegments,
  getWorkspaceFileText,
  getWorkspacePreviewKind,
  DOT_COLORS,
  type ChildInfo,
  type FolderChartSegment,
  type WorkspaceFilePayload,
} from "./workspace-panel-helpers";

// ─── helpers ─────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

interface WorkspaceMutationPayload {
  nextNode: TreeNode | null;
}

function getErrorMessage(value: unknown, fallback: string): string {
  if (value && typeof value === "object") {
    if ("error" in value && typeof value.error === "string" && value.error.trim()) return value.error;
    if ("message" in value && typeof value.message === "string" && value.message.trim()) return value.message;
  }
  return fallback;
}

async function readJsonSafely<T>(response: Response): Promise<T | null> {
  const text = await response.text();
  if (!text.trim()) return null;
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

function makeTreeNodeFromMutation(
  type: TreeNode["type"],
  value: { path?: string; name?: string; size?: number | null; mtime?: string | null }
): TreeNode | null {
  if (!value.path || !value.name) return null;
  return {
    name: value.name,
    path: value.path,
    type,
    size: typeof value.size === "number" ? value.size : null,
    mtime: value.mtime ?? null,
  };
}

// ─── Sunburst helpers ───────────────────────────────────────────────────────

interface SunburstNode {
  name: string;
  path: string;
  type: "dir" | "file";
  size: number | null;
  children?: SunburstNode[];
}

function nameHash(name: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h;
}

function colorFromName(name: string, ring: number): string {
  const hue = nameHash(name) % 360;
  const lightness = ring === 0 ? 58 : ring === 1 ? 46 : 36;
  return `hsl(${hue}, 68%, ${lightness}%)`;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
): string {
  const span = endAngle - startAngle;
  if (span >= 359.9) {
    const mid = startAngle + 180;
    return `${describeArc(cx, cy, innerR, outerR, startAngle, mid)} ${describeArc(cx, cy, innerR, outerR, mid, startAngle + 359.8)}`;
  }
  const s1 = polarToCartesian(cx, cy, outerR, startAngle);
  const e1 = polarToCartesian(cx, cy, outerR, endAngle);
  const s2 = polarToCartesian(cx, cy, innerR, endAngle);
  const e2 = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = span > 180 ? 1 : 0;
  return [
    `M ${s1.x.toFixed(3)} ${s1.y.toFixed(3)}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${e1.x.toFixed(3)} ${e1.y.toFixed(3)}`,
    `L ${s2.x.toFixed(3)} ${s2.y.toFixed(3)}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${e2.x.toFixed(3)} ${e2.y.toFixed(3)}`,
    "Z",
  ].join(" ");
}

const RING_SPECS = [
  { innerR: 38, outerR: 68 },
  { innerR: 71, outerR: 90 },
  { innerR: 93, outerR: 108 },
] as const;

const GAP_DEG = 1.5;
const MAX_SLICES = 14;
const SB_CX = 120;
const SB_CY = 120;

interface ArcSegment {
  d: string;
  color: string;
  label: string;
  size: number;
  ring: number;
}

function buildArcSegments(
  nodes: SunburstNode[],
  ring: number,
  startAngle: number,
  endAngle: number,
  parentHue?: number
): ArcSegment[] {
  if (ring >= RING_SPECS.length) return [];
  const { innerR, outerR } = RING_SPECS[ring];
  const totalRange = endAngle - startAngle;
  if (totalRange <= GAP_DEG * 2) return [];

  const valid = nodes
    .filter((n) => (n.size ?? 0) > 0)
    .sort((a, b) => (b.size ?? 0) - (a.size ?? 0))
    .slice(0, MAX_SLICES);
  if (!valid.length) return [];

  const totalSize = valid.reduce((s, n) => s + (n.size ?? 0), 0);
  if (totalSize <= 0) return [];

  const segments: ArcSegment[] = [];
  let angle = startAngle + GAP_DEG / 2;

  for (const node of valid) {
    const size = node.size ?? 0;
    const fraction = size / totalSize;
    const segRange = totalRange * fraction - GAP_DEG;
    if (segRange < 1.5) {
      angle += totalRange * fraction;
      continue;
    }
    const segEnd = angle + segRange;
    const hue = ring === 0 ? nameHash(node.name) % 360 : (parentHue ?? nameHash(node.name) % 360);
    const lightness = ring === 0 ? 58 : ring === 1 ? 46 : 36;
    const color = `hsl(${hue}, 68%, ${lightness}%)`;

    segments.push({
      d: describeArc(SB_CX, SB_CY, innerR, outerR, angle, segEnd),
      color,
      label: node.name,
      size,
      ring,
    });

    if (node.children?.length) {
      segments.push(...buildArcSegments(node.children, ring + 1, angle, segEnd, hue));
    }

    angle = segEnd + GAP_DEG;
  }

  return segments;
}

interface SunburstChartProps {
  root: SunburstNode;
  totalSize: number;
}

function SunburstChart({ root, totalSize }: SunburstChartProps) {
  const children = root.children ?? [];
  const arcs = buildArcSegments(children, 0, 0, 360);

  return (
    <div className="workspace__sunburst">
      <svg viewBox="0 0 240 240" aria-label="Folder size sunburst chart">
        {/* Background rings */}
        {RING_SPECS.map((spec, i) => (
          <circle
            key={i}
            cx={SB_CX}
            cy={SB_CY}
            r={(spec.innerR + spec.outerR) / 2}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={spec.outerR - spec.innerR}
          />
        ))}
        {/* Arc segments */}
        {arcs.map((arc, i) => (
          <path
            key={i}
            d={arc.d}
            fill={arc.color}
            stroke="rgba(0,0,0,0.35)"
            strokeWidth="0.6"
            opacity="0.92"
          >
            <title>{arc.label} — {formatBytes(arc.size)}</title>
          </path>
        ))}
        {/* Center circle */}
        <circle cx={SB_CX} cy={SB_CY} r="35" fill="rgba(20,20,30,0.88)" />
        {/* Center text */}
        <text
          x={SB_CX}
          y={SB_CY - 5}
          textAnchor="middle"
          dominantBaseline="auto"
          className="workspace__sunburst-total"
        >
          {formatBytes(totalSize)}
        </text>
        <text
          x={SB_CX}
          y={SB_CY + 9}
          textAnchor="middle"
          dominantBaseline="auto"
          className="workspace__sunburst-label"
        >
          total
        </text>
      </svg>
    </div>
  );
}

function renderChartSegment(segment: FolderChartSegment, index: number, segments: FolderChartSegment[]) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const prior = segments.slice(0, index).reduce((sum, item) => sum + item.pct, 0);
  const dash = (segment.pct / 100) * circumference;
  const dashOffset = -((prior / 100) * circumference);

  return (
    <circle
      key={`${segment.label}-${segment.color}`}
      cx="60"
      cy="60"
      r={radius}
      fill="none"
      stroke={segment.color}
      strokeDasharray={`${dash} ${Math.max(0, circumference - dash)}`}
      strokeDashoffset={dashOffset}
      strokeLinecap="butt"
      strokeWidth="18"
      transform="rotate(-90 60 60)"
    />
  );
}

// ─── FilePreview ─────────────────────────────────────────────────────────────

interface FilePreviewProps {
  node: TreeNode;
  onMutate: (payload: WorkspaceMutationPayload) => void;
}

function FilePreview({ node, onMutate }: FilePreviewProps) {
  const [preview, setPreview] = useState<WorkspaceFilePayload | null>(null);
  const [status, setStatus] = useState<"loading" | "too-large" | "error" | "done">("loading");
  const [errorMessage, setErrorMessage] = useState("Failed to load preview");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setPreview(null);
    setStatus("loading");
    setErrorMessage("Failed to load preview");

    if (node.size !== null && node.size > 1_000_000) {
      setStatus("too-large");
      return;
    }

    const controller = new AbortController();
    fetch(`/workspace/file?path=${encodeURIComponent(node.path)}`, {
      credentials: "same-origin",
      signal: controller.signal,
    })
      .then(async (res) => {
        const data = await readJsonSafely<WorkspaceFilePayload | { error?: string; message?: string }>(res);
        if (!res.ok) {
          throw new Error(getErrorMessage(data, `HTTP ${res.status}`));
        }
        setPreview((data as WorkspaceFilePayload | null) ?? null);
        setStatus("done");
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setErrorMessage(err instanceof Error ? err.message : "Failed to load preview");
        setStatus("error");
      });

    return () => controller.abort();
  }, [node.path, node.size]);

  const kind = getWorkspacePreviewKind(node.name, preview);
  const content = getWorkspaceFileText(preview);
  const encodedPath = encodeURIComponent(node.path);
  const rawUrl = preview?.url ?? `/workspace/raw?path=${encodedPath}`;
  const downloadUrl = `/workspace/raw?path=${encodedPath}&download=1`;

  const copyPath = useCallback(() => {
    navigator.clipboard.writeText(node.path).catch(() => {});
  }, [node.path]);

  const handleDelete = useCallback(async () => {
    if (isDeleting) return;
    const confirmed = window.confirm(`Delete ${node.name}? This cannot be undone.`);
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`/workspace/file?path=${encodeURIComponent(node.path)}`, {
        method: "DELETE",
        credentials: "same-origin",
      });
      const data = await readJsonSafely<{ error?: string } & Record<string, unknown>>(response);
      if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to delete file"));
      }
      onMutate({ nextNode: null });
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Failed to delete file");
    } finally {
      setIsDeleting(false);
    }
  }, [isDeleting, node.name, node.path, onMutate]);

  return (
    <div className="workspace__preview-info">
      <div className="workspace__preview-name">{node.name}</div>
      <div className="workspace__preview-path">{node.path}</div>
      {node.size !== null && (
        <div className="workspace__preview-meta">{formatBytes(node.size)}</div>
      )}
      {node.mtime && (
        <div className="workspace__preview-meta">
          Modified: {new Date(node.mtime).toLocaleString()}
        </div>
      )}

      <div className="workspace__preview-actions">
        <button
          className="workspace__preview-action-btn"
          onClick={copyPath}
          title="Copy path"
        >
          <span className="codicon codicon-copy" />
          Copy path
        </button>
        <a
          className="workspace__preview-action-btn"
          href={downloadUrl}
          title="Download"
        >
          <span className="codicon codicon-cloud-download" />
          Download
        </a>
        <button
          className="workspace__preview-action-btn workspace__preview-action-btn--danger"
          disabled={isDeleting}
          onClick={handleDelete}
          title="Delete file"
        >
          <span className="codicon codicon-trash" />
          {isDeleting ? "Deleting…" : "Delete"}
        </button>
      </div>

      <div className="workspace__preview-content">
        {status === "loading" && (
          <div className="workspace__preview-meta workspace__preview-meta--loading">
            Loading…
          </div>
        )}
        {status === "too-large" && (
          <div className="workspace__preview-meta workspace__preview-meta--warn">
            File too large to preview
          </div>
        )}
        {status === "error" && (
          <div className="workspace__preview-meta workspace__preview-meta--error">
            {errorMessage}
          </div>
        )}
        {status === "done" && preview?.truncated && (
          <div className="workspace__preview-meta workspace__preview-meta--warn">
            Preview truncated to fit the pane
          </div>
        )}
        {status === "done" && kind === "image" && (
          <div className="workspace__preview-image">
            <img src={rawUrl} alt={node.name} />
          </div>
        )}
        {status === "done" && kind === "binary" && (
          <div className="workspace__preview-meta workspace__preview-meta--warn">
            Binary file — cannot preview
          </div>
        )}
        {status === "done" && kind === "code" && content !== null && (
          <pre className="workspace__preview-code">{content}</pre>
        )}
        {status === "done" && kind === "markdown" && content !== null && (
          <div
            className="workspace__preview-markdown"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: rendered markdown
            dangerouslySetInnerHTML={{
              __html: marked(content, { async: false }) as string,
            }}
          />
        )}
      </div>
    </div>
  );
}

// ─── FolderPreview ────────────────────────────────────────────────────────────

interface FolderPreviewProps {
  node: TreeNode;
  onMutate: (payload: WorkspaceMutationPayload) => void;
}

function FolderPreview({ node, onMutate }: FolderPreviewProps) {
  const [children, setChildren] = useState<ChildInfo[] | null>(null);
  const [sunburstRoot, setSunburstRoot] = useState<SunburstNode | null>(null);
  const [totalSize, setTotalSize] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "error" | "done">("loading");
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "chart">("list");
  const [actionBusy, setActionBusy] = useState<"create" | "upload" | null>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setChildren(null);
    setSunburstRoot(null);
    setTotalSize(null);
    setStatus("loading");
    setShowAll(false);

    const controller = new AbortController();
    const treeFetch = fetch(
      `/workspace/tree?path=${encodeURIComponent(node.path)}&depth=3`,
      { credentials: "same-origin", signal: controller.signal }
    ).then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json() as Promise<{ root: SunburstNode }>;
    });

    const statFetch = fetch(
      `/workspace/stat?path=${encodeURIComponent(node.path)}`,
      { credentials: "same-origin", signal: controller.signal }
    ).then((r) => {
      if (!r.ok) return null;
      return r.json() as Promise<{ size?: number } | null>;
    }).catch(() => null);

    Promise.all([treeFetch, statFetch])
      .then(([treeData, statData]) => {
        const root = treeData.root;
        const kids = (root?.children ?? []) as ChildInfo[];
        const sorted = [...kids].sort((a, b) => {
          const sa = a.size ?? 0;
          const sb = b.size ?? 0;
          return sb - sa;
        });
        setChildren(sorted);
        setSunburstRoot(root ?? null);
        const sizeFromStat = statData?.size ?? null;
        if (sizeFromStat !== null) {
          setTotalSize(sizeFromStat);
        } else {
          const sum = kids.reduce((acc, k) => acc + (k.size ?? 0), 0);
          setTotalSize(sum);
        }
        setStatus("done");
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === "AbortError") return;
        setStatus("error");
      });

    return () => controller.abort();
  }, [node.path]);

  const MAX_VISIBLE = 10;
  const visible = children
    ? showAll
      ? children
      : children.slice(0, MAX_VISIBLE)
    : [];
  const hiddenCount = children ? Math.max(0, children.length - MAX_VISIBLE) : 0;
  const total = totalSize ?? children?.reduce((a, c) => a + (c.size ?? 0), 0) ?? 0;
  const chartSegments = buildFolderChartSegments(children, totalSize);
  const zipUrl = `/workspace/download?path=${encodeURIComponent(node.path)}`;

  const handleCreateFile = useCallback(async () => {
    if (actionBusy) return;
    const name = window.prompt("New file name", "untitled.txt")?.trim();
    if (!name) return;

    setActionBusy("create");
    try {
      const response = await fetch("/workspace/file", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: node.path, name, content: "" }),
      });
      const data = await readJsonSafely<{ error?: string; path?: string; name?: string; size?: number; mtime?: string | null }>(response);
      if (!response.ok) {
        throw new Error(getErrorMessage(data, "Failed to create file"));
      }
      onMutate({ nextNode: makeTreeNodeFromMutation("file", data ?? {}) });
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Failed to create file");
    } finally {
      setActionBusy(null);
    }
  }, [actionBusy, node.path, onMutate]);

  const handleUploadFiles = useCallback(async (files: FileList | null) => {
    if (!files?.length || actionBusy) return;

    setActionBusy("upload");
    try {
      let lastUploadedNode: TreeNode | null = null;
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(`/workspace/upload?path=${encodeURIComponent(node.path)}`, {
          method: "POST",
          credentials: "same-origin",
          body: formData,
        });
        const data = await readJsonSafely<{ error?: string; path?: string; name?: string; size?: number }>(response);
        if (!response.ok) {
          throw new Error(getErrorMessage(data, `Failed to upload ${file.name}`));
        }
        lastUploadedNode = makeTreeNodeFromMutation("file", data ?? {});
      }

      if (lastUploadedNode) {
        onMutate({ nextNode: lastUploadedNode });
      }
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Failed to upload file");
    } finally {
      if (uploadInputRef.current) uploadInputRef.current.value = "";
      setActionBusy(null);
    }
  }, [actionBusy, node.path, onMutate]);

  return (
    <div className="workspace__preview-info">
      <div className="workspace__preview-name workspace__preview-name--wrap">
        <span className="codicon codicon-folder-opened" style={{ marginRight: "4px" }} />
        {node.name}
      </div>

      <div className="workspace__folder-actions">
        <button className="workspace__folder-action-btn" disabled={actionBusy !== null} onClick={handleCreateFile} title="New file">
          <span className="codicon codicon-new-file" />
          {actionBusy === "create" ? "Creating…" : "New file"}
        </button>
        <button
          className="workspace__folder-action-btn"
          disabled={actionBusy !== null}
          onClick={() => uploadInputRef.current?.click()}
          title="Upload files"
        >
          <span className="codicon codicon-cloud-upload" />
          {actionBusy === "upload" ? "Uploading…" : "Upload"}
        </button>
        <a className="workspace__folder-action-btn" href={zipUrl} title="Download as zip">
          <span className="codicon codicon-cloud-download" />
          Download zip
        </a>
        <input
          ref={uploadInputRef}
          hidden
          multiple
          type="file"
          onChange={(event) => void handleUploadFiles(event.currentTarget.files)}
        />
      </div>

      <div className="workspace__preview-path">{node.path}</div>
      <div className="workspace__folder-desc">
        Folder selected — create a file, upload files, or download a zip archive.
      </div>

      {status === "loading" && (
        <div className="workspace__preview-meta workspace__preview-meta--loading">
          Loading…
        </div>
      )}
      {status === "error" && (
        <div className="workspace__preview-meta workspace__preview-meta--error">
          Failed to load folder info
        </div>
      )}
      {status === "done" && (
        <>
          <div className="workspace__folder-toolbar">
            {totalSize !== null && (
              <div className="workspace__folder-total">
                Total: {formatBytes(totalSize)}
              </div>
            )}
            <div className="workspace__folder-view-toggle" role="tablist" aria-label="Folder preview view">
              <button
                className={`workspace__folder-view-btn${viewMode === "list" ? " workspace__folder-view-btn--active" : ""}`}
                onClick={() => setViewMode("list")}
                type="button"
              >
                <span className="codicon codicon-list-tree" />
                List
              </button>
              <button
                className={`workspace__folder-view-btn${viewMode === "chart" ? " workspace__folder-view-btn--active" : ""}`}
                onClick={() => setViewMode("chart")}
                type="button"
              >
                <span className="codicon codicon-pie-chart" />
                Chart
              </button>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="workspace__folder-breakdown">
              {visible.map((child, i) => {
                const pct = total > 0 && child.size !== null
                  ? ((child.size / total) * 100).toFixed(0)
                  : null;
                const color = DOT_COLORS[i % DOT_COLORS.length];
                return (
                  <div key={child.path} className="workspace__folder-breakdown-item">
                    <span
                      className="workspace__folder-breakdown-dot"
                      style={{ backgroundColor: color }}
                    />
                    <span className="workspace__folder-breakdown-name" title={child.name}>
                      {child.type === "dir" ? "📁 " : ""}{child.name}
                    </span>
                    <span className={`workspace__folder-breakdown-size${child.type === "dir" ? " workspace__folder-breakdown-size--dir" : ""}`}>
                      {child.size !== null ? formatBytes(child.size) : "—"}
                    </span>
                    {pct !== null && (
                      <span className="workspace__folder-breakdown-pct">{pct}%</span>
                    )}
                  </div>
                );
              })}
              {!showAll && hiddenCount > 0 && (
                <button
                  className="workspace__folder-breakdown-more"
                  onClick={() => setShowAll(true)}
                >
                  and {hiddenCount} more…
                </button>
              )}
              {children && children.length === 0 && (
                <div className="workspace__preview-meta">Empty folder</div>
              )}
            </div>
          ) : (
            <div className="workspace__folder-chart-wrap">
              {sunburstRoot && (totalSize ?? 0) > 0 ? (
                <SunburstChart root={sunburstRoot} totalSize={totalSize ?? 0} />
              ) : chartSegments.length > 0 ? (
                <>
                  <div className="workspace__folder-chart">
                    <svg viewBox="0 0 120 120" aria-label="Folder size chart">
                      <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="18" />
                      {chartSegments.map((segment, index) => renderChartSegment(segment, index, chartSegments))}
                    </svg>
                    <div className="workspace__folder-chart-center">
                      <div className="workspace__folder-chart-total">{formatBytes(totalSize ?? total)}</div>
                      <div className="workspace__folder-chart-label">Total size</div>
                    </div>
                  </div>
                  <div className="workspace__folder-chart-legend">
                    {chartSegments.map((segment) => (
                      <div key={`${segment.label}-${segment.type}`} className="workspace__folder-chart-legend-item">
                        <span className="workspace__folder-breakdown-dot" style={{ backgroundColor: segment.color }} />
                        <span className="workspace__folder-breakdown-name" title={segment.label}>{segment.label}</span>
                        <span className="workspace__folder-breakdown-size">{formatBytes(segment.size)}</span>
                        <span className="workspace__folder-breakdown-pct">{segment.pct.toFixed(0)}%</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="workspace__preview-meta">Nothing sizeable to chart</div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── WorkspacePanel ──────────────────────────────────────────────────────────

export function WorkspacePanel() {
  const [topHeight, setTopHeight] = useState(() => Number(localStorage.getItem("piclaw-workspace-split")) || 260);
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef(topHeight);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [treeVersion, setTreeVersion] = useState(0);

  const handleMutation = useCallback((payload: WorkspaceMutationPayload) => {
    setTreeVersion((current) => current + 1);
    setSelectedNode(payload.nextNode);
  }, []);

  const onDragStart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const startY = e.clientY;
    const startH = heightRef.current;

    const onMove = (ev: MouseEvent) => {
      const delta = ev.clientY - startY;
      const containerH = containerRef.current?.getBoundingClientRect().height || 500;
      const next = Math.max(60, Math.min(containerH - 60, startH + delta));
      heightRef.current = next;
      setTopHeight(next);
    };
    const onUp = () => {
      localStorage.setItem("piclaw-workspace-split", String(heightRef.current));
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, []);

  return (
    <div ref={containerRef} className="workspace">
      <div className="workspace__pane-top" style={{ height: `${topHeight}px` }}>
        <div className="workspace__section-header workspace__section-header--padded">Files</div>
        <FileTree key={treeVersion} onFileSelect={setSelectedNode} />
      </div>
      <div
        className="workspace__drag-handle"
        onMouseDown={onDragStart}
      />
      <div className="workspace__pane-bottom">
        <div className="workspace__preview-header">Preview</div>
        {selectedNode ? (
          selectedNode.type === "dir"
            ? <FolderPreview node={selectedNode} onMutate={handleMutation} />
            : <FilePreview node={selectedNode} onMutate={handleMutation} />
        ) : (
          <div className="workspace__preview-empty">Select a file to preview</div>
        )}
      </div>
    </div>
  );
}
