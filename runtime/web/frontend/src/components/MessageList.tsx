import { getMessageUrl, buildChatUrl } from "../api/chat-jid";
import { useSignal } from "@preact/signals";
import { useEffect, useRef, useState, useCallback } from "preact/hooks";
import { renderMarkdown, renderThinkingMarkdown } from "../utils/markdown-pipeline";
import { renderMermaidDiagrams } from "../utils/mermaid-render";

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
  posts?: Array<Record<string, unknown>>;
  has_more?: boolean;
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

function getBlockKey(block: ContentBlock, index: number): string {
  return block.id ?? `block-${index}`;
}

function normalizePost(raw: Record<string, unknown>): Interaction {
  const data =
    raw.data && typeof raw.data === "object"
      ? (raw.data as Record<string, unknown>)
      : undefined;
  const rawType = raw.type ?? data?.type;

  return {
    id: Number(raw.id ?? 0),
    type: (rawType === "user" || rawType === "user_message"
      ? "user"
      : "agent") as "user" | "agent",
    content: String(raw.content ?? data?.content ?? ""),
    content_blocks: (raw.content_blocks ?? data?.content_blocks) as
      | ContentBlock[]
      | undefined,
    created_at: String(raw.created_at ?? raw.timestamp ?? ""),
    data,
  };
}

function mergeInteractions(existing: Interaction[], incoming: Interaction[]): Interaction[] {
  const byId = new Map<number, Interaction>();
  for (const msg of existing) {
    byId.set(msg.id, msg);
  }
  for (const msg of incoming) {
    byId.set(msg.id, msg);
  }
  return Array.from(byId.values()).sort((a, b) => a.id - b.id);
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

// ── Main component ─────────────────────────────────────────────────────────

export function MessageList() {
  const [messages, setMessages] = useState<Interaction[]>([]);
  const [draft, setDraft] = useState<string>("");
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [connected, setConnected] = useState<boolean | null>(null);
  const timelineError = useSignal<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const sseRef = useRef<EventSource | null>(null);
  const userScrolledRef = useRef(false);
  const initialTimelineFetchedRef = useRef(false);
  const hasHandledFirstOpenRef = useRef(false);

  const scrollToBottom = useCallback((force = false) => {
    if (force || !userScrolledRef.current) {
      const el = listRef.current;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }
  }, []);

  const fetchTimeline = useCallback(async () => {
    const res = await fetch(buildChatUrl("/timeline", { limit: "50" }), {
      credentials: "include",
    });
    if (res.status === 401) {
      setConnected(false);
      return null;
    }
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json() as { posts?: Array<Record<string, unknown>>; has_more?: boolean };
    const posts = (data.posts ?? []).map(normalizePost);
    return { posts, hasMore: data.has_more ?? false };
  }, []);

  const refetchTimelineOnReconnect = useCallback(async () => {
    const timeline = await fetchTimeline();
    if (!timeline) return;
    setMessages((prev) => mergeInteractions(prev, timeline.posts));
    setHasMore(timeline.hasMore);
    timelineError.value = null;
    scrollToBottom(true);
  }, [fetchTimeline, scrollToBottom, timelineError]);

  // Initial fetch
  useEffect(() => {
    async function fetchInitialTimeline() {
      try {
        const timeline = await fetchTimeline();
        if (!timeline) return;
        setMessages((prev) => mergeInteractions(prev, timeline.posts));
        setHasMore(timeline.hasMore);
        timelineError.value = null;
        setConnected(true);
        initialTimelineFetchedRef.current = true;
        // Scroll to bottom after first load
        setTimeout(() => scrollToBottom(true), 50);
      } catch {
        setConnected(false);
      }
    }
    fetchInitialTimeline();
  }, [fetchTimeline, scrollToBottom]);

  // SSE stream
  useEffect(() => {
    const es = new EventSource(buildChatUrl("/sse/stream"));
    sseRef.current = es;

    es.addEventListener("new_post", (e: MessageEvent) => {
      try {
        const raw = JSON.parse(e.data) as Record<string, unknown>;
        const interaction = normalizePost(raw);
        setMessages((prev) => {
          // Avoid duplicates
          if (prev.some((m) => m.id === interaction.id)) return prev;
          return [...prev, interaction];
        });
        // Clear draft when a new agent post arrives
        if (interaction.type === "agent") {
          setDraft("");
        }
        scrollToBottom(true);
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
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
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
      }
    });

    es.addEventListener("agent_draft", (e: MessageEvent) => {
      try {
        const parsed = JSON.parse(e.data);
        const text = parsed.text ?? parsed.content ?? "";
        setDraft(text);
        scrollToBottom();
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
      }
    });

    es.addEventListener("agent_response", (e: MessageEvent) => {
      try {
        const raw = JSON.parse(e.data) as Record<string, unknown>;
        const interaction = normalizePost({ ...raw, type: "agent" });
        setMessages((prev) => {
          if (prev.some((m) => m.id === interaction.id)) return prev;
          return [...prev, interaction];
        });
        setDraft("");
        scrollToBottom(true);
        // Signal that agent turn is complete (clears compaction badge, etc.)
        window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: { type: "done" } }));
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
        setDraft("");
        scrollToBottom(true);
        window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: { type: "done" } }));
      }
    });

    es.addEventListener("agent_status", (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data);
        window.dispatchEvent(new CustomEvent("piclaw:agent-status", { detail: data }));
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
      }
    });

    es.onopen = () => {
      setConnected(true);
      window.dispatchEvent(new Event("piclaw:sse-connected"));

      const isFirstOpen = !hasHandledFirstOpenRef.current;
      hasHandledFirstOpenRef.current = true;

      // Skip first open — initial fetch handles it
      if (isFirstOpen) return;

      // Reconnection — merge new messages
      refetchTimelineOnReconnect().catch((err) => {
        console.warn("[MessageList] reconnect refresh failed:", err);
        timelineError.value = "Timeline may be stale. Click to refresh.";
      });
    };
    es.onerror = () => {
      setConnected(false);
      window.dispatchEvent(new Event("piclaw:sse-disconnected"));
    };

    return () => {
      es.close();
      sseRef.current = null;
    };
  }, [refetchTimelineOnReconnect, scrollToBottom]);

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
      if (lastHighlighted) { lastHighlighted.classList.remove("message--highlighted"); }
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("message--highlighted");
      lastHighlighted = el;
    };
    const handler = async (e: Event) => {
      const id = (e as CustomEvent).detail?.id;
      if (!id || !listRef.current) return;
      // Try to find in DOM first
      let el = listRef.current.querySelector(`[data-message-id="${id}"]`) as HTMLElement;
      if (el) { highlight(el); return; }
      // Not in DOM — load messages around this ID
      try {
        const res = await fetch(buildChatUrl("/timeline", { around_row: String(id), limit: "50" }), { credentials: "include" });
        if (res.ok) {
          const data = await res.json() as { posts?: Array<Record<string, unknown>> };
          const posts = (data.posts ?? []).map(normalizePost);
          if (posts.length) {
            setMessages(posts);
            // Wait for render, then scroll
            setTimeout(() => {
              el = listRef.current?.querySelector(`[data-message-id="${id}"]`) as HTMLElement;
              if (el) highlight(el);
            }, 100);
          }
        }
      } catch (err) {
        console.warn("[MessageList] jump-to-message failed:", err);
        window.dispatchEvent(new CustomEvent("piclaw:status-flash", { detail: { message: "Failed to load message", type: "error" } }));
      }
    };
    window.addEventListener("piclaw:scroll-to-message", handler);
    return () => window.removeEventListener("piclaw:scroll-to-message", handler);
  }, []);

  // Copy button delegated handler
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const handler = async (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('.code-block__copy') as HTMLElement;
      if (!btn) return;

      const encoded = btn.dataset.code;
      if (!encoded) return;

      // Decode base64 → UTF-8
      const code = decodeURIComponent(escape(atob(encoded)));

      try {
        await navigator.clipboard.writeText(code);
        btn.dataset.copyState = 'copied';
        setTimeout(() => { btn.dataset.copyState = ''; }, 2000);
      } catch {
        // execCommand fallback
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.dataset.copyState = 'copied';
        setTimeout(() => { btn.dataset.copyState = ''; }, 2000);
      }
    };

    container.addEventListener('click', handler as unknown as EventListener);
    return () => container.removeEventListener('click', handler as unknown as EventListener);
  }, []);

  // Post-render: mermaid diagrams
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    // Render any pending mermaid blocks
    const render = () => {
      if (container.querySelector(".mermaid-container[data-mermaid]")) {
        renderMermaidDiagrams(container).catch((err) => {
          console.warn("[MessageList] mermaid render failed:", err);
        });
      }
    };

    // Run on initial load and after DOM updates
    render();

    // Observe DOM changes (new messages added)
    let debounceTimer = 0;
    const observer = new MutationObserver(() => {
      // Debounce slightly to batch rapid updates
      clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(render, 100);
    });
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      clearTimeout(debounceTimer);
    };
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
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: TimelineResponse = await res.json();
      const olderPosts = (data.posts ?? []).map(normalizePost);
      setHasMore(data.has_more ?? false);
      timelineError.value = null;
      if (olderPosts.length) {
        const el = listRef.current;
        const prevScrollHeight = el?.scrollHeight ?? 0;
        setMessages((prev) => mergeInteractions(olderPosts, prev));
        // Restore scroll position
        requestAnimationFrame(() => {
          if (el) {
            el.scrollTop = el.scrollHeight - prevScrollHeight;
          }
        });
      }
    } catch (err) {
      console.warn("[MessageList] loadMore failed:", err);
      timelineError.value = "Failed to load older messages. Try again.";
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
      {timelineError.value && (
        <div
          className="message-list__error-banner"
          onClick={() => {
            timelineError.value = null;
            void fetchTimeline().then(() => {
              timelineError.value = null;
              scrollToBottom(true);
            });
          }}
        >
          ⚠ {timelineError.value}
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
          <div className="message-list__avatar-circle message-list__avatar-circle--agent" aria-hidden="true">P</div>
          <div className="message-list__body message-list__body--draft">
            <div className="message-list__header">
              <span className="message-list__name message-list__name--agent">PiClaw</span>
              <span className="message-list__draft-indicator">● typing</span>
            </div>
            <div
              className="message-list__content"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized by markdown-pipeline
              dangerouslySetInnerHTML={{ __html: renderThinkingMarkdown(draft) }}
            />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
