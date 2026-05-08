import { useEffect, useRef, useState } from "preact/hooks";

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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCancel();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
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
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2 className="modal-dialog__title">{title}</h2>
        {description && <p className="modal-dialog__description">{description}</p>}

        {mode === "prompt" && (
          <input
            ref={inputRef}
            className="modal-dialog__input settings-panel__input"
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
              className="modal-dialog__btn settings-panel__provider-btn"
              onClick={onCancel}
            >
              {cancelLabel ?? "Cancel"}
            </button>
          )}
          <button
            ref={confirmRef}
            type="button"
            className={`modal-dialog__btn settings-panel__provider-btn${destructive ? " modal-dialog__btn--destructive" : " modal-dialog__btn--primary"}`}
            onClick={submit}
          >
            {confirmLabel ?? (mode === "prompt" ? "Save" : mode === "confirm" ? "Confirm" : "OK")}
          </button>
        </div>
      </div>
    </div>
  );
}
