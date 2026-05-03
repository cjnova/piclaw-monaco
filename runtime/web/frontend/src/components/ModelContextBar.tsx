import { useEffect } from "preact/hooks";
import { useComputed } from "@preact/signals";
import { useStatusPolling } from "./model-context-bar/useStatusPolling";
import { useCompaction } from "./model-context-bar/useCompaction";
import { useModelPicker } from "./model-context-bar/useModelPicker";
import { ModelPicker } from "./model-context-bar/ModelPicker";
import { ThinkingPicker } from "./model-context-bar/ThinkingPicker";
import { ContextRing } from "./model-context-bar/ContextRing";

export function ModelContextBar() {
  const {
    agentStatus, agentContext, isStale,
    currentModel, currentThinkingLevel, modelContextWindow,
    usageLabel, providerUsage,
    fetchContext,
  } = useStatusPolling();

  const { isCompacting, compactElapsed, handleCompact } = useCompaction(fetchContext);

  const {
    showPicker, showThinkingPicker, models, thinkingLevels,
    handleBadgeClick, handleSelectModel, handleThinkingClick, handleSelectThinking,
  } = useModelPicker();

  const contextTokens = useComputed(() => agentContext.value?.tokens ?? 0);
  const contextWindow = useComputed(() => agentContext.value?.contextWindow ?? modelContextWindow.value ?? 0);
  const contextPercent = useComputed(() => {
    const w = contextWindow.value, t = contextTokens.value;
    return agentContext.value?.percent ?? (w > 0 ? (t / w) * 100 : 0);
  });

  const modelName = agentStatus.value?.data?.model ?? currentModel.value ?? "";
  const thinkingLevel = agentStatus.value?.data?.thinking_level || currentThinkingLevel.value || "";
  const activeModel = currentModel.value ?? modelName;

  // Close pickers on outside click or Escape
  useEffect(() => {
    if (!showPicker.value && !showThinkingPicker.value) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { showPicker.value = false; showThinkingPicker.value = false; }
    };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-model-picker]")) {
        showPicker.value = false; showThinkingPicker.value = false;
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, [showPicker.value, showThinkingPicker.value]);

  return (
    <span
      data-model-picker
      className={`model-badge-wrapper${isStale.value ? " model-badge-wrapper--stale" : ""}`}
    >
      {showPicker.value && (
        <ModelPicker
          models={models.value}
          activeModel={activeModel}
          onSelectModel={(id) => handleSelectModel(id, (m) => { currentModel.value = m; })}
        />
      )}
      {isCompacting.value && (
        <span className="compaction-badge">⟳ Compacting... {compactElapsed.value}s</span>
      )}
      <span
        className="model-badge"
        role="button"
        tabIndex={0}
        onClick={(e) => handleBadgeClick(e, modelName, (l) => { currentThinkingLevel.value = l; }, (m) => { currentModel.value = m; })}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleBadgeClick(e, modelName, (l) => { currentThinkingLevel.value = l; }, (m) => { currentModel.value = m; }); } }}
        title={`${modelName}${thinkingLevel ? ` • ${thinkingLevel}` : ""} — click to switch model`}
      >
        <span className="model-badge__name-wrapper">
          <span className="model-badge__provider">{modelName.includes("/") ? modelName.split("/")[0] + "/" : ""}</span>
          <span className="model-badge__name">{modelName.split("/").pop() || modelName}</span>
        </span>
      </span>
      {thinkingLevel && (
        <span data-model-picker className="thinking-badge-wrapper">
          <span
            className="thinking-badge"
            role="button"
            tabIndex={0}
            onClick={handleThinkingClick}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleThinkingClick(e); } }}
            title="Click to change thinking level"
          >
            {thinkingLevel}
          </span>
          {showThinkingPicker.value && (
            <ThinkingPicker
              thinkingLevels={thinkingLevels.value}
              currentLevel={thinkingLevel}
              onSelectThinking={handleSelectThinking}
            />
          )}
        </span>
      )}
      <ContextRing
        percent={contextPercent.value}
        tokens={contextTokens.value}
        contextWindow={contextWindow.value}
        onClick={(e) => handleCompact(e, fetchContext)}
      />
      {usageLabel.value && (
        <span
          className="usage-badge"
          title={[
            providerUsage.value?.provider ? `Provider: ${(providerUsage.value as Record<string, unknown>).provider}` : "",
            providerUsage.value?.plan ? `Plan: ${(providerUsage.value as Record<string, unknown>).plan}` : "",
          ].filter(Boolean).join("\n")}
        >
          {usageLabel.value}
        </span>
      )}
    </span>
  );
}
