import { useEffect, useRef } from "preact/hooks";
import { renderThinkingMarkdown } from "../../utils/markdown-pipeline";

interface ThoughtsPanelProps {
  thought: string;
}

export function ThoughtsPanel({ thought }: ThoughtsPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom as new thinking streams in
  useEffect(() => {
    const el = contentRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [thought]);

  if (!thought) return null;

  return (
    <div className="thoughts-panel" ref={contentRef}>
      <div className="thoughts-panel__header">
        <i className="codicon codicon-lightbulb" />
        <span className="thoughts-panel__title">Thinking...</span>
      </div>
      <div
        className="thoughts-panel__content"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: markdown sanitized by markdown-pipeline
        dangerouslySetInnerHTML={{ __html: renderThinkingMarkdown(thought) }}
      />
    </div>
  );
}
