interface MessageActionBarProps {
  messageId: number;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onDelete: () => void;
}

export function MessageActionBar({
  messageId: _messageId,
  isCollapsed,
  onToggleCollapse,
  onDelete,
}: MessageActionBarProps) {
  const handleDelete = () => {
    if (confirm("Delete this message?")) {
      onDelete();
    }
  };

  return (
    <div className="message-action-bar">
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
        onClick={handleDelete}
        title="Delete message"
        aria-label="Delete message"
        type="button"
      >
        <i className="codicon codicon-trash" />
      </button>
    </div>
  );
}
