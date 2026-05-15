import { useEffect, useRef } from "preact/hooks";
import type { ComponentChildren } from "preact";

const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
const Z = { modal: "var(--z-modal)", palette: "var(--z-palette)", overlay: "var(--z-overlay)", popup: "var(--z-popup)" } as const;

interface OverlayShellProps {
  open: boolean; onClose?: () => void;
  escape?: "close" | "deny" | "none"; backdrop?: "close" | "ignore";
  scrollLock?: boolean; focusTrap?: boolean; tier?: keyof typeof Z;
  className?: string; ariaLabel?: string; children: ComponentChildren;
}

export function OverlayShell({
  open, onClose, escape = "close", backdrop = "ignore",
  scrollLock = true, focusTrap = true, tier = "modal",
  className, ariaLabel, children,
}: OverlayShellProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    if (scrollLock) document.body.style.overflow = "hidden";
    const capture = escape === "deny";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && escape !== "none") {
        e.preventDefault();
        if (capture) e.stopPropagation();
        onClose?.();
      } else if (e.key === "Tab" && focusTrap && ref.current) {
        const els = Array.from(ref.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(el => !el.hidden);
        if (!els.length) return;
        const [first, last] = [els[0], els[els.length - 1]];
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      }
    };
    document.addEventListener("keydown", onKey, { capture });
    return () => {
      document.removeEventListener("keydown", onKey, { capture } as EventListenerOptions);
      if (scrollLock) document.body.style.overflow = prevOverflow;
      prev?.focus();
    };
  }, [open, escape, focusTrap, scrollLock, onClose]);

  if (!open) return null;
  return (
    <div
      className={className}
      style={{ position: "fixed", inset: 0, zIndex: Z[tier], display: "flex", alignItems: "center", justifyContent: "center" }}
      onMouseDown={e => { if (e.target === e.currentTarget && backdrop === "close") onClose?.(); }}
    >
      <div ref={ref} role="dialog" aria-modal="true" aria-label={ariaLabel} style={{ display: "contents" }}>
        {children}
      </div>
    </div>
  );
}
