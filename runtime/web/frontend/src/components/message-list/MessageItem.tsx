import { useState } from "preact/hooks";
import { renderMarkdown } from "../../utils/markdown-pipeline";
import { relativeTime, getBlockKey } from "./helpers";
import type { ContentBlock, Interaction } from "./types";

// ── ToolCallBlock ──────────────────────────────────────────────────────────

interface ToolCallBlockProps {
  useBlock: ContentBlock;
  resultBlock?: ContentBlock;
}

export function ToolCallBlock({ useBlock, resultBlock }: ToolCallBlockProps) {
  const [open, setOpen] = useState(false);

  const inputStr = useBlock.input
    ? JSON.stringify(useBlock.input, null, 2)
    : "";

  const resultStr = (() => {
    if (!resultBlock?.content) return null;
    if (typeof resultBlock.content === "string") return resultBlock.content;
    try {
      return JSON.stringify(resultBlock.content, null, 2);
    } catch {
      return String(resultBlock.content);
    }
  })();

  return (
    <div className="message-list__tool-call">
      <button
        className="message-list__tool-call-header"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="message-list__tool-call-icon">{open ? "▾" : "▸"}</span>
        <span className="message-list__tool-call-name">
          {useBlock.name ?? "tool"}
        </span>
        {resultBlock && (
          <span className="message-list__tool-call-badge">done</span>
        )}
      </button>
      {open && (
        <div className="message-list__tool-call-body">
          {inputStr && (
            <pre className="message-list__tool-call-code">{inputStr}</pre>
          )}
          {resultStr && (
            <>
              <div className="message-list__tool-call-result-label">Result</div>
              <pre className="message-list__tool-call-code">{resultStr}</pre>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── MessageItem ────────────────────────────────────────────────────────────

interface MessageItemProps {
  interaction: Interaction;
}

export function MessageItem({ interaction }: MessageItemProps) {
  const isUser = interaction.type === "user";

  // Pair tool_use with their tool_result blocks
  const toolPairs: { use: ContentBlock; result?: ContentBlock }[] = [];
  if (interaction.content_blocks?.length) {
    const blocks = interaction.content_blocks;
    const resultsByToolUseId = new Map<string, ContentBlock>();
    for (const b of blocks) {
      if (b.type === "tool_result" && b.tool_use_id) {
        resultsByToolUseId.set(b.tool_use_id, b);
      }
    }
    for (const b of blocks) {
      if (b.type === "tool_use") {
        toolPairs.push({
          use: b,
          result: b.id ? resultsByToolUseId.get(b.id) : undefined,
        });
      }
    }
  }

  const displayName = isUser ? "You" : "PiClaw";
  const avatarLetter = isUser ? "Y" : "P";

  return (
    <div
      className={`message-list__item ${
        isUser ? "message-list__item--user" : "message-list__item--agent"
      }`}
      data-message-id={interaction.id}
    >
      <div
        className={`message-list__avatar-circle ${
          isUser
            ? "message-list__avatar-circle--user"
            : "message-list__avatar-circle--agent"
        }`}
        aria-hidden="true"
      >
        {avatarLetter}
      </div>
      <div className="message-list__body">
        <div className="message-list__header">
          <span
            className={`message-list__name ${
              isUser ? "message-list__name--user" : "message-list__name--agent"
            }`}
          >
            {displayName}
          </span>
          <span
            className="message-list__time"
            title={new Date(interaction.created_at).toLocaleString()}
          >
            {relativeTime(interaction.created_at)}
          </span>
        </div>
        {toolPairs.length > 0 && (
          <div className="message-list__tool-calls">
            {toolPairs.map((pair, i) => (
              <ToolCallBlock
                key={getBlockKey(pair.use, i)}
                useBlock={pair.use}
                resultBlock={pair.result}
              />
            ))}
          </div>
        )}
        {interaction.content && (
          <div
            className="message-list__content"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized by markdown-pipeline
            dangerouslySetInnerHTML={
              isUser
                ? undefined
                : { __html: renderMarkdown(interaction.content) }
            }
          >
            {isUser ? interaction.content : undefined}
          </div>
        )}
      </div>
    </div>
  );
}
