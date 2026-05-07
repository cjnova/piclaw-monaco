/** Represents a single tab in the central pane tab bar. */
export interface Tab {
  id: string;
  label: string;
  icon?: string;
  closable: boolean;
  type: "chat" | "widget" | "terminal";
}
