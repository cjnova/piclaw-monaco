import type { ComponentChildren } from "preact";

interface BottomPanelProps {
  visible: boolean;
  children: ComponentChildren;
}

export function BottomPanel({ visible, children }: BottomPanelProps) {
  return (
    <section
      className={`bottom-panel ${visible ? "is-visible" : "is-hidden"}`}
      aria-hidden={!visible}
    >
      <header className="bottom-panel__tabbar">
        <button type="button" className="bottom-panel__tab is-active" aria-selected="true">
          TERMINAL
        </button>
        <button type="button" className="bottom-panel__new-tab" aria-label="New terminal tab">
          +
        </button>
      </header>
      <div className="bottom-panel__content">{children}</div>
    </section>
  );
}
