import { useSignal, useComputed } from "@preact/signals";
import { useEffect } from "preact/hooks";

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
  const activeId = useSignal<string | null>(null); // currently editing item
  const editorTitle = useSignal("");
  const editorContent = useSignal("");
  const isNew = useSignal(true); // true = creating new, false = editing existing

  useEffect(() => {
    try {
      const stored = localStorage.getItem("piclaw-scratchpad-items");
      if (stored) items.value = JSON.parse(stored);
    } catch {}
  }, []);

  const persist = (updated: ScratchItem[]) => {
    items.value = updated;
    localStorage.setItem("piclaw-scratchpad-items", JSON.stringify(updated));
  };

  const resetEditor = () => {
    activeId.value = null;
    editorTitle.value = "";
    editorContent.value = "";
    isNew.value = true;
  };

  const selectItem = (item: ScratchItem) => {
    if (activeId.value === item.id) return; // already active
    // Auto-save current edit if dirty
    if (activeId.value && !isNew.value) {
      persist(items.value.map(n => n.id === activeId.value ? { ...n, title: editorTitle.value, content: editorContent.value } : n));
    }
    activeId.value = item.id;
    editorTitle.value = item.title;
    editorContent.value = item.content;
    isNew.value = false;
  };

  const addItem = () => {
    const title = editorTitle.value.trim();
    if (!title) return;
    const item: ScratchItem = {
      id: crypto.randomUUID(),
      title,
      content: editorContent.value.trim(),
      selected: false,
      createdAt: new Date().toISOString(),
      sentAt: null,
    };
    persist([item, ...items.value]);
    resetEditor();
  };

  const saveEdit = () => {
    if (!activeId.value) return;
    persist(items.value.map(n => n.id === activeId.value ? { ...n, title: editorTitle.value, content: editorContent.value } : n));
  };

  const newItem = () => {
    // Auto-save if editing
    if (activeId.value && !isNew.value) saveEdit();
    resetEditor();
  };

  const toggleCheck = (id: string, e: Event) => {
    e.stopPropagation();
    persist(items.value.map(n => n.id === id ? { ...n, selected: !n.selected } : n));
  };

  const deleteItem = (id: string, e: Event) => {
    e.stopPropagation();
    persist(items.value.filter(n => n.id !== id));
    if (activeId.value === id) resetEditor();
  };

  const selectedCount = useComputed(() => items.value.filter(n => n.selected).length);

  const sendItemToChat = async (id: string, e: Event) => {
    e.stopPropagation();
    const item = items.value.find(n => n.id === id);
    if (!item) return;
    const content = item.content || item.title;
    try {
      await fetch("/agent/web:default/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content }),
      });
      const now = new Date().toISOString();
      persist(items.value.map(n => n.id === id ? { ...n, sentAt: now } : n));
    } catch {}
  };

  const listHeight = useSignal(Number(localStorage.getItem("piclaw-scratchpad-split")) || 50); // percentage

  const onDragStart = (e: MouseEvent) => {
    e.preventDefault();
    const panel = (e.target as HTMLElement).closest(".scratchpad-panel") as HTMLElement;
    if (!panel) return;
    const panelRect = panel.getBoundingClientRect();
    const onMove = (ev: MouseEvent) => {
      const pct = Math.max(20, Math.min(80, ((ev.clientY - panelRect.top) / panelRect.height) * 100));
      listHeight.value = Math.round(pct);
    };
    const onUp = () => {
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      localStorage.setItem("piclaw-scratchpad-split", String(listHeight.value));
    };
    document.body.style.userSelect = "none";
    document.body.style.cursor = "row-resize";
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div className="scratchpad-panel">
      {/* Upper pane: items list */}
      <div className="scratchpad-panel__section" style={{ height: `${listHeight.value}%`, flex: 'none' }}>
        <div className="scratchpad-panel__section-header">
          <span className="scratchpad-panel__section-label">Items</span>
          <span className="scratchpad-panel__section-count">{items.value.length}</span>
          <button type="button" className="scratchpad-panel__icon-btn" onClick={newItem} title="New item">
            <i className="codicon codicon-add" />
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
              <div
                key={item.id}
                className={`scratchpad-panel__item${activeId.value === item.id ? " scratchpad-panel__item--active" : ""}${item.selected ? " scratchpad-panel__item--selected" : ""}${item.sentAt ? " scratchpad-panel__item--sent" : ""}`}
                onClick={() => selectItem(item)}
              >
                <div className="scratchpad-panel__item-body">
                  <div className="scratchpad-panel__item-header">
                    <span className="scratchpad-panel__item-title">{item.title}</span>
                    {item.sentAt && <span className="scratchpad-panel__sent-badge" title={`Sent ${new Date(item.sentAt).toLocaleString()}`}>✓</span>}
                  </div>
                  {item.content && <span className="scratchpad-panel__item-content">{item.content.length > 80 ? item.content.slice(0, 80) + "…" : item.content}</span>}
                </div>
                <button type="button" className="scratchpad-panel__icon-btn scratchpad-panel__play-btn" onClick={(e) => sendItemToChat(item.id, e)} title="Send to chat">
                  <i className="codicon codicon-play" />
                </button>
                <button type="button" className="scratchpad-panel__icon-btn scratchpad-panel__delete-btn" onClick={(e) => deleteItem(item.id, e)} title="Delete">
                  <i className="codicon codicon-trash" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Drag handle */}
      <div className="scratchpad-panel__divider" onMouseDown={onDragStart} />

      {/* Lower pane: editor */}
      <div className="scratchpad-panel__section scratchpad-panel__editor">
        <input
          className="scratchpad-panel__input"
          type="text"
          placeholder="Title..."
          value={editorTitle.value}
          onInput={(e) => {
            editorTitle.value = (e.target as HTMLInputElement).value;
            if (!isNew.value) saveEdit();
          }}
          onKeyDown={(e) => { if (e.key === "Enter" && isNew.value && editorTitle.value.trim()) addItem(); }}
        />
        <textarea
          className="scratchpad-panel__textarea"
          placeholder="Content..."
          value={editorContent.value}
          onInput={(e) => {
            editorContent.value = (e.target as HTMLTextAreaElement).value;
            if (!isNew.value) saveEdit();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && isNew.value && editorTitle.value.trim()) {
              e.preventDefault();
              addItem();
            }
          }}
        />
        {isNew.value && (
          <button type="button" className="scratchpad-panel__add-btn" onClick={addItem} disabled={!editorTitle.value.trim()}>
            + Add
          </button>
        )}
      </div>
    </div>
  );
}
