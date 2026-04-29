import { useTheme } from "../theme/ThemeProvider";

export function ChatPanel() {
  const theme = useTheme();

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
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
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
          }}
        />
        <button
          type="button"
          style={{
            border: `1px solid ${theme.accent}`,
            background: theme.accent,
            color: "#11111b",
            borderRadius: "10px",
            padding: "10px 14px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </section>
  );
}
