import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

interface ScratchItem {
  id: string;
  title: string;
  content: string;
  selected: boolean;
  createdAt: string;
  sentAt?: string | null;
}

export function ScratchpadPanel() {
  const items = useSignal<ScratchItem[]>([]);
  const newTitle = useSignal("");
  const newContent = useSignal("");
  const editingId = useSignal<string | null>(null);
  const editTitle = useSignal("");
  const editContent = useSignal("");
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("piclaw-scratchpad-items");
      if (stored) items.value = JSON.parse(stored);
    } catch {}
  }, []);

  // Save to localStorage whenever items change
  const persist = (updated: ScratchItem[]) => {
    items.value = updated;
    localStorage.setItem("piclaw-scratchpad-items", JSON.stringify(updated));
  };

  const addItem = () => {
    const title = newTitle.value.trim();
    if (!title) return;
    const item: ScratchItem = {
      id: crypto.randomUUID(),
      title,
      content: newContent.value.trim(),
      selected: false,
      createdAt: new Date().toISOString(),
      sentAt: null,
    };
    persist([item, ...items.value]);
    newTitle.value = "";
    newContent.value = "";
  };

  const toggleSelect = (id: string) => {
    persist(items.value.map(n => n.id === id ? { ...n, selected: !n.selected } : n));
  };

  const deleteItem = (id: string) => {
    persist(items.value.filter(n => n.id !== id));
  };

  const startEdit = (item: ScratchItem) => {
    editingId.value = item.id;
    editTitle.value = item.title;
    editContent.value = item.content;
  };

  const saveEdit = () => {
    if (!editingId.value) return;
    persist(items.value.map(n => n.id === editingId.value ? { ...n, title: editTitle.value, content: editContent.value } : n));
    editingId.value = null;
    editTitle.value = "";
    editContent.value = "";
  };

  const cancelEdit = () => {
    editingId.value = null;
    editTitle.value = "";
    editContent.value = "";
  };

  const selectedCount = items.value.filter(n => n.selected).length;

  const sendToChat = async () => {
    const selected = items.value.filter(n => n.selected);
    if (!selected.length) return;
    const content = selected.map(n => n.content || n.title).join("\n\n");
    try {
      await fetch("/agent/web:default/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content }),
      });
      // Mark as sent (don't remove)
      const now = new Date().toISOString();
      persist(items.value.map(n => n.selected ? { ...n, selected: false, sentAt: now } : n));
    } catch {}
  };

  const clearSelected = () => {
    persist(items.value.map(n => ({ ...n, selected: false })));
  };

  return (
    <div className="scratchpad-panel">
      <div className="scratchpad-panel__add">
        <input
          className="scratchpad-panel__input"
          type="text"
          placeholder="Title..."
          value={newTitle.value}
          onInput={(e) => (newTitle.value = (e.target as HTMLInputElement).value)}
          onKeyDown={(e) => { if (e.key === "Enter" && newTitle.value.trim()) contentRef.current?.focus(); }}
        />
        <textarea
          ref={contentRef}
          className="scratchpad-panel__textarea"
          placeholder="Content..."
          value={newContent.value}
          onInput={(e) => (newContent.value = (e.target as HTMLTextAreaElement).value)}
          rows={5}
        />
        <button type="button" className="scratchpad-panel__add-btn" onClick={addItem} disabled={!newTitle.value.trim()}>
          + Add
        </button>
      </div>

      <div className="scratchpad-panel__list">
        {items.value.length === 0 ? (
          <div className="scratchpad-panel__empty">
            <i className="codicon codicon-notebook" />
            <span>No items yet</span>
          </div>
        ) : (
          items.value.map(item => (
            <div key={item.id} className={`scratchpad-panel__item${item.selected ? " scratchpad-panel__item--selected" : ""}${item.sentAt ? " scratchpad-panel__item--sent" : ""}`}>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => toggleSelect(item.id)}
                className="scratchpad-panel__checkbox"
              />
              {editingId.value === item.id ? (
                <div className="scratchpad-panel__edit-row">
                  <input
                    className="scratchpad-panel__edit-input"
                    type="text"
                    value={editTitle.value}
                    placeholder="Title..."
                    onInput={(e) => (editTitle.value = (e.target as HTMLInputElement).value)}
                    onKeyDown={(e) => { if (e.key === "Escape") cancelEdit(); }}
                    // biome-ignore lint/a11y/noAutofocus: intentional focus on edit activation
                    autoFocus
                  />
                  <textarea
                    className="scratchpad-panel__edit-textarea"
                    value={editContent.value}
                    placeholder="Content..."
                    onInput={(e) => (editContent.value = (e.target as HTMLTextAreaElement).value)}
                    rows={5}
                  />
                  <div className="scratchpad-panel__edit-actions">
                    <button type="button" className="scratchpad-panel__icon-btn" onClick={saveEdit} title="Save">✓</button>
                    <button type="button" className="scratchpad-panel__icon-btn" onClick={cancelEdit} title="Cancel">✕</button>
                  </div>
                </div>
              ) : (
                <div className="scratchpad-panel__item-body" onDblClick={() => startEdit(item)}>
                  <div className="scratchpad-panel__item-header">
                    <span className="scratchpad-panel__item-title">{item.title}</span>
                    {item.sentAt && <span className="scratchpad-panel__sent-badge" title={`Sent ${new Date(item.sentAt).toLocaleString()}`}>✓ sent</span>}
                  </div>
                  {item.content && <span className="scratchpad-panel__item-content">{item.content.length > 150 ? item.content.slice(0, 150) + "…" : item.content}</span>}
                </div>
              )}
              <button type="button" className="scratchpad-panel__icon-btn scratchpad-panel__delete-btn" onClick={() => deleteItem(item.id)} title="Delete">
                <i className="codicon codicon-trash" />
              </button>
            </div>
          ))
        )}
      </div>

      {items.value.length > 0 && (
        <div className="scratchpad-panel__actions">
          <button
            type="button"
            className="scratchpad-panel__action-btn scratchpad-panel__action-btn--send"
            onClick={sendToChat}
            disabled={selectedCount === 0}
          >
            Send to chat ({selectedCount})
          </button>
          <button
            type="button"
            className="scratchpad-panel__action-btn"
            onClick={clearSelected}
            disabled={selectedCount === 0}
          >
            Clear selection
          </button>
        </div>
      )}
    </div>
  );
}
