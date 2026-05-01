import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

interface Note {
  id: string;
  text: string;
  selected: boolean;
  createdAt: string;
}

export function NotepadPanel() {
  const notes = useSignal<Note[]>([]);
  const newNoteText = useSignal("");
  const editingId = useSignal<string | null>(null);
  const editText = useSignal("");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("piclaw-notepad-notes");
      if (stored) notes.value = JSON.parse(stored);
    } catch {}
  }, []);

  // Save to localStorage whenever notes change
  const persist = (updated: Note[]) => {
    notes.value = updated;
    localStorage.setItem("piclaw-notepad-notes", JSON.stringify(updated));
  };

  const addNote = () => {
    const text = newNoteText.value.trim();
    if (!text) return;
    const note: Note = {
      id: crypto.randomUUID(),
      text,
      selected: false,
      createdAt: new Date().toISOString(),
    };
    persist([note, ...notes.value]);
    newNoteText.value = "";
  };

  const toggleSelect = (id: string) => {
    persist(notes.value.map(n => n.id === id ? { ...n, selected: !n.selected } : n));
  };

  const deleteNote = (id: string) => {
    persist(notes.value.filter(n => n.id !== id));
  };

  const startEdit = (note: Note) => {
    editingId.value = note.id;
    editText.value = note.text;
  };

  const saveEdit = () => {
    if (!editingId.value) return;
    persist(notes.value.map(n => n.id === editingId.value ? { ...n, text: editText.value } : n));
    editingId.value = null;
    editText.value = "";
  };

  const cancelEdit = () => {
    editingId.value = null;
    editText.value = "";
  };

  const selectedCount = notes.value.filter(n => n.selected).length;

  const sendToChat = async () => {
    const selected = notes.value.filter(n => n.selected);
    if (!selected.length) return;
    const content = selected.map(n => `• ${n.text}`).join("\n");
    try {
      await fetch("/agent/web:default/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content }),
      });
      // Remove sent notes
      persist(notes.value.filter(n => !n.selected));
    } catch {}
  };

  const clearSelected = () => {
    persist(notes.value.map(n => ({ ...n, selected: false })));
  };

  return (
    <div className="notepad-panel">
      <div className="notepad-panel__add">
        <input
          className="notepad-panel__input"
          type="text"
          placeholder="Add a note..."
          value={newNoteText.value}
          onInput={(e) => (newNoteText.value = (e.target as HTMLInputElement).value)}
          onKeyDown={(e) => { if (e.key === "Enter") addNote(); }}
        />
        <button type="button" className="notepad-panel__add-btn" onClick={addNote}>+</button>
      </div>

      <div className="notepad-panel__list">
        {notes.value.length === 0 ? (
          <div className="notepad-panel__empty">
            <i className="codicon codicon-notebook" />
            <span>No notes yet</span>
          </div>
        ) : (
          notes.value.map(note => (
            <div key={note.id} className={`notepad-panel__note${note.selected ? " notepad-panel__note--selected" : ""}`}>
              <input
                type="checkbox"
                checked={note.selected}
                onChange={() => toggleSelect(note.id)}
                className="notepad-panel__checkbox"
              />
              {editingId.value === note.id ? (
                <div className="notepad-panel__edit-row">
                  <input
                    className="notepad-panel__edit-input"
                    type="text"
                    value={editText.value}
                    onInput={(e) => (editText.value = (e.target as HTMLInputElement).value)}
                    onKeyDown={(e) => { if (e.key === "Enter") saveEdit(); if (e.key === "Escape") cancelEdit(); }}
                    // biome-ignore lint/a11y/noAutofocus: intentional focus on edit activation
                    autoFocus
                  />
                  <button type="button" className="notepad-panel__icon-btn" onClick={saveEdit} title="Save">✓</button>
                  <button type="button" className="notepad-panel__icon-btn" onClick={cancelEdit} title="Cancel">✕</button>
                </div>
              ) : (
                <span className="notepad-panel__text" onDblClick={() => startEdit(note)}>
                  {note.text}
                </span>
              )}
              <button type="button" className="notepad-panel__icon-btn notepad-panel__delete-btn" onClick={() => deleteNote(note.id)} title="Delete">
                <i className="codicon codicon-trash" />
              </button>
            </div>
          ))
        )}
      </div>

      {notes.value.length > 0 && (
        <div className="notepad-panel__actions">
          <button
            type="button"
            className="notepad-panel__action-btn notepad-panel__action-btn--send"
            onClick={sendToChat}
            disabled={selectedCount === 0}
          >
            Send to chat ({selectedCount})
          </button>
          <button
            type="button"
            className="notepad-panel__action-btn"
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
