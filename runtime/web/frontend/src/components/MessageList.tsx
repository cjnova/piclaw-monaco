import { buildChatUrl } from "../api/chat-jid";
import { useEffect, useRef, useState, useCallback } from "preact/hooks";
import { marked } from "marked";
import { sanitizeRenderedMarkdown } from "../utils/sanitizeRenderedMarkdown";

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
  posts: Interaction[];
  has_more: boolean;
}

// ── Helpers ────────────────────────────────────────────────────────────────

function getMessageSelector(id: number): string {
  const raw = String(id);
  const escaped = typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(raw)
    : raw.replace(/["\\]/g, "\\$&");
  return `[data-message-id="${escaped}"]`;
}

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
    const html = marked(content, { async: false }) as string;
    return sanitizeRenderedMarkdown(html);
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
          isUser ? "message-list__avatar-circle--user" : "message-list__avatar-circle--agent"
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
            // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized by sanitizeRenderedMarkdown()
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

// ── Main component ─────────────────────────────────────────────────────────

type ConnectionState = "loading" | "connected" | "stale" | "auth" | "error";

function normalizeInteraction(p: Record<string, unknown>): Interaction {
  return {
    id: p.id as number,
    type: (p.type ?? ((p.data as Record<string, unknown>)?.type === "user_message" ? "user" : "agent")) as "user" | "agent",
    content: (p.content ?? (p.data as Record<string, unknown>)?.content ?? "") as string,
    content_blocks: (p.content_blocks ?? (p.data as Record<string, unknown>)?.content_blocks) as ContentBlock[] | undefined,
    created_at: (p.created_at ?? p.timestamp ?? "") as string,
    data: p.data as Record<string, unknown> | undefined,
  };
}

function mergeInteractions(existing: Interaction[], incoming: Interaction[]): Interaction[] {
  const merged = new Map<number, Interaction>();
  for (const interaction of existing) {
    merged.set(interaction.id, interaction);
  }
  for (const interaction of incoming) {
    merged.set(interaction.id, interaction);
  }
  return [...merged.values()].sort((a, b) => {
    const at = new Date(a.created_at).getTime();
    const bt = new Date(b.created_at).getTime();
    if (at !== bt) return at - bt;
    return a.id - b.id;
  });
}

export function MessageList() {
  const [messages, setMessages] = useState<Interaction[]>([]);
  const [draft, setDraft] = useState<string>("");
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [connectionState, setConnectionState] = useState<ConnectionState>("loading");
  const [timelineReady, setTimelineReady] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sseRef = useRef<EventSource | null>(null);
  const reconnectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const timelineReadyRef = useRef(false);
  const userScrolledRef = useRef(false);

  const scrollToBottom = useCallback((force = false) => {
    if (force || !userScrolledRef.current) {
      const el = listRef.current;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
  }, []);

  const clearReconnectTimer = useCallback(() => {
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
      reconnectTimerRef.current = null;
    }
  }, []);

  const refreshTimeline = useCallback(async (replace = false) => {
    try {
      const res = await fetch(buildChatUrl("/timeline", { limit: "50" }), {
        credentials: "include",
      });
      if (res.status === 401) {
        setConnectionState("auth");
        return false;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const raw = data.posts ?? [];
      const parsed: Interaction[] = raw.map((p: Record<string, unknown>) => normalizeInteraction(p));
      setMessages((prev) => (replace ? parsed : mergeInteractions(prev, parsed)));
      setHasMore(data.has_more ?? false);
      if (!timelineReadyRef.current) {
        timelineReadyRef.current = true;
        setTimelineReady(true);
      }
      return true;
    } catch (err) {
      console.warn("[chat] failed to load timeline", err);
      setConnectionState((current) => (current === "auth" ? current : "error"));
      return false;
    }
  }, []);

  function stopSse() {
    clearReconnectTimer();
    if (sseRef.current) {
      sseRef.current.close();
      sseRef.current = null;
    }
  }

  const connectSse = useCallback(() => {
    if (!timelineReadyRef.current) return;
    stopSse();
    const es = new EventSource(buildChatUrl("/sse/stream"));
    sseRef.current = es;

    es.addEventListener("new_post", (e: MessageEvent) => {
      try {
        const raw = JSON.parse(e.data);
        const interaction: Interaction = {
          id: raw.id,
          type: raw.type ?? (raw.data?.type === "user_message" ? "user" : "agent"),
          content: raw.content ?? raw.data?.content ?? "",
          content_blocks: raw.content_blocks ?? raw.data?.content_blocks,
          created_at: raw.created_at ?? raw.timestamp ?? "",
          data: raw.data,
        };
        setMessages((prev) => {
          if (prev.some((m) => m.id === interaction.id)) return prev;
          return mergeInteractions(prev, [interaction]);
        });
        if (interaction.type === "agent") {
          setDraft("");
        }
        scrollToBottom(true);
      } catch {
        // ignore parse errors
      }
    });

    es.addEventListener("agent_draft_delta", (e: MessageEvent) => {
      try {
        const parsed = JSON.parse(e.data);
        if (parsed.delta) {
          setDraft((prev) => prev + parsed.delta);
        } else if (parsed.text !== undefined) {
          setDraft(parsed.text);
        }
        scrollToBottom();
      } catch {
        // ignore
      }
    });

    es.addEventListener("agent_draft", (e: MessageEvent) => {
      try {
        const parsed = JSON.parse(e.data);
        const text = parsed.text ?? parsed.content ?? "";
        setDraft(text);
        scrollToBottom();
      } catch {
        // ignore
      }
    });

    es.addEventListener("agent_response", (e: MessageEvent) => {
      try {
        const raw = JSON.parse(e.data);
        const interaction: Interaction = {
          id: raw.id,
          type: "agent" as const,
          content: raw.data?.content ?? raw.content ?? "",
          content_blocks: raw.data?.content_blocks ?? raw.content_blocks,
          created_at: raw.timestamp ?? "",
          data: raw.data,
        };
        setMessages((prev) => {
          if (prev.some((m) => m.id === interaction.id)) return prev;
          return mergeInteractions(prev, [interaction]);
        });
        setDraft("");
        scrollToBottom(true);
        window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: { type: "done" } }));
      } catch {
        setDraft("");
        scrollToBottom(true);
        window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: { type: "done" } }));
      }
    });

    es.addEventListener("agent_status", (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data);
        window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: data }));
      } catch { /* ignore */ }
    });

    es.onopen = () => {
      clearReconnectTimer();
      reconnectAttemptsRef.current = 0;
      setConnectionState("connected");
      window.dispatchEvent(new Event("piclaw:sse-connected"));
      void refreshTimeline(false);
    };

    es.onerror = () => {
      setConnectionState((current) => (current === "auth" ? current : "stale"));
      window.dispatchEvent(new Event("piclaw:sse-disconnected"));
      if (!timelineReadyRef.current) return;
      if (reconnectTimerRef.current) return;
      const attempt = reconnectAttemptsRef.current;
      reconnectAttemptsRef.current += 1;
      const delay = Math.min(15000, 1000 * (2 ** attempt));
      reconnectTimerRef.current = setTimeout(() => {
        reconnectTimerRef.current = null;
        connectSse();
      }, delay);
    };
  }, [clearReconnectTimer, refreshTimeline, scrollToBottom]);

  // Initial fetch
  useEffect(() => {
    let active = true;
    void refreshTimeline(true).then((ok) => {
      if (!active) return;
      if (ok) setTimelineReady(true);
    });
    return () => {
      active = false;
    };
  }, [refreshTimeline]);

  useEffect(() => {
    if (!timelineReady) return;
    timelineReadyRef.current = true;
    connectSse();
    return () => {
      stopSse();
    };
  }, [connectSse, timelineReady]);

  // Listen for optimistic user messages from compose box
  useEffect(() => {
    const handler = (e: Event) => {
      const msg = (e as CustomEvent).detail;
      if (!msg?.id) return;
      setMessages((prev) => {
        if (prev.some((m) => m.id === msg.id)) return prev;
        return [...prev, { id: msg.id, type: "user", content: msg.data?.content ?? "", created_at: msg.timestamp, data: msg.data }];
      });
      userScrolledRef.current = false;
      scrollToBottom(true);
    };
    window.addEventListener("piclaw:new-message", handler);
    return () => window.removeEventListener("piclaw:new-message", handler);
  }, [scrollToBottom]);

  // Scroll to a specific message (triggered from search panel)
  useEffect(() => {
    let lastHighlighted: HTMLElement | null = null;
    const highlight = (el: HTMLElement) => {
      if (lastHighlighted) { lastHighlighted.style.outline = ""; lastHighlighted.style.borderRadius = ""; }
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.style.outline = "2px solid var(--accent)";
      el.style.borderRadius = "4px";
      lastHighlighted = el;
    };
    const handler = async (e: Event) => {
      const id = (e as CustomEvent).detail?.id;
      if (!id || !listRef.current) return;
      let el = listRef.current.querySelector(getMessageSelector(id)) as HTMLElement;      if (el) { highlight(el); return; }
      try {
        const res = await fetch(buildChatUrl("/timeline", { around_row: String(id), limit: "50" }), { credentials: "include" });
        if (res.ok) {
          const data = await res.json() as { posts?: Array<Record<string, unknown>> };
          const posts = data.posts ?? [];
          if (posts.length) {
            setMessages(posts.map((p: Record<string, unknown>) => ({
              id: p.id as number,
              type: ((p.data as Record<string, unknown>)?.type === "user_message" ? "user" : "agent") as "user" | "agent",
              content: (p.data as Record<string, unknown>)?.content as string ?? "",
              content_blocks: (p.data as Record<string, unknown>)?.content_blocks as ContentBlock[],
              created_at: p.timestamp as string ?? "",
              data: p.data as Record<string, unknown>,
            })));
            setTimeout(() => {
              el = listRef.current?.querySelector(getMessageSelector(id)) as HTMLElement;              if (el) highlight(el);
            }, 100);
          }
        }
      } catch {}
    };
    window.addEventListener("piclaw:scroll-to-message", handler);
    return () => window.removeEventListener("piclaw:scroll-to-message", handler);
  }, []);

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
        buildChatUrl("/timeline", { limit: "50", before: String(oldestId) }),
        { credentials: "include" }
      );
      if (!res.ok) return;
      const data: TimelineResponse = await res.json();
      if (data.posts?.length) {
        const el = listRef.current;
        const prevScrollHeight = el?.scrollHeight ?? 0;
        setMessages((prev) => [...data.posts, ...prev]);
        setHasMore(data.has_more ?? false);
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

  const retryConnection = useCallback(async () => {
    clearReconnectTimer();
    reconnectAttemptsRef.current = 0;
    const ok = await refreshTimeline(true);
    if (!ok) return;
    timelineReadyRef.current = true;
    setTimelineReady(true);
    connectSse();
  }, [clearReconnectTimer, connectSse, refreshTimeline]);

  const connectionBanner = (() => {
    switch (connectionState) {
      case "loading":
        return "Loading messages…";
      case "auth":
        return "Not connected — sign in to load messages";
      case "stale":
        return "Connection interrupted — retrying…";
      case "error":
        return "Connection lost — retrying…";
      default:
        return null;
    }
  })();

  return (
    <div className="message-list" ref={listRef}>
      {connectionBanner && (
        <div className="message-list__status-banner message-list__status-banner--stale">
          <span>{connectionBanner}</span>
          {(connectionState === "auth" || connectionState === "stale" || connectionState === "error") && (
            <button type="button" className="message-list__status-retry" onClick={retryConnection}>
              Retry
            </button>
          )}
        </div>
      )}

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

      {messages.length === 0 && connectionState === "connected" && (
        <div className="message-list__empty">
          <p>No messages yet. Say hello! 👋</p>
        </div>
      )}

      {messages.map((msg) => (
        <MessageItem key={msg.id} interaction={msg} />
      ))}

      {draft && (
        <div className="message-list__draft">
          <div className="message-list__avatar-circle message-list__avatar-circle--agent" aria-hidden="true">P</div>
          <div className="message-list__body message-list__body--draft">
            <div className="message-list__header">
              <span className="message-list__name message-list__name--agent">PiClaw</span>
              <span className="message-list__draft-indicator">● typing</span>
            </div>
            <div
              className="message-list__content"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized by sanitizeRenderedMarkdown()
              dangerouslySetInnerHTML={{ __html: renderMarkdown(draft) }}
            />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
