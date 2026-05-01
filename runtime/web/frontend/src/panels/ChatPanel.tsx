import { getMessageUrl } from "../api/chat-jid";
import { useRef, useEffect, useState } from "preact/hooks";
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
  const [sendState, setSendState] = useState<"idle" | "sending" | "error">("idle");
  const [sendError, setSendError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/extension-routes", { credentials: "include" })
      .then((res) => res.json())
      .then((routes: ExtensionRoute[]) => {
        const pages = routes.filter((r) => r.prefix.endsWith("-page"));
        extensionPages.value = pages;
      })
      .catch(() => {
        // silently ignore if endpoint not available
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
    if (!el || sendState === "sending") return;
    const submitted = el.value;
    const content = submitted.trim();
    if (!content) return;
    setSendState("sending");
    setSendError(null);
    try {
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (!res.ok) {
        const details = (await res.text()).trim();
        throw new Error(details || res.statusText || `HTTP ${res.status}`);
      }
      const data = await res.json();
      if (data?.user_message) {
        window.dispatchEvent(new CustomEvent("piclaw:new-message", { detail: data.user_message }));
      }
      el.value = "";
      el.style.height = "auto";
      setSendState("idle");
    } catch (err) {
      console.warn("[chat] send failed:", err);
      el.value = submitted;
      setSendState("error");
      setSendError(`Failed to send message: ${err instanceof Error ? err.message : String(err)}`);
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

          <div className="chat__compose">
            {sendError && (
              <div className="chat__send-error" role="status" aria-live="polite">
                {sendError}
              </div>
            )}
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
              className="chat__send-btn"
              onClick={sendMessage}
              disabled={sendState === "sending"}
            >
              {sendState === "sending" ? "Sending…" : "Send"}
            </button>
          </div>
        </>
      ) : isSafeExtensionUrl(activeTab.value) ? (
        <iframe
          className="chat-tabs__iframe"
          src={activeTab.value}
          sandbox="allow-scripts allow-forms allow-popups"
          title={extractDisplayName(pages.find((p) => p.prefix === activeTab.value)?.extensionPath ?? "")}
        />
      ) : (
        <div className="chat-tabs__blocked">Blocked: unsafe extension URL</div>
      )}
    </section>
  );
}
