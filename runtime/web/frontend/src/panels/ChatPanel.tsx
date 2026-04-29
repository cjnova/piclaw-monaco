import { useRef } from "preact/hooks";
import { useTheme } from "../theme/ThemeProvider";

interface ChatPanelProps {
  onOpenPalette?: () => void;
}

export function ChatPanel({ onOpenPalette }: ChatPanelProps = {}) {
  const theme = useTheme();
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
    <section
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: theme.bg,
        minHeight: 0,
      }}
    >
      {/* Chat content */}

      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "30px", color: theme.text }}>🤖 Chat</h1>
          <p style={{ margin: "10px 0 0", color: theme.textMuted, fontSize: "14px" }}>Messages will appear here</p>
        </div>
      </div>

      <div
        style={{
          background: theme.bgSidebar,
          borderTop: `1px solid ${theme.border}`,
          padding: "12px",
          display: "flex",
          gap: "10px",
          alignItems: "flex-end",
          flexShrink: 0,
        }}
      >
        <textarea
          ref={textareaRef}
          placeholder="Type a message..."
          rows={1}
          onInput={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              // TODO: send message
            }
          }}
          style={{
            flex: 1,
            minWidth: 0,
            border: `1px solid ${theme.inputBorder}`,
            background: theme.inputBg,
            color: theme.text,
            borderRadius: "10px",
            padding: "10px 12px",
            fontSize: "13px",
            outline: "none",
            resize: "none",
            lineHeight: "1.4",
            maxHeight: "25vh",
            overflowY: "hidden",
            fontFamily: "inherit",
            scrollbarWidth: "thin",
            scrollbarColor: `rgba(255,255,255,0.15) transparent`,
          }}
        />
        <button
          type="button"
          style={{
            border: `1px solid ${theme.accent}`,
            background: theme.accent,
            color: theme.bgTerminal,
            borderRadius: "10px",
            padding: "10px 14px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            alignSelf: "flex-end",
          }}
        >
          Send
        </button>
      </div>
    </section>
  );
}
