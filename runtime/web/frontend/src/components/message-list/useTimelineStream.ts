import { useEffect, useRef } from "preact/hooks";
import type { Signal } from "@preact/signals";
import { buildChatUrl } from "../../api/chat-jid";
import { normalizePost } from "./helpers";
import type { Interaction } from "./types";

interface UseTimelineStreamParams {
  setMessages: (fn: (prev: Interaction[]) => Interaction[]) => void;
  setDraft: (v: string | ((prev: string) => string)) => void;
  setThought: (v: string | ((prev: string) => string)) => void;
  setStatus: (v: string | null) => void;
  setStatusText: (v: string) => void;
  clearTurn: () => void;
  setConnected: (v: boolean) => void;
  scrollToBottom: (force?: boolean) => void;
  refetchTimelineOnReconnect: () => Promise<void>;
  timelineError: Signal<string | null>;
}

/**
 * Manages the SSE connection lifecycle:
 * - EventSource creation and cleanup
 * - Handles: new_post, agent_draft_delta, agent_draft, agent_response, agent_status,
 *            agent_thought_delta, agent_thought
 * - Reconnection logic (triggers refetchTimelineOnReconnect on re-open)
 * - Draft/thought/status state updates
 * - Connection status dispatch
 */
export function useTimelineStream({
  setMessages,
  setDraft,
  setThought,
  setStatus,
  setStatusText,
  clearTurn,
  setConnected,
  scrollToBottom,
  refetchTimelineOnReconnect,
  timelineError,
}: UseTimelineStreamParams) {
  const hasHandledFirstOpenRef = useRef(false);

  useEffect(() => {
    const es = new EventSource(buildChatUrl("/sse/stream"));

    es.addEventListener("new_post", (e: MessageEvent) => {
      try {
        const raw = JSON.parse(e.data) as Record<string, unknown>;
        const interaction = normalizePost(raw);
        setMessages((prev) => {
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
        clearTurn();
        scrollToBottom(true);
        window.dispatchEvent(
          new CustomEvent("piclaw:agent-status", { detail: { type: "done" } })
        );
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
        setDraft("");
        clearTurn();
        scrollToBottom(true);
        window.dispatchEvent(
          new CustomEvent("piclaw:agent-status", { detail: { type: "done" } })
        );
      }
    });

    es.addEventListener("agent_status", (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data);
        if (data.type) setStatus(data.type);
        if (data.text || data.message) setStatusText(data.text || data.message || "");
        window.dispatchEvent(
          new CustomEvent("piclaw:agent-status", { detail: data })
        );
      } catch (err) {
        console.warn("[MessageList] SSE parse error:", err);
      }
    });

    es.addEventListener("agent_thought_delta", (e: MessageEvent) => {
      try {
        const parsed = JSON.parse(e.data);
        if (parsed.delta) {
          setThought((prev) => prev + parsed.delta);
        } else if (parsed.text !== undefined) {
          setThought(parsed.text);
        }
      } catch (err) {
        console.warn("[MessageList] SSE thought parse error:", err);
      }
    });

    es.addEventListener("agent_thought", (e: MessageEvent) => {
      try {
        const parsed = JSON.parse(e.data);
        const text = parsed.text ?? parsed.content ?? "";
        setThought(text);
      } catch (err) {
        console.warn("[MessageList] SSE thought parse error:", err);
      }
    });

    es.onopen = () => {
      setConnected(true);
      window.dispatchEvent(new Event("piclaw:sse-connected"));

      const isFirstOpen = !hasHandledFirstOpenRef.current;
      hasHandledFirstOpenRef.current = true;

      if (isFirstOpen) return;

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
    };
  }, [
    refetchTimelineOnReconnect,
    scrollToBottom,
    setConnected,
    setDraft,
    setThought,
    setStatus,
    setStatusText,
    clearTurn,
    setMessages,
    timelineError,
  ]);
}
