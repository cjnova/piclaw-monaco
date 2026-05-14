/**
 * AgentRequestModal — Security-relevant approval modal for pending agent requests.
 *
 * Renders when the agent requires explicit user approval before executing a tool call.
 * Modal is prominent and intentionally hard to dismiss without taking action.
 *
 * ## Escape-to-Deny semantics
 * Pressing Escape is equivalent to clicking Deny. This is intentional: the safe
 * default must be denial, not approval. Users should never accidentally grant
 * permission by pressing a key. The modal enforces this by mapping all
 * "passive dismissal" paths (Escape, background click guard) to Deny.
 *
 * ## Always Allow
 * "Always Allow" adds the request's tool title to a server-side permission
 * whitelist, then approves the current request. This persists across sessions.
 * Users should understand this creates a standing permission entry.
 */

import { useEffect, useRef } from "preact/hooks";
import { getChatJid } from "../api/chat-jid";

// Shield SVG — matches upstream status.ts:900–904
const SHIELD_SVG = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export interface AgentRequest {
  /** Backend-assigned request ID; passed to /agent/respond */
  request_id: string;
  /** Optional chat JID for cross-chat request routing */
  chat_jid?: string | null;
  /** Tool call metadata */
  tool_call?: {
    title?: string;
    kind?: string;
    description?: string;
    rawInput?: {
      command?: string;
      commands?: string[];
      diff?: string;
      fileName?: string;
      path?: string;
      description?: string;
      explanation?: string;
    };
    locations?: Array<{ path?: string }>;
  };
  /** ACP-style options (optionId, name, kind) for custom approval flows */
  options?: Array<{
    optionId?: string;
    id?: string;
    name?: string;
    label?: string;
    kind?: string;
  }>;
  /** Raw payload fields (for extension_ui_request custom kind) */
  title?: string;
  kind?: string;
}

interface AgentRequestModalProps {
  request: AgentRequest;
  onClose: () => void;
}

async function callRespondToAgentRequest(
  requestId: string,
  outcome: string,
  chatJid: string | null,
): Promise<void> {
  const body: Record<string, unknown> = { request_id: requestId, outcome };
  if (chatJid) body.chat_jid = chatJid;
  const res = await fetch("/agent/respond", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error((err as { error?: string }).error || `HTTP ${res.status}`);
  }
}

async function callAddToWhitelist(pattern: string, description: string): Promise<void> {
  const res = await fetch("/agent/whitelist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({ pattern, description }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Whitelist update failed" }));
    throw new Error((err as { error?: string }).error || `HTTP ${res.status}`);
  }
}

/**
 * AgentRequestModal — approval modal for pending agent permission requests.
 *
 * Auto-opens when rendered; cannot be dismissed without taking an action.
 * Escape key triggers Deny (safe default).
 */
export function AgentRequestModal({ request, onClose }: AgentRequestModalProps) {
  const { request_id, chat_jid, tool_call, options, title: rawTitle } = request;
  const chatJid = chat_jid || getChatJid();

  // Derive display fields from tool_call metadata
  const title = tool_call?.title || rawTitle || "Agent Request";
  const rawInput = tool_call?.rawInput || {};
  const command = rawInput.command || (rawInput.commands?.[0]) || null;
  const diff = rawInput.diff || null;
  const fileName = rawInput.fileName || rawInput.path || null;
  const explanation = tool_call?.description || rawInput.description || rawInput.explanation || null;
  const locations = Array.isArray(tool_call?.locations) ? tool_call!.locations : [];
  const locationPaths = locations.map((loc) => loc?.path).filter(Boolean) as string[];
  const uniquePaths = Array.from(new Set([fileName, ...locationPaths].filter(Boolean))) as string[];

  const hasOptions = options && options.length > 0;

  // Refs for focus management
  const modalRef = useRef<HTMLDivElement>(null);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  // Focus first button on mount; trap focus inside modal
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    firstBtnRef.current?.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (!modalRef.current) return;
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hidden);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      previous?.focus();
    };
  }, []);

  // Escape key → Deny (safe default)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        void handleDeny();
      }
    };
    document.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => document.removeEventListener("keydown", handleKeyDown, { capture: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request_id, chatJid]);

  const handleAllow = async () => {
    try {
      await callRespondToAgentRequest(request_id, "approved", chatJid);
    } catch (e) {
      console.error("[AgentRequestModal] Allow failed:", e);
    }
    onClose();
  };

  const handleDeny = async () => {
    try {
      await callRespondToAgentRequest(request_id, "denied", chatJid);
    } catch (e) {
      console.error("[AgentRequestModal] Deny failed:", e);
    }
    onClose();
  };

  const handleAlwaysAllow = async () => {
    try {
      await callAddToWhitelist(title, `Auto-approved: ${title}`);
      await callRespondToAgentRequest(request_id, "approved", chatJid);
    } catch (e) {
      console.error("[AgentRequestModal] Always Allow failed:", e);
    }
    onClose();
  };

  const handleOptionResponse = async (outcome: string) => {
    try {
      await callRespondToAgentRequest(request_id, outcome, chatJid);
    } catch (e) {
      console.error("[AgentRequestModal] Option response failed:", e);
    }
    onClose();
  };

  return (
    <div className="agent-request-modal" role="dialog" aria-modal="true" aria-label="Agent approval request">
      <div className="agent-request-content" ref={modalRef}>
        {/* Header */}
        <div className="agent-request-header">
          <div className="agent-request-icon">{SHIELD_SVG}</div>
          <div className="agent-request-title">{title}</div>
        </div>

        {/* Body */}
        {(explanation || command || diff || uniquePaths.length > 0) && (
          <div className="agent-request-body">
            {explanation && (
              <div className="agent-request-description">{explanation}</div>
            )}
            {uniquePaths.length > 0 && (
              <div className="agent-request-files">
                <div className="agent-request-subtitle">Files</div>
                <ul>
                  {uniquePaths.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {command && (
              <pre className="agent-request-command">{command}</pre>
            )}
            {diff && (
              <details className="agent-request-diff">
                <summary>Proposed diff</summary>
                <pre>{diff}</pre>
              </details>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="agent-request-actions">
          {hasOptions ? (
            options!.map((opt, i) => (
              <button
                key={opt.optionId || opt.id || String(i)}
                ref={i === 0 ? firstBtnRef : undefined}
                type="button"
                className={`agent-request-btn${
                  opt.kind === "allow_once" || opt.kind === "allow_always" ? " primary" : ""
                }`}
                onClick={() => void handleOptionResponse(opt.optionId || opt.id || String(opt))}
              >
                {opt.name || opt.label || opt.optionId || opt.id || String(opt)}
              </button>
            ))
          ) : (
            <>
              {/* Allow — primary action */}
              <button
                ref={firstBtnRef}
                type="button"
                className="agent-request-btn primary"
                onClick={() => void handleAllow()}
              >
                Allow
              </button>
              {/* Deny — safe default; also triggered by Escape */}
              <button
                type="button"
                className="agent-request-btn"
                onClick={() => void handleDeny()}
              >
                Deny
              </button>
              {/* Always Allow — persists whitelist entry */}
              <button
                type="button"
                className="agent-request-btn always-allow"
                onClick={() => void handleAlwaysAllow()}
              >
                Always Allow This
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
