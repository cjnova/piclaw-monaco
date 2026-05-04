import { AgentStatusPanel } from "../components/AgentStatusPanel";
import { WidgetPane } from "../components/WidgetPane";
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

interface Attachment {
  id?: number;
  name: string;
  type: string;
  size: number;
  file?: File;
}

const HISTORY_KEY = "piclaw:compose-history";
const MAX_HISTORY = 50;

export function ChatPanel({ onOpenPalette }: ChatPanelProps = {}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeTab = useSignal<string>("chat");
  const extensionPages = useSignal<ExtensionRoute[]>([]);
  const isSending = useSignal(false);
  const sendError = useSignal<string | null>(null);
  const isAgentRunning = useSignal(false);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const attachmentsRef = useRef<Attachment[]>([]);
  attachmentsRef.current = attachments;
  const [isDragOver, setIsDragOver] = useState(false);
  const dragCounterRef = useRef(0);

  // Command history (ArrowUp/Down)
  const historyRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);
  const historyDraftRef = useRef("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (raw) historyRef.current = JSON.parse(raw);
    } catch {}
  }, []);


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
    // No auto-resize — fixed height with internal scroll
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

  // Attachment handlers
  const handleClipClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const files = input.files;
    if (!files?.length) return;
    for (const file of Array.from(files)) {
      setAttachments((prev) => [...prev, {
        name: file.name,
        type: file.type,
        size: file.size,
        file,
      }]);
    }
    input.value = "";
  };

  const handlePaste = (e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items?.length) return;
    const files: File[] = [];
    for (const item of Array.from(items)) {
      if (item.kind !== "file") continue;
      const file = item.getAsFile?.();
      if (file) files.push(file);
    }
    if (files.length > 0) {
      e.preventDefault();
      for (const file of files) {
        setAttachments((prev) => [...prev, {
          name: file.name || `pasted-${Date.now()}.${file.type.split("/")[1] || "png"}`,
          type: file.type,
          size: file.size,
          file,
        }]);
      }
    }
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current++;
    if (e.dataTransfer?.types?.includes("Files")) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragOver(false);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current = 0;
    setIsDragOver(false);
    const files = e.dataTransfer?.files;
    if (!files?.length) return;
    for (const file of Array.from(files)) {
      setAttachments((prev) => [...prev, {
        name: file.name,
        type: file.type,
        size: file.size,
        file,
      }]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const sendMessage = async () => {
    const el = textareaRef.current;
    if (!el || isSending.value) return;
    const content = el.value.trim();
    if (!content && attachmentsRef.current.length === 0) return;

    isSending.value = true;
    sendError.value = null;

    // Upload pending attachments
    const mediaIds: number[] = [];
    for (const att of attachmentsRef.current) {
      if (att.id) {
        mediaIds.push(att.id);
      } else if (att.file) {
        try {
          const form = new FormData();
          form.append("file", att.file);
          const res = await fetch("/media/upload", {
            method: "POST",
            credentials: "same-origin",
            body: form,
          });
          if (res.ok) {
            const data = await res.json();
            if (data.id) mediaIds.push(data.id);
          }
        } catch {
          // skip failed uploads
        }
      }
    }

    // Append attachment references to content (like upstream)
    let messageContent = content;
    if (mediaIds.length > 0) {
      const mediaBlock = mediaIds.map((id, i) => {
        const att = attachmentsRef.current[i];
        const label = att?.name || `attachment-${i + 1}`;
        return `- attachment:${id} (${label})`;
      }).join("\n");
      messageContent = [content, `Attachments:\n${mediaBlock}`].filter(Boolean).join("\n\n");
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(getMessageUrl(), {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: messageContent, media_ids: mediaIds.length > 0 ? mediaIds : undefined }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) {
        sendError.value = `Send failed (HTTP ${res.status}). Try again.`;
        isSending.value = false;
        return;
      }

      // Only clear draft after confirmed success
      if (content) {
        const history = historyRef.current;
        if (history[history.length - 1] !== content) {
          history.push(content);
          if (history.length > MAX_HISTORY) history.shift();
          try { localStorage.setItem(HISTORY_KEY, JSON.stringify(history)); } catch {}
        }
        historyIndexRef.current = -1;
      }
      el.value = "";
      el.style.height = "auto";
      sendError.value = null;
      setAttachments([]);
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
            <input
              ref={fileInputRef}
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <div
              className={`chat__compose-container${isDragOver ? " chat__compose-container--dragover" : ""}`}
              onDragEnter={handleDragEnter as any}
              onDragLeave={handleDragLeave as any}
              onDragOver={handleDragOver as any}
              onDrop={handleDrop as any}
            >
              <button
                type="button"
                className="chat__clip-btn"
                onClick={handleClipClick}
                aria-label="Attach file"
                title="Attach file"
              >
                <i className="codicon codicon-attach" />
              </button>
              {attachments.length > 0 && (
                <div className="chat__attachments">
                  {attachments.map((att, i) => (
                    <span key={att.id ?? i} className="chat__attachment-pill">
                      <span className="chat__attachment-name">{att.name}</span>
                      <button
                        type="button"
                        className="chat__attachment-remove"
                        onClick={() => removeAttachment(i)}
                        aria-label={`Remove ${att.name}`}
                      >✕</button>
                    </span>
                  ))}
                  <button
                    type="button"
                    className="chat__attachment-clear"
                    onClick={() => setAttachments([])}
                    aria-label="Clear all attachments"
                  >Clear all</button>
                </div>
              )}
              <textarea
                ref={textareaRef}
                className="chat__input"
                placeholder="Type a message..."
                rows={3}
                onInput={handleInput}
                onPaste={handlePaste as any}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                  if (e.key === "Escape" && isAgentRunning.value) {
                    abortAgent();
                  }
                  // Command history navigation
                  const el = e.target as HTMLTextAreaElement;
                  const atStart = el.selectionStart === 0 && el.selectionEnd === 0;
                  const atEnd = el.selectionStart === el.value.length;
                  if (e.key === "ArrowUp" && atStart) {
                    const history = historyRef.current;
                    if (!history.length) return;
                    e.preventDefault();
                    let idx = historyIndexRef.current;
                    if (idx === -1) {
                      historyDraftRef.current = el.value;
                      idx = history.length - 1;
                    } else if (idx > 0) {
                      idx--;
                    }
                    historyIndexRef.current = idx;
                    el.value = history[idx] || "";
                    hasText.value = el.value.trim().length > 0;
                  }
                  if (e.key === "ArrowDown" && atEnd) {
                    const history = historyRef.current;
                    if (historyIndexRef.current === -1) return;
                    e.preventDefault();
                    let idx = historyIndexRef.current;
                    if (idx < history.length - 1) {
                      idx++;
                      historyIndexRef.current = idx;
                      el.value = history[idx] || "";
                    } else {
                      historyIndexRef.current = -1;
                      el.value = historyDraftRef.current || "";
                      historyDraftRef.current = "";
                    }
                    hasText.value = el.value.trim().length > 0;
                  }
                }}
              />
            </div>
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
                disabled={isSending.value || (!hasText.value && attachments.length === 0)}
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
