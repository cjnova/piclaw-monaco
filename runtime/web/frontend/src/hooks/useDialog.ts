import { h, type JSX } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ModalDialog } from "../components/ModalDialog";

interface PromptOptions {
  title: string;
  description?: string;
  placeholder?: string;
  defaultValue?: string;
}

interface ConfirmOptions {
  title: string;
  description?: string;
  confirmLabel?: string;
  destructive?: boolean;
}

interface AlertOptions {
  title: string;
  description?: string;
}

interface BaseDialogRequest {
  settled: boolean;
}

type PromptDialogRequest = BaseDialogRequest & {
  kind: "prompt";
  opts: PromptOptions;
  resolve: (value: string | null) => void;
};

type ConfirmDialogRequest = BaseDialogRequest & {
  kind: "confirm";
  opts: ConfirmOptions;
  resolve: (value: boolean) => void;
};

type AlertDialogRequest = BaseDialogRequest & {
  kind: "alert";
  opts: AlertOptions;
  resolve: () => void;
};

type DialogRequest = PromptDialogRequest | ConfirmDialogRequest | AlertDialogRequest;

const dialogQueue: DialogRequest[] = [];
let activeDialog: DialogRequest | null = null;
const subscribers = new Set<() => void>();

function notifySubscribers() {
  subscribers.forEach((subscriber) => subscriber());
}

function enqueueDialog(dialog: DialogRequest) {
  if (!activeDialog) {
    activeDialog = dialog;
    notifySubscribers();
    return;
  }
  dialogQueue.push(dialog);
}

function resolveActiveDialog() {
  activeDialog = dialogQueue.shift() ?? null;
  notifySubscribers();
}

function settleDialog(dialog: DialogRequest, settle: () => void) {
  if (dialog.settled) return;
  dialog.settled = true;
  settle();
  resolveActiveDialog();
}

function getActiveDialog() {
  return activeDialog;
}

function subscribeDialog(listener: () => void) {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

function showPrompt(opts: PromptOptions): Promise<string | null> {
  return new Promise((resolve) => {
    enqueueDialog({ kind: "prompt", opts, resolve, settled: false });
  });
}

function showConfirm(opts: ConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    enqueueDialog({ kind: "confirm", opts, resolve, settled: false });
  });
}

function showAlert(opts: AlertOptions): Promise<void> {
  return new Promise((resolve) => {
    enqueueDialog({ kind: "alert", opts, resolve, settled: false });
  });
}

function DialogHost(): JSX.Element {
  const [dialog, setDialog] = useState<DialogRequest | null>(getActiveDialog());

  useEffect(() => {
    return subscribeDialog(() => setDialog(getActiveDialog()));
  }, []);

  if (!dialog) return null;

  if (dialog.kind === "prompt") {
    return h(ModalDialog, {
      mode: "prompt",
      title: dialog.opts.title,
      description: dialog.opts.description,
      placeholder: dialog.opts.placeholder,
      defaultValue: dialog.opts.defaultValue,
      confirmLabel: "Save",
      onConfirm: (value) => {
        settleDialog(dialog, () => {
          dialog.resolve(value?.trim() ? value : null);
        });
      },
      onCancel: () => {
        settleDialog(dialog, () => {
          dialog.resolve(null);
        });
      },
    });
  }

  if (dialog.kind === "confirm") {
    return h(ModalDialog, {
      mode: "confirm",
      title: dialog.opts.title,
      description: dialog.opts.description,
      confirmLabel: dialog.opts.confirmLabel ?? "Confirm",
      destructive: dialog.opts.destructive,
      onConfirm: () => {
        settleDialog(dialog, () => {
          dialog.resolve(true);
        });
      },
      onCancel: () => {
        settleDialog(dialog, () => {
          dialog.resolve(false);
        });
      },
    });
  }

  return h(ModalDialog, {
    mode: "alert",
    title: dialog.opts.title,
    description: dialog.opts.description,
    confirmLabel: "OK",
    onConfirm: () => {
      settleDialog(dialog, () => {
        dialog.resolve();
      });
    },
    onCancel: () => {
      settleDialog(dialog, () => {
        dialog.resolve();
      });
    },
  });
}

export function useDialog(): {
  showPrompt: (opts: PromptOptions) => Promise<string | null>;
  showConfirm: (opts: ConfirmOptions) => Promise<boolean>;
  showAlert: (opts: AlertOptions) => Promise<void>;
  DialogHost: () => JSX.Element;
} {
  return {
    showPrompt,
    showConfirm,
    showAlert,
    DialogHost,
  };
}
