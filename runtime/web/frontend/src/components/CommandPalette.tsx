import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import { commandRegistry } from "../services";
import { useTheme } from "../theme/ThemeProvider";

interface CommandPaletteProps {
  visible: boolean;
  onClose: () => void;
  onCommand?: (cmd: string) => void;
}

interface BackendCommand {
  name: string;
  description: string;
  source: string;
}

interface MergedCommand {
  id: string;
  label: string;
  description?: string;
  category: string;
  keybinding?: string;
  handler?: () => void;
  isBackend: boolean;
}

const CATEGORY_BADGE_COLORS: Record<string, string> = {
  navigation: "#89b4fa",
  terminal: "#a6e3a1",
  session: "#f9e2af",
  theme: "#cba6f7",
  general: "#94e2d5",
  core: "#f38ba8",
  extension: "#fab387",
  skill: "#a6e3a1",
  template: "#89dceb",
};

export function CommandPalette({ visible, onClose, onCommand }: CommandPaletteProps) {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [backendCommands, setBackendCommands] = useState<BackendCommand[]>([]);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Fetch backend commands when palette opens
  useEffect(() => {
    if (!visible) return;

    setQuery("");
    setSelectedIndex(0);

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    const controller = new AbortController();

    // Fetch real piclaw commands from backend
    fetch("/agent/commands", { credentials: "same-origin", signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ commands: BackendCommand[] }>;
      })
      .then((data) => {
        setBackendCommands(data.commands ?? []);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.warn("[CommandPalette] Failed to fetch backend commands:", err);
        setBackendCommands([]);
      });

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [visible]);

  // Merge local UI commands (first) with backend commands (after)
  const allCommands = useMemo((): MergedCommand[] => {
    const localCmds: MergedCommand[] = commandRegistry.getAll().map((cmd) => ({
      id: cmd.id,
      label: cmd.label,
      category: cmd.category,
      keybinding: cmd.keybinding,
      handler: cmd.handler,
      isBackend: false,
    }));

    const backendCmds: MergedCommand[] = backendCommands
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((cmd) => ({
        id: `backend:${cmd.name}`,
        label: cmd.name,
        description: cmd.description,
        category: cmd.source ?? "core",
        isBackend: true,
      }));

    return [...localCmds, ...backendCmds];
  }, [backendCommands, visible]);

  // Filter by query
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCommands;
    return allCommands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        (cmd.description?.toLowerCase().includes(q) ?? false)
    );
  }, [query, allCommands]);

  useEffect(() => {
    setSelectedIndex((current) => {
      if (results.length === 0) return 0;
      return Math.min(current, results.length - 1);
    });
  }, [results]);

  if (!visible) {
    return null;
  }

  const executeBackendCommand = (label: string) => {
    navigator.clipboard.writeText(label).catch(() => {});
    if (onCommand) onCommand(label);
    // Show brief visual indicator
    if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    setCopiedLabel(label);
    copiedTimerRef.current = setTimeout(() => setCopiedLabel(null), 1500);
  };

  const executeSelected = () => {
    const command = results[selectedIndex];
    if (!command) return;

    if (command.handler) {
      command.handler();
    } else if (command.isBackend) {
      executeBackendCommand(command.label);
    }
    onClose();
  };

  const scrollActiveIntoView = (index: number) => {
    requestAnimationFrame(() => {
      const list = listRef.current;
      if (!list) return;
      const active = list.children[index] as HTMLElement | undefined;
      active?.scrollIntoView({ block: "nearest" });
    });
  };

  const handleKeyDown = (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "Backspace" && query === "") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (results.length === 0) return 0;
        const next = (current + 1) % results.length;
        scrollActiveIntoView(next);
        return next;
      });
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (results.length === 0) return 0;
        const prev = (current - 1 + results.length) % results.length;
        scrollActiveIntoView(prev);
        return prev;
      });
      return;
    }

    if (event.key === "PageDown") {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (results.length === 0) return 0;
        const next = Math.min(current + 10, results.length - 1);
        scrollActiveIntoView(next);
        return next;
      });
      return;
    }

    if (event.key === "PageUp") {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (results.length === 0) return 0;
        const prev = Math.max(current - 10, 0);
        scrollActiveIntoView(prev);
        return prev;
      });
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setSelectedIndex(0);
      scrollActiveIntoView(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      const last = Math.max(results.length - 1, 0);
      setSelectedIndex(last);
      scrollActiveIntoView(last);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      executeSelected();
    }
  };

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div
        className="command-palette"
        style={{
          background: theme.bg,
          border: `1px solid ${theme.inputBorder}`,
          boxShadow: "0 18px 48px rgba(0, 0, 0, 0.35)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <input
          ref={inputRef}
          className="command-palette__input"
          placeholder="Type a command..."
          value={query}
          style={{
            borderBottom: `1px solid ${theme.border}`,
            color: theme.text,
          }}
          onInput={(event) => setQuery((event.target as HTMLInputElement).value)}
          onKeyDown={handleKeyDown}
        />
        {copiedLabel && (
          <div style={{
            padding: "4px 12px",
            fontSize: "11px",
            color: "#a6e3a1",
            background: "rgba(166,227,161,0.08)",
            borderBottom: `1px solid ${theme.border}`,
          }}>
            Copied to clipboard: <strong>{copiedLabel}</strong>
          </div>
        )}
        <ul ref={listRef} className="command-palette__results" role="listbox" aria-label="Commands">
          {results.map((command, index) => {
            const badgeColor = CATEGORY_BADGE_COLORS[command.category] ?? theme.textMuted;
            return (
              <li
                key={command.id}
                className={`command-palette__row ${index === selectedIndex ? "is-active" : ""}`}
                style={{ background: index === selectedIndex ? theme.border : "transparent" }}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  if (command.handler) {
                    command.handler();
                  } else if (command.isBackend) {
                    executeBackendCommand(command.label);
                  }
                  onClose();
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
                  <span className="command-palette__label" style={{ color: theme.text }}>{command.label}</span>
                  {command.description && (
                    <span
                      style={{
                        color: "#a6adc8",
                        fontSize: "11px",
                        marginTop: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {command.description}
                    </span>
                  )}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "1px 5px",
                      borderRadius: "3px",
                      background: `${badgeColor}22`,
                      color: badgeColor,
                      border: `1px solid ${badgeColor}44`,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {command.category}
                  </span>
                  {command.keybinding && (
                    <span className="command-palette__keybinding" style={{ color: "#9399b2" }}>
                      {command.keybinding}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
          {results.length === 0 && (
            <li className="command-palette__empty" style={{ color: theme.textMuted }}>
              No matching commands
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
