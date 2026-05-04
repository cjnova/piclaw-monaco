import { getMessageUrl } from "../api/chat-jid";
import { useRef, useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { MessageList } from "../components/MessageList";
import { useAgentProgress } from "../hooks/useAgentProgress";
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
  const { thought, setThought, status, setStatus, statusText, setStatusText, clearTurn } = useAgentProgress();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const activeTab = useSignal<string>("chat");
  const extensionPages = useSignal<ExtensionRoute[]>([]);
  const isSending = useSignal(false);
  const sendError = useSignal<string | null>(null);

  useEffect(() => {
    fetch("/api/extension-routes", { credentials: "include" })
      .then((res) => res.json())
      .then((routes: ExtensionRoute[]) => {
        const pages = routes.filter((r) => r.prefix.endsWith("-page"));
        extensionPages.value = pages;
      })
      .catch((err) => {
        console.warn("[chat] extension route discovery failed:", err);
      });
  }, []);

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
            <MessageList
              setThought={setThought}
              setStatus={setStatus}
              setStatusText={setStatusText}
              clearTurn={clearTurn}
            />
          </div>

          <div className="chat__compose">
            <textarea
              ref={textareaRef}
              className="chat__input"
              placeholder="Type a message..."
              rows={1}
              onInput={handleInput}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />
            <button
              type="button"
              className={`chat__send-btn${isSending.value ? " chat__send-btn--sending" : ""}`}
              onClick={sendMessage}
              disabled={isSending.value}
              aria-label={isSending.value ? "Sending..." : "Send message"}
            >
              {isSending.value ? "Sending..." : "Send"}
            </button>
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
