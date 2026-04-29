import { useState, useCallback, useRef } from "preact/hooks";
import { FileTree, type TreeNode } from "../components/FileTree";

export function WorkspacePanel() {
  const [topHeight, setTopHeight] = useState(() => Number(localStorage.getItem("piclaw-workspace-split")) || 260);
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef(topHeight);
  const [selectedFile, setSelectedFile] = useState<TreeNode | null>(null);

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
        <FileTree onFileSelect={setSelectedFile} />
      </div>
      <div
        className="workspace__drag-handle"
        onMouseDown={onDragStart}
      />
      <div className="workspace__pane-bottom">
        <div className="workspace__preview-header">Preview</div>
        {selectedFile ? (
          <div className="workspace__preview-info">
            <div className="workspace__preview-name">{selectedFile.name}</div>
            <div className="workspace__preview-path">{selectedFile.path}</div>
            {selectedFile.size !== null && (
              <div className="workspace__preview-meta">
                Size: {selectedFile.size < 1024
                  ? `${selectedFile.size} B`
                  : selectedFile.size < 1048576
                  ? `${(selectedFile.size / 1024).toFixed(1)} KB`
                  : `${(selectedFile.size / 1048576).toFixed(1)} MB`}
              </div>
            )}
            {selectedFile.mtime && (
              <div className="workspace__preview-meta">Modified: {selectedFile.mtime}</div>
            )}
          </div>
        ) : (
          <div className="workspace__preview-empty">Select a file to preview</div>
        )}
      </div>
    </div>
  );
}
