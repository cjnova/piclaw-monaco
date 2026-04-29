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
    const clamped = clamp(normalizedInitialSize, minSize, maxSize);
    setFirstSize(clamped);
    restoreSizeRef.current = clamped;
    setIsCollapsed(false);
  }, [normalizedInitialSize, minSize, maxSize]);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const axis = direction === "horizontal" ? "clientX" : "clientY";

    const handleMouseMove = (event: MouseEvent) => {
      const currentPosition = event[axis];
      const delta = currentPosition - dragStartPositionRef.current;
      const containerSize = direction === "horizontal"
        ? rootRef.current?.getBoundingClientRect().width ?? 0
        : rootRef.current?.getBoundingClientRect().height ?? 0;
      const maxAllowedFirst = containerSize > 0 ? Math.max(minSize, containerSize - minSecondSize) : maxSize;
      const nextSize = clamp(dragStartSizeRef.current + delta, minSize, Math.min(maxSize, maxAllowedFirst));
      setFirstSize(nextSize);
      if (nextSize > 0) {
        restoreSizeRef.current = nextSize;
      }
      onResize?.(nextSize);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

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
    dragStartSizeRef.current = firstSize;

    if (isCollapsed) {
      setIsCollapsed(false);
    }

    setIsDragging(true);
  };

  const handleDoubleClick = () => {
    if (isCollapsed) {
      const restored = clamp(restoreSizeRef.current || normalizedInitialSize, minSize, maxSize);
      setFirstSize(restored);
      setIsCollapsed(false);
      onResize?.(restored);
      return;
    }

    if (firstSize > 0) {
      restoreSizeRef.current = firstSize;
    }

    setFirstSize(0);
    setIsCollapsed(true);
    onResize?.(0);
  };

  const firstPaneStyle = collapseSecond
    ? undefined
    : direction === "horizontal"
      ? { width: `${firstSize}px`, minWidth: `${firstSize}px`, maxWidth: `${firstSize}px` }
      : { height: `${firstSize}px`, minHeight: `${firstSize}px`, maxHeight: `${firstSize}px` };

  return (
    <div ref={rootRef} className={`split-pane split-pane--${direction} ${collapseSecond ? "is-second-collapsed" : ""}`}>
      <div className="split-pane__first" style={firstPaneStyle}>
        {firstChild}
      </div>
      <div
        className={`split-handle split-handle--${direction}`}
        onMouseDown={handleMouseDown}
        onDblClick={handleDoubleClick}
        role="separator"
        aria-orientation={direction === "horizontal" ? "vertical" : "horizontal"}
        aria-label="Resize panels"
        aria-hidden={collapseSecond}
      />
      <div className="split-pane__second">
        {secondChild}
      </div>
    </div>
  );
}
