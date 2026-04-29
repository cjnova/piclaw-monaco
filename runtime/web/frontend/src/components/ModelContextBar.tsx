import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useTheme } from "../theme/ThemeProvider";

interface AgentStatus {
  status: "active" | "idle";
  data?: {
    model?: string;
    thinking_level?: string;
    tier?: string;
    chat_percent?: number;
    premium_percent?: number;
  };
}

interface AgentContext {
  tokens: number | null;
  contextWindow: number;
  percent: number | null;
}

interface ModelInfo {
  current: string | null;
  models: string[];
  model_options: { id: string; label?: string; provider?: string }[];
  thinking_level: string | null;
  thinking_level_label: string | null;
  supports_thinking: boolean;
  available_thinking_levels: string[];
}

const FALLBACK_MODELS = [
  "github-copilot/claude-sonnet-4.6",
  "github-copilot/claude-opus-4.6",
  "github-copilot/gpt-5.3-codex",
  "github-copilot/o4-mini",
  "github-copilot/gemini-2.5-pro",
];

const FALLBACK_THINKING_LEVELS = ["none", "low", "medium", "high", "max"];

function ContextRing({ percent, tokens, contextWindow, onClick }: { percent: number | null; tokens: number | null; contextWindow: number | null; onClick: (e: MouseEvent) => void }) {
  const p = percent ?? 0;
  const color = p > 95 ? "#f38ba8" : p > 80 ? "#f9e2af" : "#a6e3a1";
  const tokensK = tokens != null ? `${(tokens / 1000).toFixed(0)}k` : "--";
  const totalK = contextWindow != null ? `${(contextWindow / 1000).toFixed(0)}k` : "--";

  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: "4px", cursor: "pointer" }}
      onClick={onClick}
      title={`Context: ${tokensK}/${totalK} (${p.toFixed(0)}%) \u2014 click to compact`}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0 }}>
        <circle cx="6" cy="6" r="5" fill={color} opacity="0.9" />
      </svg>
      <span style={{ fontSize: "11px", opacity: 0.9 }}>{tokensK}/{totalK}</span>
    </span>
  );
}

export function ModelContextBar() {
  const theme = useTheme();
  const agentStatus = useSignal<AgentStatus | null>(null);
  const agentContext = useSignal<AgentContext | null>(null);
  const error = useSignal<boolean>(false);
  const showPicker = useSignal<boolean>(false);
  const showThinkingPicker = useSignal<boolean>(false);
  const models = useSignal<string[]>([]);
  const thinkingLevels = useSignal<string[]>([]);
  const currentModel = useSignal<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/agent/status");
        if (res.ok) {
          agentStatus.value = await res.json() as AgentStatus;
          error.value = false;
        } else {
          error.value = true;
        }
      } catch {
        error.value = true;
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5_000);
    return () => clearInterval(interval);
  }, [agentStatus, error]);

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const res = await fetch("/agent/context");
        if (res.ok) {
          agentContext.value = await res.json() as AgentContext;
        }
      } catch {
        // silently ignore
      }
    };

    fetchContext();
    const interval = setInterval(fetchContext, 10_000);
    return () => clearInterval(interval);
  }, [agentContext]);

  // Close pickers on outside click or Escape
  useEffect(() => {
    if (!showPicker.value && !showThinkingPicker.value) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        showPicker.value = false;
        showThinkingPicker.value = false;
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-model-picker]")) {
        showPicker.value = false;
        showThinkingPicker.value = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showPicker.value, showThinkingPicker.value]);

  const handleCompact = (e: MouseEvent) => {
    e.stopPropagation();
    fetch("/agent/web:default/message", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: "/compact" }),
    }).catch(() => {});
  };

  const handleBadgeClick = async (e: MouseEvent) => {
    e.stopPropagation();
    if (showPicker.value) {
      showPicker.value = false;
      return;
    }

    // Fetch models list
    try {
      const res = await fetch("/agent/models");
      if (res.ok) {
        const info = await res.json() as ModelInfo;
        models.value = info.models?.length
          ? info.models
          : (info.model_options?.map(o => o.id) ?? FALLBACK_MODELS);
        currentModel.value = info.current ?? modelName;
        thinkingLevels.value = info.available_thinking_levels?.length
          ? info.available_thinking_levels
          : FALLBACK_THINKING_LEVELS;
      } else {
        models.value = FALLBACK_MODELS;
        currentModel.value = modelName;
        thinkingLevels.value = FALLBACK_THINKING_LEVELS;
      }
    } catch {
      models.value = FALLBACK_MODELS;
      currentModel.value = modelName;
      thinkingLevels.value = FALLBACK_THINKING_LEVELS;
    }

    showPicker.value = true;
  };

  const handleSelectModel = (id: string) => {
    fetch("/agent/web:default/message", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: `/model ${id}` }),
    }).catch(() => {});
    currentModel.value = id;
    showPicker.value = false;
  };

  const handleThinkingClick = (e: MouseEvent) => {
    e.stopPropagation();
    showThinkingPicker.value = !showThinkingPicker.value;
    showPicker.value = false;
  };

  const handleSelectThinking = (level: string) => {
    fetch("/agent/web:default/message", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: `/thinking ${level}` }),
    }).catch(() => {});
    showThinkingPicker.value = false;
  };

  // Show mockup when not connected
  const isConnected = !error.value || !!agentStatus.value;
  const modelName = isConnected
    ? (agentStatus.value?.data?.model ?? currentModel.value ?? "github-copilot/claude-sonnet-4.6")
    : "github-copilot/claude-sonnet-4.6";
  const thinkingLevel = isConnected
    ? (agentStatus.value?.data?.thinking_level ?? "")
    : "medium";
  const contextPercent = isConnected
    ? (agentContext.value?.percent ?? null)
    : 42;
  const contextTokens = isConnected
    ? (agentContext.value?.tokens ?? null)
    : 54000;
  const contextWindow = isConnected
    ? (agentContext.value?.contextWindow ?? null)
    : 128000;

  const activeModel = currentModel.value ?? modelName;

  return (
    <span
      data-model-picker
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {/* Model picker dropdown — opens above */}
      {showPicker.value && (
        <div
          data-model-picker
          style={{
            position: "absolute",
            bottom: "calc(100% + 4px)",
            left: 0,
            zIndex: 9999,
            background: "#2a2a3c",
            border: `1px solid ${theme.border ?? "#45475a"}`,
            borderRadius: "6px",
            boxShadow: "0 -8px 24px rgba(0,0,0,0.4)",
            maxHeight: "300px",
            overflowY: "auto",
            minWidth: "200px",
            maxWidth: "320px",
            scrollbarWidth: "thin",
            scrollbarColor: "#45475a transparent",
          }}
        >
          {models.value.map((id) => {
            const isCurrent = id === activeModel;
            return (
              <div
                key={id}
                onClick={() => handleSelectModel(id)}
                style={{
                  padding: "6px 12px",
                  fontSize: "12px",
                  cursor: "pointer",
                  color: isCurrent ? "#cba6f7" : "#cdd6f4",
                  background: isCurrent ? "rgba(203,166,247,0.1)" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = isCurrent
                    ? "rgba(203,166,247,0.18)"
                    : "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = isCurrent
                    ? "rgba(203,166,247,0.1)"
                    : "transparent";
                }}
              >
                <span style={{ width: "12px", flexShrink: 0, textAlign: "center" }}>
                  {isCurrent ? "✓" : ""}
                </span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{id}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* The badge itself */}
      <span
        onClick={handleBadgeClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "#1e66a8",
          color: "#ffffff",
          padding: "2px 10px",
          borderRadius: "3px",
          fontWeight: 500,
          cursor: "pointer",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
        title={`${modelName}${thinkingLevel ? ` • ${thinkingLevel}` : ""} — click to switch model`}
      >
        <span style={{ opacity: 1, marginRight: "4px" }}>
          {modelName.includes("/") ? modelName.split("/")[0] + " /" : ""}
        </span>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "200px" }}>
          {modelName.split("/").pop() || modelName}
        </span>
        {thinkingLevel && (
          <span
            data-model-picker
            style={{ position: "relative", display: "inline-flex" }}
          >
            <span
              onClick={handleThinkingClick}
              style={{ cursor: "pointer", borderBottom: "1px dashed rgba(255,255,255,0.5)", paddingBottom: "1px" }}
              title="Click to change thinking level"
            >
              {thinkingLevel}
            </span>
            {showThinkingPicker.value && (
              <div
                data-model-picker
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 9999,
                  background: "#2a2a3c",
                  border: `1px solid ${theme.border ?? "#45475a"}`,
                  borderRadius: "6px",
                  boxShadow: "0 -8px 24px rgba(0,0,0,0.4)",
                  minWidth: "100px",
                  overflow: "hidden",
                }}
              >
                {(thinkingLevels.value.length ? thinkingLevels.value : FALLBACK_THINKING_LEVELS).map((level) => {
                  const isActive = level === thinkingLevel;
                  return (
                    <div
                      key={level}
                      onClick={(ev) => { ev.stopPropagation(); handleSelectThinking(level); }}
                      style={{
                        padding: "5px 12px",
                        fontSize: "12px",
                        cursor: "pointer",
                        color: isActive ? "#a6e3a1" : "#cdd6f4",
                        background: isActive ? "rgba(166,227,161,0.1)" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      onMouseEnter={(ev) => { (ev.currentTarget as HTMLElement).style.background = isActive ? "rgba(166,227,161,0.18)" : "rgba(255,255,255,0.07)"; }}
                      onMouseLeave={(ev) => { (ev.currentTarget as HTMLElement).style.background = isActive ? "rgba(166,227,161,0.1)" : "transparent"; }}
                    >
                      <span style={{ width: "12px", textAlign: "center" }}>{isActive ? "✓" : ""}</span>
                      <span>{level}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </span>
        )}
        <ContextRing percent={contextPercent} tokens={contextTokens} contextWindow={contextWindow} onClick={handleCompact} />
      </span>
    </span>
  );
}
