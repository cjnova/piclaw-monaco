import { useSignal } from "@preact/signals";
import { useCallback, useRef } from "preact/hooks";

export function WorkspacePanel() {
  const topHeight = useSignal(Number(localStorage.getItem("piclaw-workspace-split")) || 60);
  const dragRef = useRef<{ startY: number; startH: number } | null>(null);

  const onDragStart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const container = (e.target as HTMLElement).parentElement;
    if (!container) return;
    const containerH = container.getBoundingClientRect().height;
    dragRef.current = { startY: e.clientY, startH: topHeight.value };

    const onMove = (ev: MouseEvent) => {
      if (!dragRef.current || !container) return;
      const delta = ev.clientY - dragRef.current.startY;
      const pct = ((dragRef.current.startH / 100) * containerH + delta) / containerH * 100;
      topHeight.value = Math.max(20, Math.min(80, pct));
    };
    const onUp = () => {
      dragRef.current = null;
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
    <div style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
      {/* Top: File tree */}
      <div style={{ height: `${topHeight.value}%`, overflow: "auto", padding: "8px 0" }} className="sidebar__content">
        <div style={{ padding: "0 12px", fontSize: "12px", color: "#6c7086" }}>
          <div style={{ marginBottom: "8px", color: "#89b4fa", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Files</div>
          <div style={{ color: "#6c7086" }}>File tree will appear here</div>
        </div>
      </div>

      {/* Resize handle */}
      <div
        style={{ height: "4px", cursor: "row-resize", background: "#313244", flexShrink: 0, transition: "background 0.15s" }}
        onMouseDown={onDragStart}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#89b4fa"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "#313244"; }}
      />

      {/* Bottom: Preview */}
      <div style={{ flex: 1, overflow: "auto", padding: "8px 12px" }} className="sidebar__content">
        <div style={{ fontSize: "11px", color: "#89b4fa", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>Preview</div>
        <div style={{ fontSize: "12px", color: "#6c7086" }}>Select a file to preview</div>
      </div>
    </div>
  );
}
