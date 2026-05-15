import { useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import { copyToClipboard } from "../utils/clipboard";

interface CopyButtonProps {
  text: string;
  className?: string;
  /** Additional class applied when in 'copied' state */
  copiedClassName?: string;
  title?: string;
  children?: ComponentChildren;
  /** Children to render when in 'copied' state (overrides children if provided) */
  copiedChildren?: ComponentChildren;
  /** If true, dispatch piclaw:status-flash instead of managing local copied state */
  flashEvent?: boolean;
}

/**
 * Reusable copy-to-clipboard button.
 * - Uses the shared copyToClipboard utility (navigator.clipboard + textarea fallback)
 * - Shows brief "Copied!" feedback via local state or piclaw:status-flash event
 */
export function CopyButton({
  text,
  className,
  copiedClassName,
  title,
  children,
  copiedChildren,
  flashEvent = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: MouseEvent) => {
    e.stopPropagation();
    const ok = await copyToClipboard(text);

    if (flashEvent) {
      window.dispatchEvent(
        new CustomEvent("piclaw:status-flash", {
          detail: ok
            ? { message: "Copied to clipboard", type: "success" }
            : { message: "Copy failed — clipboard unavailable", type: "error" },
        })
      );
    } else {
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const resolvedTitle = copied ? "Copied!" : (title ?? "Copy");
  const ariaLabel = copied ? "Copied!" : (title ?? "Copy");
  const resolvedClassName = copied && copiedClassName
    ? `${className ?? ""} ${copiedClassName}`.trim()
    : className;
  const resolvedChildren = copied && copiedChildren !== undefined
    ? copiedChildren
    : (children ?? (copied ? "✓" : "Copy"));

  return (
    <button
      type="button"
      className={resolvedClassName}
      aria-label={ariaLabel}
      title={resolvedTitle}
      onClick={handleClick}
    >
      {resolvedChildren}
    </button>
  );
}
