import { useRef } from "preact/hooks";

interface ChatPanelProps {
  onOpenPalette?: () => void;
}

export function ChatPanel({ onOpenPalette }: ChatPanelProps = {}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: Event) => {
    const el = e.target as HTMLTextAreaElement;
    if (el.value === "/") {
      onOpenPalette?.();
      el.value = "";
      el.style.height = "auto";
      return;
    }
    // Auto-grow
    el.style.height = "auto";
    const maxH = window.innerHeight * 0.25;
    el.style.height = `${Math.min(el.scrollHeight, maxH)}px`;
    el.style.overflowY = el.scrollHeight > maxH ? "auto" : "hidden";
  };

  return (
    <section className="chat">
      {/* Chat content */}
      <div className="chat__messages">
        <div className="chat__empty">
          <h1 className="chat__empty-title">🤖 Chat</h1>
          <p className="chat__empty-subtitle">Messages will appear here</p>
        </div>
      </div>

      <div className="chat__compose">
        <textarea
          ref={textareaRef}
          className="chat__input"
          placeholder="Type a message..."
          rows={1}
          onInput={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              // TODO: send message
            }
          }}
        />
        <button
          type="button"
          className="chat__send-btn"
        >
          Send
        </button>
      </div>
    </section>
  );
}
