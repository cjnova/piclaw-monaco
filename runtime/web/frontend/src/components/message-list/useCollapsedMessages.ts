import { useSignal } from "@preact/signals";
import { getChatJid } from "../../api/chat-jid";

const STORAGE_KEY = () => `piclaw:collapsed-messages:${getChatJid()}`;

function loadCollapsed(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY());
    if (raw) return new Set(JSON.parse(raw) as number[]);
  } catch {}
  return new Set();
}

function saveCollapsed(ids: Set<number>): void {
  try {
    // Keep max 500 entries to avoid quota issues
    const arr = [...ids].slice(-500);
    localStorage.setItem(STORAGE_KEY(), JSON.stringify(arr));
  } catch {}
}

export function useCollapsedMessages() {
  const collapsed = useSignal<Set<number>>(loadCollapsed());

  const toggle = (id: number) => {
    const next = new Set(collapsed.value);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    collapsed.value = next;
    saveCollapsed(next);
  };

  const isCollapsed = (id: number) => collapsed.value.has(id);

  return { isCollapsed, toggle };
}
