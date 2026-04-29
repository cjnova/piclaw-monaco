import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

interface SplitPaneProps {
  direction: "horizontal" | "vertical";
  initialSize: number;
  minSize: number;
  maxSize: number;
  children: [ComponentChildren, ComponentChildren];
  onResize?: (size: number) => void;
}

export function SplitPane({
  direction,
  initialSize,
  minSize,
  maxSize,
  children,
  onResize,
}: SplitPaneProps) {
  const [size, setSize] = useState(initialSize);
  const [collapsed, setCollapsed] = useState(false);
  const savedSizeRef = useRef(initialSize);
  const rootRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const startPosRef = useRef(0);
  const startSizeRef = useRef(0);

  const [first, second] = children;

  const isHorizontal = direction === "horizontal";

  const onMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    startPosRef.current = isHorizontal ? e.clientX : e.clientY;
    startSizeRef.current = collapsed ? 0 : size;
    if (collapsed) setCollapsed(false);

    const onMouseMove = (ev: MouseEvent) => {
      if (!draggingRef.current) return;
      const pos = isHorizontal ? ev.clientX : ev.clientY;
      const delta = pos - startPosRef.current;
      let next = startSizeRef.current + delta;

      // Snap to collapse if dragged very small
      if (next < minSize * 0.4) {
        next = 0;
      } else if (next < minSize) {
        next = minSize;
      } else if (next > maxSize) {
        next = maxSize;
      }

      setSize(next);
      setCollapsed(next === 0);
      if (next >= minSize) savedSizeRef.current = next;
      onResize?.(next);
    };

    const onMouseUp = () => {
      draggingRef.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.body.style.userSelect = "none";
    document.body.style.cursor = isHorizontal ? "col-resize" : "row-resize";
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, [isHorizontal, size, collapsed, minSize, maxSize, onResize]);

  const onDoubleClick = useCallback(() => {
    if (collapsed) {
      const restored = Math.max(minSize, Math.min(maxSize, savedSizeRef.current || initialSize));
      setSize(restored);
      setCollapsed(false);
      onResize?.(restored);
    } else {
      savedSizeRef.current = size;
      setSize(0);
      setCollapsed(true);
      onResize?.(0);
    }
  }, [collapsed, size, minSize, maxSize, initialSize, onResize]);

  const displaySize = collapsed ? 0 : size;

  const firstStyle = isHorizontal
    ? { width: `${displaySize}px`, flexShrink: 0, overflow: "hidden" as const }
    : { height: `${displaySize}px`, flexShrink: 0, overflow: "hidden" as const };

  return (
    <div
      ref={rootRef}
      className={`split-pane split-pane--${direction}`}
      style={{ display: "flex", flexDirection: isHorizontal ? "row" : "column", width: "100%", height: "100%" }}
    >
      <div style={firstStyle}>{first}</div>
      <div
        className={`split-handle split-handle--${direction}`}
        onMouseDown={onMouseDown}
        onDblClick={onDoubleClick}
        style={{
          flexShrink: 0,
          background: collapsed ? "#45475a" : "#313244",
          cursor: isHorizontal ? "col-resize" : "row-resize",
          width: isHorizontal ? "4px" : "100%",
          height: isHorizontal ? "100%" : "4px",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#89b4fa"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = collapsed ? "#45475a" : "#313244"; }}
      />
      <div style={{ flex: 1, overflow: "hidden", minWidth: 0, minHeight: 0 }}>{second}</div>
    </div>
  );
}
