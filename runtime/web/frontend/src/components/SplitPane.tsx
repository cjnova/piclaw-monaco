import { useCallback, useRef, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

interface SplitPaneProps {
  direction: "horizontal" | "vertical";
  initialSize: number;
  minSize: number;
  maxSize: number;
  children: [ComponentChildren, ComponentChildren];
  onResize?: (size: number) => void;
}

export function SplitPane({ direction, initialSize, minSize, maxSize, children, onResize }: SplitPaneProps) {
  const [size, setSize] = useState(initialSize);
  const rootRef = useRef<HTMLDivElement>(null);
  const isH = direction === "horizontal";
  const [first, second] = children;

  const onMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const startPos = isH ? e.clientX : e.clientY;
    const startSize = size;

    const onMove = (ev: MouseEvent) => {
      const pos = isH ? ev.clientX : ev.clientY;
      const next = Math.max(minSize, Math.min(maxSize, startSize + (pos - startPos)));
      setSize(next);
      onResize?.(next);
    };
    const onUp = () => {
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.body.style.userSelect = "none";
    document.body.style.cursor = isH ? "col-resize" : "row-resize";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [isH, size, minSize, maxSize, onResize]);

  const firstStyle = isH
    ? { width: `${size}px`, flexShrink: 0, overflow: "hidden" as const }
    : { height: `${size}px`, flexShrink: 0, overflow: "hidden" as const };

  return (
    <div ref={rootRef} style={{ display: "flex", flexDirection: isH ? "row" : "column", width: "100%", height: "100%" }}>
      <div style={firstStyle}>{first}</div>
      <div
        onMouseDown={onMouseDown}
        style={{
          flexShrink: 0,
          background: "#313244",
          cursor: isH ? "col-resize" : "row-resize",
          width: isH ? "4px" : "100%",
          height: isH ? "100%" : "4px",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#89b4fa"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "#313244"; }}
      />
      <div style={{ flex: 1, overflow: "hidden", minWidth: 0, minHeight: 0 }}>{second}</div>
    </div>
  );
}
