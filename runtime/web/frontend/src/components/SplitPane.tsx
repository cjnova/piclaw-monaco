import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

interface SplitPaneProps {
  direction: "horizontal" | "vertical";
  initialSize: number;
  minSize: number;
  maxSize: number;
  minSecondSize?: number;
  collapseSecond?: boolean;
  children: [ComponentChildren, ComponentChildren];
  onResize?: (size: number) => void;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function SplitPane({
  direction,
  initialSize,
  minSize,
  maxSize,
  minSecondSize = 0,
  collapseSecond = false,
  children,
  onResize,
}: SplitPaneProps) {
  const normalizedInitialSize = useMemo(() => clamp(initialSize, minSize, maxSize), [initialSize, minSize, maxSize]);
  const [firstSize, setFirstSize] = useState<number>(normalizedInitialSize);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const dragStartPositionRef = useRef(0);
  const dragStartSizeRef = useRef(normalizedInitialSize);
  const restoreSizeRef = useRef(normalizedInitialSize);

  const [firstChild, secondChild] = children;

  useEffect(() => {
    if (!isDragging) return;

    const axis = direction === "horizontal" ? "clientX" : "clientY";

    const handleMouseMove = (event: MouseEvent) => {
      const currentPosition = event[axis];
      const delta = currentPosition - dragStartPositionRef.current;
      const containerSize = direction === "horizontal"
        ? rootRef.current?.getBoundingClientRect().width ?? 0
        : rootRef.current?.getBoundingClientRect().height ?? 0;
      const maxAllowedFirst = containerSize > 0 ? Math.max(minSize, containerSize - minSecondSize) : maxSize;
      const nextSize = clamp(dragStartSizeRef.current + delta, 0, Math.min(maxSize, maxAllowedFirst));

      // Auto-collapse when dragged below half of minSize
      if (nextSize < minSize / 2) {
        setFirstSize(0);
        setIsCollapsed(true);
        onResize?.(0);
      } else {
        const clamped = clamp(nextSize, minSize, Math.min(maxSize, maxAllowedFirst));
        setFirstSize(clamped);
        setIsCollapsed(false);
        if (clamped > 0) restoreSizeRef.current = clamped;
        onResize?.(clamped);
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    const previousUserSelect = document.body.style.userSelect;
    const previousCursor = document.body.style.cursor;
    document.body.style.userSelect = "none";
    document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize";

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.style.userSelect = previousUserSelect;
      document.body.style.cursor = previousCursor;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [direction, isDragging, maxSize, minSecondSize, minSize, onResize]);

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    const axis = direction === "horizontal" ? "clientX" : "clientY";
    dragStartPositionRef.current = event[axis];
    // When collapsed, dragging should start from 0 so user can drag open
    dragStartSizeRef.current = isCollapsed ? 0 : firstSize;
    setIsDragging(true);
  };

  const handleDoubleClick = () => {
    if (isCollapsed) {
      const restored = clamp(restoreSizeRef.current || normalizedInitialSize, minSize, maxSize);
      setFirstSize(restored);
      setIsCollapsed(false);
      onResize?.(restored);
    } else {
      if (firstSize > 0) restoreSizeRef.current = firstSize;
      setFirstSize(0);
      setIsCollapsed(true);
      onResize?.(0);
    }
  };

  const displaySize = isCollapsed ? 0 : firstSize;

  const firstPaneStyle = collapseSecond
    ? undefined
    : direction === "horizontal"
      ? { width: `${displaySize}px`, minWidth: `${displaySize}px`, maxWidth: `${displaySize}px`, overflow: "hidden" as const }
      : { height: `${displaySize}px`, minHeight: `${displaySize}px`, maxHeight: `${displaySize}px`, overflow: "hidden" as const };

  return (
    <div ref={rootRef} className={`split-pane split-pane--${direction} ${isCollapsed ? "is-collapsed" : ""}`}>
      <div className="split-pane__first" style={firstPaneStyle}>
        {firstChild}
      </div>
      <div
        className={`split-handle split-handle--${direction} ${isCollapsed ? "split-handle--collapsed" : ""}`}
        onMouseDown={handleMouseDown}
        onDblClick={handleDoubleClick}
        role="separator"
        aria-orientation={direction === "horizontal" ? "vertical" : "horizontal"}
        aria-label={isCollapsed ? "Double-click or drag to restore panel" : "Resize panels"}
      />
      <div className="split-pane__second">
        {secondChild}
      </div>
    </div>
  );
}
