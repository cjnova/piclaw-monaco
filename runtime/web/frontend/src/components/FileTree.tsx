/**
 * FileTree.tsx – Lazy-loading workspace file tree component.
 *
 * Fetches directory listings from GET /workspace/tree and renders
 * an expandable tree with codicon icons. Clicking a folder toggles
 * expand/collapse and lazy-loads children. Clicking a file selects it.
 */

import { useState, useEffect, useCallback } from "preact/hooks";

/** Tree node shape returned by GET /workspace/tree */
interface TreeNode {
  name: string;
  path: string;
  type: "dir" | "file";
  size: number | null;
  mtime: string | null;
  child_count?: number;
  children?: TreeNode[];
}

/** API response envelope */
interface TreeResponse {
  root: TreeNode;
  truncated?: boolean;
}

// ─── helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

async function fetchTree(dirPath: string): Promise<TreeNode[]> {
  const params = new URLSearchParams({ path: dirPath, depth: "1" });
  const res = await fetch(`/workspace/tree?${params}`, { credentials: "same-origin" });
  if (res.status === 401) throw new Error("auth");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data: TreeResponse = await res.json();
  return data.root?.children ?? [];
}

// ─── TreeItem ─────────────────────────────────────────────────────────────────

interface TreeItemProps {
  node: TreeNode;
  depth: number;
  selectedPath: string | null;
  onSelect: (node: TreeNode) => void;
}

function TreeItem({ node, depth, selectedPath, onSelect }: TreeItemProps) {
  const isDir = node.type === "dir";
  const [expanded, setExpanded] = useState(false);
  const [children, setChildren] = useState<TreeNode[] | null>(
    node.children !== undefined ? node.children : null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isSelected = selectedPath === node.path;

  const toggle = useCallback(async () => {
    if (!isDir) {
      onSelect(node);
      return;
    }
    if (!expanded) {
      // Expand: load children if not yet loaded
      if (children === null) {
        setLoading(true);
        setError(null);
        try {
          const loaded = await fetchTree(node.path);
          setChildren(loaded);
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : "Failed to load";
          setError(msg);
        } finally {
          setLoading(false);
        }
      }
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    onSelect(node);
  }, [isDir, expanded, children, node, onSelect]);

  const iconName = isDir
    ? expanded
      ? "folder-opened"
      : "folder"
    : getFileIcon(node.name);

  const meta = isDir
    ? node.child_count !== undefined
      ? `${node.child_count}`
      : ""
    : node.size !== null
    ? formatBytes(node.size)
    : "";

  return (
    <div>
      <div
        className={[
          "file-tree__item",
          isDir ? "file-tree__item--dir" : "file-tree__item--file",
          isSelected ? "file-tree__item--selected" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ paddingLeft: `${depth * 16}px` }}
        onClick={toggle}
        title={node.path}
      >
        <span
          className={`codicon codicon-${expanded && isDir ? "chevron-down" : isDir ? "chevron-right" : "blank"} file-tree__chevron`}
        />
        <span className={`codicon codicon-${iconName} file-tree__icon`} />
        <span className="file-tree__name">{node.name}</span>
        {meta && <span className="file-tree__meta">{meta}</span>}
      </div>

      {loading && (
        <div
          className="file-tree__loading"
          style={{ paddingLeft: `${(depth + 1) * 16}px` }}
        >
          Loading…
        </div>
      )}

      {error && (
        <div
          className="file-tree__error"
          style={{ paddingLeft: `${(depth + 1) * 16}px` }}
        >
          {error === "auth" ? "Authenticate to browse files" : "Failed to load"}
          <button
            className="file-tree__retry"
            onClick={(e) => {
              e.stopPropagation();
              setError(null);
              setChildren(null);
              setExpanded(false);
            }}
          >
            Retry
          </button>
        </div>
      )}

      {expanded && !loading && children && children.length > 0 && (
        <div>
          {children.map((child) => (
            <TreeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              selectedPath={selectedPath}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}

      {expanded && !loading && children && children.length === 0 && (
        <div
          className="file-tree__empty"
          style={{ paddingLeft: `${(depth + 1) * 16}px` }}
        >
          Empty folder
        </div>
      )}
    </div>
  );
}

function getFileIcon(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const iconMap: Record<string, string> = {
    ts: "symbol-misc",
    tsx: "symbol-misc",
    js: "symbol-misc",
    jsx: "symbol-misc",
    json: "json",
    md: "markdown",
    txt: "file-text",
    html: "code",
    css: "symbol-color",
    scss: "symbol-color",
    svg: "file-media",
    png: "file-media",
    jpg: "file-media",
    jpeg: "file-media",
    gif: "file-media",
    webp: "file-media",
    sh: "terminal",
    yaml: "list-tree",
    yml: "list-tree",
    toml: "list-tree",
    lock: "lock",
    gitignore: "git-commit",
    env: "key",
  };
  return iconMap[ext] ?? "file";
}

// ─── FileTree ─────────────────────────────────────────────────────────────────

interface FileTreeProps {
  onFileSelect?: (node: TreeNode) => void;
}

export function FileTree({ onFileSelect }: FileTreeProps) {
  const [rootChildren, setRootChildren] = useState<TreeNode[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const children = await fetchTree("");
      setRootChildren(children);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleSelect = useCallback(
    (node: TreeNode) => {
      setSelectedPath(node.path);
      if (node.type === "file") {
        onFileSelect?.(node);
      }
    },
    [onFileSelect]
  );

  if (loading) {
    return <div className="file-tree file-tree__loading">Loading workspace…</div>;
  }

  if (error) {
    return (
      <div className="file-tree">
        <div className="file-tree__error">
          {error === "auth"
            ? "Authenticate to browse files"
            : "Failed to load workspace"}
          <button className="file-tree__retry" onClick={load}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!rootChildren || rootChildren.length === 0) {
    return (
      <div className="file-tree">
        <div className="file-tree__empty">No files found</div>
      </div>
    );
  }

  return (
    <div className="file-tree">
      {rootChildren.map((node) => (
        <TreeItem
          key={node.path}
          node={node}
          depth={0}
          selectedPath={selectedPath}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export type { TreeNode };
