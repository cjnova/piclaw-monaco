import { useEffect, useRef, useState, useCallback } from "preact/hooks";
import { marked } from "marked";

// ── Types ──────────────────────────────────────────────────────────────────

interface ContentBlock {
  type: "tool_use" | "tool_result" | "text" | string;
  id?: string;
  name?: string;
  input?: unknown;
  content?: unknown;
  tool_use_id?: string;
}

interface Interaction {
  id: number;
  type: "user" | "agent";
  content: string;
  content_blocks?: ContentBlock[];
  created_at: string;
  data?: Record<string, unknown>;
}

interface TimelineResponse {
  interactions: Interaction[];
  has_more: boolean;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function relativeTime(isoDate: string): string {
  const delta = Date.now() - new Date(isoDate).getTime();
  const sec = Math.floor(delta / 1000);
  if (sec < 60) return "just now";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const days = Math.floor(hr / 24);
  return `${days}d ago`;
}

function renderMarkdown(content: string): string {
  try {
    const result = marked(content, { async: false });
    // marked returns string when async:false
    return result as string;
  } catch {
    return content;
  }
}

function getBlockKey(block: ContentBlock, index: number): string {
  return block.id ?? `block-${index}`;
}

// ── Sub-components ─────────────────────────────────────────────────────────

interface ToolCallBlockProps {
  useBlock: ContentBlock;
  resultBlock?: ContentBlock;
}

function ToolCallBlock({ useBlock, resultBlock }: ToolCallBlockProps) {
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

interface MessageItemProps {
  interaction: Interaction;
}

function MessageItem({ interaction }: MessageItemProps) {
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

  return (
    <div
      className={`message-list__item ${
        isUser ? "message-list__item--user" : "message-list__item--agent"
      }`}
    >
      {!isUser && (
        <div className="message-list__avatar" aria-hidden="true">🤖</div>
      )}
      <div className="message-list__bubble">
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
            // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted server
            dangerouslySetInnerHTML={
              isUser
                ? undefined
                : { __html: renderMarkdown(interaction.content) }
            }
          >
            {isUser ? interaction.content : undefined}
          </div>
        )}
        <span
          className="message-list__time"
          title={new Date(interaction.created_at).toLocaleString()}
        >
          {relativeTime(interaction.created_at)}
        </span>
      </div>
      {isUser && (
        <div className="message-list__avatar message-list__avatar--user" aria-hidden="true">
          👤
        </div>
      )}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export function MessageList() {
  const [messages, setMessages] = useState<Interaction[]>([]);
  const [draft, setDraft] = useState<string>("");
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [connected, setConnected] = useState<boolean | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sseRef = useRef<EventSource | null>(null);
  const userScrolledRef = useRef(false);

  const scrollToBottom = useCallback((force = false) => {
    if (force || !userScrolledRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    async function fetchTimeline() {
      try {
        const res = await fetch("/timeline?limit=50&chat_jid=web:default", {
          credentials: "include",
        });
        if (res.status === 401) {
          setConnected(false);
          return;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: TimelineResponse = await res.json();
        setMessages(data.interactions ?? []);
        setHasMore(data.has_more ?? false);
        setConnected(true);
        // Scroll to bottom after first load
        setTimeout(() => scrollToBottom(true), 50);
      } catch {
        setConnected(false);
      }
    }
    fetchTimeline();
  }, [scrollToBottom]);

  // SSE stream
  useEffect(() => {
    const es = new EventSource("/sse/stream");
    sseRef.current = es;

    es.addEventListener("new_post", (e: MessageEvent) => {
      try {
        const interaction: Interaction = JSON.parse(e.data);
        setMessages((prev) => {
          // Avoid duplicates
          if (prev.some((m) => m.id === interaction.id)) return prev;
          return [...prev, interaction];
        });
        // Clear draft when a new agent post arrives
        if (interaction.type === "agent") {
          setDraft("");
        }
        scrollToBottom();
      } catch {
        // ignore parse errors
      }
    });

    es.addEventListener("agent_draft_delta", (e: MessageEvent) => {
      try {
        const { delta } = JSON.parse(e.data) as { delta: string };
        setDraft((prev) => prev + delta);
        scrollToBottom();
      } catch {
        // ignore
      }
    });

    es.addEventListener("agent_draft", (e: MessageEvent) => {
      try {
        const { content } = JSON.parse(e.data) as { content: string };
        setDraft(content);
        scrollToBottom();
      } catch {
        // ignore
      }
    });

    es.addEventListener("agent_response", () => {
      setDraft("");
    });

    es.onopen = () => setConnected(true);
    es.onerror = () => setConnected(false);

    return () => {
      es.close();
      sseRef.current = null;
    };
  }, [scrollToBottom]);

  // Detect manual scroll
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const handleScroll = () => {
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
      userScrolledRef.current = !atBottom;
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const loadMore = async () => {
    if (!messages.length || loadingMore) return;
    const oldestId = messages[0].id;
    setLoadingMore(true);
    try {
      const res = await fetch(
        `/timeline?limit=50&chat_jid=web:default&before=${oldestId}`,
        { credentials: "include" }
      );
      if (!res.ok) return;
      const data: TimelineResponse = await res.json();
      if (data.interactions?.length) {
        const el = listRef.current;
        const prevScrollHeight = el?.scrollHeight ?? 0;
        setMessages((prev) => [...data.interactions, ...prev]);
        setHasMore(data.has_more ?? false);
        // Restore scroll position
        requestAnimationFrame(() => {
          if (el) {
            el.scrollTop = el.scrollHeight - prevScrollHeight;
          }
        });
      }
    } finally {
      setLoadingMore(false);
    }
  };

  if (connected === false) {
    return (
      <div className="message-list message-list--disconnected">
        <div className="message-list__status-banner">
          ⚠️ Not connected — unable to load messages
        </div>
      </div>
    );
  }

  return (
    <div className="message-list" ref={listRef}>
      {hasMore && (
        <div className="message-list__load-more">
          <button
            type="button"
            className="message-list__load-more-btn"
            onClick={loadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading…" : "Load older messages"}
          </button>
        </div>
      )}

      {messages.length === 0 && connected === true && (
        <div className="message-list__empty">
          <p>No messages yet. Say hello! 👋</p>
        </div>
      )}

      {messages.map((msg) => (
        <MessageItem key={msg.id} interaction={msg} />
      ))}

      {draft && (
        <div className="message-list__draft">
          <div className="message-list__avatar" aria-hidden="true">🤖</div>
          <div className="message-list__bubble message-list__bubble--draft">
            <span className="message-list__draft-indicator">● Draft</span>
            <div
              className="message-list__content"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown from trusted server
              dangerouslySetInnerHTML={{ __html: renderMarkdown(draft) }}
            />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
