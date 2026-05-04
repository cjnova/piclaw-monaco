import { AgentStatusPanel } from "../components/AgentStatusPanel";
import { WidgetPane } from "../components/WidgetPane";
import { getMessageUrl } from "../api/chat-jid";
import { useRef, useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { MessageList } from "../components/MessageList";
import { extractDisplayName } from "../utils/extractDisplayName";
import { isSafeExtensionUrl } from "../utils/isSafeExtensionUrl";

interface ExtensionRoute {
  prefix: string;
  extensionPath: string;
}

interface ChatPanelProps {
  onOpenPalette?: () => void;
}

export function ChatPanel({ onOpenPalette }: ChatPanelProps = {}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const activeTab = useSignal<string>("chat");
  const extensionPages = useSignal<ExtensionRoute[]>([]);
  const isSending = useSignal(false);
  const sendError = useSignal<string | null>(null);
  const isAgentRunning = useSignal(false);

  useEffect(() => {
    const agentStatusHandler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.type === "done" || detail?.type === "idle") {
        isAgentRunning.value = false;
      } else if (detail?.type === "thinking" || detail?.type === "running" || detail?.type === "tool_call" || detail?.type === "tool_status") {
        isAgentRunning.value = true;
      }
    };
    window.addEventListener("piclaw:agent-status", agentStatusHandler);

    fetch("/api/extension-routes", { credentials: "include" })
      .then((res) => res.json())
      .then((routes: ExtensionRoute[]) => {
        const pages = routes.filter((r) => r.prefix.endsWith("-page"));
        extensionPages.value = pages;
      })
      .catch((err) => {
        console.warn("[chat] extension route discovery failed:", err);
      });

  // Handle widget submissions as user messages
  const widgetSubmissionHandler = (e: Event) => {
    const text = (e as CustomEvent).detail?.text;
    if (text) {
      fetch(getMessageUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: text }),
      }).catch(console.error);
    }
  };
  window.addEventListener("piclaw:widget-submission", widgetSubmissionHandler);
  return () => {
    window.removeEventListener("piclaw:agent-status", agentStatusHandler);
    window.removeEventListener("piclaw:widget-submission", widgetSubmissionHandler);
  };
  }, []);

  const hasText = useSignal(false);

  const handleInput = (e: Event) => {
    const el = e.target as HTMLTextAreaElement;
    hasText.value = el.value.trim().length > 0;
    if (el.value === "/") {
      onOpenPalette?.();
      el.value = "";
      el.style.height = "auto";
      return;
    }
    // Auto-grow and shrink
    el.style.minHeight = "0";
    el.style.height = "0";
    const maxH = window.innerHeight * 0.3;
    const newH = Math.max(60, Math.min(el.scrollHeight, maxH));
    el.style.height = `${newH}px`;
    el.style.minHeight = "";
    el.style.overflowY = el.scrollHeight > maxH ? "auto" : "hidden";
  };

  const abortAgent = async () => {
    try {
      await fetch(getMessageUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ content: "/abort" }),
      });
    } catch {
      window.dispatchEvent(new CustomEvent("piclaw:status-flash", { detail: { message: "Failed to abort", type: "error" } }));
    }
  };

  // Global Escape key to abort agent
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAgentRunning.value) {
        abortAgent();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const sendMessage = async () => {
    const el = textareaRef.current;
    if (!el || isSending.value) return;
    const content = el.value.trim();
    if (!content) return;

    isSending.value = true;
    sendError.value = null;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) {
        sendError.value = `Send failed (HTTP ${res.status}). Try again.`;
        isSending.value = false;
        return;
      }

      // Only clear draft after confirmed success
      el.value = "";
      el.style.height = "auto";
      sendError.value = null;
      const data = await res.json();
      if (data?.user_message) {
        window.dispatchEvent(new CustomEvent("piclaw:new-message", { detail: data.user_message }));
      }
    } catch (err: any) {
      sendError.value = err?.name === "AbortError"
        ? "Send timed out. Try again."
        : "Failed to send. Check connection.";
    } finally {
      isSending.value = false;
    }
  };

  const pages = extensionPages.value;
  const showTabs = pages.length > 0;

  return (
    <section className="chat">
      {showTabs && (
        <div className="chat-tabs">
          <button
            type="button"
            className={`chat-tabs__tab${activeTab.value === "chat" ? " chat-tabs__tab--active" : ""}`}
            onClick={() => { activeTab.value = "chat"; }}
          >
            Chat
          </button>
          {pages.map((page) => (
            <button
              key={page.prefix}
              type="button"
              className={`chat-tabs__tab${activeTab.value === page.prefix ? " chat-tabs__tab--active" : ""}`}
              onClick={() => { activeTab.value = page.prefix; }}
            >
              {extractDisplayName(page.extensionPath)}
            </button>
          ))}
        </div>
      )}

      {activeTab.value === "chat" ? (
        <>
          {/* Chat content */}
          <div className="chat__messages">
            <MessageList />
          </div>

          <AgentStatusPanel />

          <WidgetPane />

          <div className="chat__compose">
            <textarea
              ref={textareaRef}
              className="chat__input"
              placeholder="Type a message..."
              rows={3}
              onInput={handleInput}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
                if (e.key === "Escape" && isAgentRunning.value) {
                  abortAgent();
                }
              }}
            />
            {isAgentRunning.value ? (
              <button
                type="button"
                className="chat__stop-btn"
                onClick={abortAgent}
                aria-label="Stop response"
                title="Stop response (Escape)"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="chat__send-btn"
                onClick={sendMessage}
                disabled={isSending.value || !hasText.value}
                aria-label={isSending.value ? "Sending..." : "Send message"}
                title="Send (Enter)"
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            )}
          </div>
          {sendError.value && (
            <div className="chat__send-error">
              {sendError.value}
              <button type="button" className="chat__send-error-dismiss" onClick={() => (sendError.value = null)}>✕</button>
            </div>
          )}
        </>
      ) : isSafeExtensionUrl(activeTab.value) ? (
        <>
          {/* Security: allow-same-origin required for extension API access. allow-scripts required for interactivity. Popups restricted. See #168. */}
          <iframe
            className="chat-tabs__iframe"
            src={activeTab.value}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            title={extractDisplayName(pages.find((p) => p.prefix === activeTab.value)?.extensionPath ?? "")}
          />
        </>
      ) : (
        <div className="chat-tabs__blocked">Blocked: unsafe extension URL</div>
      )}
    </section>
  );
}
