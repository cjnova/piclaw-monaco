import { useState, useCallback, useRef } from "preact/hooks";
import { useTheme } from "../theme/ThemeProvider";

export function WorkspacePanel() {
  const theme = useTheme();
  const [topHeight, setTopHeight] = useState(() => Number(localStorage.getItem("piclaw-workspace-split")) || 200);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startY: number; startH: number } | null>(null);

  const onDragStart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragRef.current = { startY: e.clientY, startH: topHeight };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current) return;
      const delta = ev.clientY - dragRef.current.startY;
      const containerH = containerRef.current?.getBoundingClientRect().height || 500;
      const next = Math.max(60, Math.min(containerH - 60, dragRef.current.startH + delta));
      setTopHeight(next);
    };
    const onUp = () => {
      dragRef.current = null;
      localStorage.setItem("piclaw-workspace-split", String(topHeight));
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [topHeight]);

  return (
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Top: File tree */}
      <div style={{ height: `${topHeight}px`, flexShrink: 0, overflowY: "auto", overflowX: "hidden" }}>
        <div style={{ padding: "8px 12px", fontSize: "12px" }}>
          <div style={{ marginBottom: "8px", color: theme.accent, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Files</div>
          <div style={{ color: theme.textMuted }}>File tree will appear here</div>
        </div>
      </div>

      {/* Resize handle */}
      <div
        style={{ height: "6px", cursor: "row-resize", background: theme.handle, flexShrink: 0, transition: "background 0.1s" }}
        onMouseDown={onDragStart}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = theme.handleHover; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = theme.handle; }}
      />

      {/* Bottom: Preview */}
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", overflowX: "hidden", padding: "8px 12px" }}>
        <div style={{ fontSize: "11px", color: theme.accent, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>Preview</div>
        <div style={{ fontSize: "12px", color: theme.textMuted }}>Select a file to preview</div>
      </div>
    </div>
  );
}
