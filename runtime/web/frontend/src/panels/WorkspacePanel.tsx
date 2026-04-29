import { useSignal } from "@preact/signals";
import { useCallback, useRef, useEffect } from "preact/hooks";

export function WorkspacePanel() {
  const topHeight = useSignal(Number(localStorage.getItem("piclaw-workspace-split")) || 200);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDragStart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const startY = e.clientY;
    const startH = topHeight.value;

    const onMove = (ev: MouseEvent) => {
      const delta = ev.clientY - startY;
      const containerH = containerRef.current?.getBoundingClientRect().height || 500;
      const next = Math.max(80, Math.min(containerH - 80, startH + delta));
      topHeight.value = next;
    };
    const onUp = () => {
      localStorage.setItem("piclaw-workspace-split", String(topHeight.value));
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
    <div ref={containerRef} style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%", overflow: "hidden" }}>
      {/* Top: File tree */}
      <div style={{ height: `${topHeight.value}px`, flexShrink: 0, overflow: "auto", padding: "8px 0" }} className="sidebar__content">
        <div style={{ padding: "0 12px", fontSize: "12px" }}>
          <div style={{ marginBottom: "8px", color: "#89b4fa", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Files</div>
          <div style={{ color: "#6c7086" }}>File tree will appear here</div>
        </div>
      </div>

      {/* Resize handle */}
      <div
        style={{ height: "4px", cursor: "row-resize", background: "#313244", flexShrink: 0 }}
        onMouseDown={onDragStart}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#89b4fa"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "#313244"; }}
      />

      {/* Bottom: Preview */}
      <div style={{ flex: 1, minHeight: 0, overflow: "auto", padding: "8px 12px" }} className="sidebar__content">
        <div style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>Preview</div>
        <div style={{ fontSize: "12px", color: "#6c7086" }}>Select a file to preview</div>
      </div>
    </div>
  );
}
