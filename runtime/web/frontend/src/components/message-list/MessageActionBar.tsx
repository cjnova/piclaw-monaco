import { useState } from "preact/hooks";
import { useDialog } from "../../hooks/useDialog";

interface MessageActionBarProps {
  messageId: number;
  content: string;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onDelete: () => void;
}

export function MessageActionBar({
  messageId: _messageId,
  content,
  isCollapsed,
  onToggleCollapse,
  onDelete,
}: MessageActionBarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { showConfirm } = useDialog();

  const handleDelete = async () => {
    const confirmed = await showConfirm({
      title: "Delete this message?",
      confirmLabel: "Delete",
      destructive: true,
    });
    if (confirmed) {
      onDelete();
    }
  };

  const handleTTS = () => {
    if (isPlaying) {
      window.speechSynthesis?.cancel();
      setIsPlaying(false);
      return;
    }
    const synth = window.speechSynthesis;
    if (!synth) return;
    // Strip markdown/HTML for clean TTS
    const plainText = content
      .replace(/[#*`~\[\]()>|_]/g, "")
      .replace(/<[^>]+>/g, "")
      .trim();
    if (!plainText) return;
    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    synth.cancel(); // Cancel any previous
    synth.speak(utterance);
    setIsPlaying(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      window.dispatchEvent(
        new CustomEvent("piclaw:status-flash", {
          detail: { message: "Copied to clipboard", type: "success" },
        })
      );
    } catch {
      window.dispatchEvent(
        new CustomEvent("piclaw:status-flash", {
          detail: { message: "Copy failed", type: "error" },
        })
      );
    }
  };

  return (
    <div className="message-action-bar">
      {content && (
        <button
          className={`message-action-bar__btn${isPlaying ? " message-action-bar__btn--active" : ""}`}
          onClick={handleTTS}
          title={isPlaying ? "Stop reading" : "Read aloud"}
          aria-label={isPlaying ? "Stop" : "Read aloud"}
          type="button"
        >
          <i className={`codicon codicon-${isPlaying ? "debug-stop" : "unmute"}`} />
        </button>
      )}
      {content && (
        <button
          className="message-action-bar__btn"
          onClick={handleCopy}
          title="Copy message"
          aria-label="Copy message"
          type="button"
        >
          <i className="codicon codicon-copy" />
        </button>
      )}
      <button
        className="message-action-bar__btn"
        onClick={onToggleCollapse}
        title={isCollapsed ? "Expand message" : "Collapse message"}
        aria-label={isCollapsed ? "Expand" : "Collapse"}
        type="button"
      >
        <i className={`codicon codicon-${isCollapsed ? "chevron-down" : "chevron-up"}`} />
      </button>
      <button
        className="message-action-bar__btn message-action-bar__btn--delete"
        onClick={() => { void handleDelete(); }}
        title="Delete message"
        aria-label="Delete message"
        type="button"
      >
        <i className="codicon codicon-trash" />
      </button>
    </div>
  );
}
