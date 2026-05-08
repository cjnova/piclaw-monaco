import { Fragment, h, type JSX } from "preact";
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

type PromptDialogRequest = {
  kind: "prompt";
  opts: PromptOptions;
  resolve: (value: string | null) => void;
};

type ConfirmDialogRequest = {
  kind: "confirm";
  opts: ConfirmOptions;
  resolve: (value: boolean) => void;
};

type AlertDialogRequest = {
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

function getActiveDialog() {
  return activeDialog;
}

function subscribeDialog(listener: () => void) {
  subscribers.add(listener);
  return () => {
    subscribers.delete(listener);
  };
}

async function showPrompt(opts: PromptOptions): Promise<string | null> {
  return new Promise((resolve) => {
    enqueueDialog({ kind: "prompt", opts, resolve });
  });
}

async function showConfirm(opts: ConfirmOptions): Promise<boolean> {
  return new Promise((resolve) => {
    enqueueDialog({ kind: "confirm", opts, resolve });
  });
}

async function showAlert(opts: AlertOptions): Promise<void> {
  return new Promise((resolve) => {
    enqueueDialog({ kind: "alert", opts, resolve });
  });
}

function DialogHost(): JSX.Element {
  const [dialog, setDialog] = useState<DialogRequest | null>(getActiveDialog());

  useEffect(() => {
    return subscribeDialog(() => setDialog(getActiveDialog()));
  }, []);

  if (!dialog) return h(Fragment, null);

  if (dialog.kind === "prompt") {
    return h(ModalDialog, {
      mode: "prompt",
      title: dialog.opts.title,
      description: dialog.opts.description,
      placeholder: dialog.opts.placeholder,
      defaultValue: dialog.opts.defaultValue,
      confirmLabel: "Save",
      onConfirm: (value) => {
        dialog.resolve(value?.trim() ? value : null);
        resolveActiveDialog();
      },
      onCancel: () => {
        dialog.resolve(null);
        resolveActiveDialog();
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
        dialog.resolve(true);
        resolveActiveDialog();
      },
      onCancel: () => {
        dialog.resolve(false);
        resolveActiveDialog();
      },
    });
  }

  return h(ModalDialog, {
    mode: "alert",
    title: dialog.opts.title,
    description: dialog.opts.description,
    confirmLabel: "OK",
    onConfirm: () => {
      dialog.resolve();
      resolveActiveDialog();
    },
    onCancel: () => {
      dialog.resolve();
      resolveActiveDialog();
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
