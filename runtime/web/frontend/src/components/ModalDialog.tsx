import { useEffect, useRef, useState } from "preact/hooks";

const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "[href]",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export type ModalDialogMode = "prompt" | "confirm" | "alert";

interface ModalDialogProps {
  mode: ModalDialogMode;
  title: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: (value?: string) => void;
  onCancel: () => void;
}

export function ModalDialog({
  mode,
  title,
  description,
  placeholder,
  defaultValue,
  confirmLabel,
  cancelLabel,
  destructive = false,
  onConfirm,
  onCancel,
}: ModalDialogProps) {
  const [value, setValue] = useState(defaultValue ?? "");
  const inputRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleIdRef = useRef(`modal-dialog-title-${Math.random().toString(36).slice(2, 9)}`);
  const descriptionIdRef = useRef(`modal-dialog-description-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    setValue(defaultValue ?? "");
  }, [defaultValue]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (mode === "prompt") {
        inputRef.current?.focus();
        inputRef.current?.select();
        return;
      }
      confirmRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [mode]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCancel();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onCancel]);

  const canBackdropClose = !(mode === "confirm" && destructive);

  const submit = () => {
    if (mode === "prompt") {
      onConfirm(value);
      return;
    }
    onConfirm();
  };

  return (
    <div
      className="modal-dialog__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && canBackdropClose) {
          onCancel();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        aria-labelledby={titleIdRef.current}
        aria-describedby={description ? descriptionIdRef.current : undefined}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 id={titleIdRef.current} className="modal-dialog__title">{title}</h2>
        {description && <p id={descriptionIdRef.current} className="modal-dialog__description">{description}</p>}

        {mode === "prompt" && (
          <input
            ref={inputRef}
            className="modal-dialog__input"
            type="text"
            value={value}
            placeholder={placeholder}
            onInput={(event) => setValue((event.target as HTMLInputElement).value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                submit();
              }
            }}
          />
        )}

        <div className="modal-dialog__actions">
          {mode !== "alert" && (
            <button
              type="button"
              className="modal-dialog__btn"
              onClick={onCancel}
            >
              {cancelLabel ?? "Cancel"}
            </button>
          )}
          <button
            ref={confirmRef}
            type="button"
            className={`modal-dialog__btn${destructive ? " modal-dialog__btn--destructive" : " modal-dialog__btn--primary"}`}
            onClick={submit}
          >
            {confirmLabel ?? (mode === "prompt" ? "Save" : mode === "confirm" ? "Confirm" : "OK")}
          </button>
        </div>
      </div>
    </div>
  );
}
