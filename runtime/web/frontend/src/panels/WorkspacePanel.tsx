import { useState, useCallback, useRef } from "preact/hooks";

export function WorkspacePanel() {
  const [topHeight, setTopHeight] = useState(() => Number(localStorage.getItem("piclaw-workspace-split")) || 200);
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef(topHeight);

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
        <div className="workspace__section">
          <div className="workspace__section-header">Files</div>
          <div className="workspace__section-empty">File tree will appear here</div>
        </div>
      </div>
      <div
        className="workspace__drag-handle"
        onMouseDown={onDragStart}
      />
      <div className="workspace__pane-bottom">
        <div className="workspace__preview-header">Preview</div>
        <div className="workspace__preview-empty">Select a file to preview</div>
      </div>
    </div>
  );
}
