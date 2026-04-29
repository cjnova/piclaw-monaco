import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import { commandRegistry } from "../services";
import { useTheme } from "../theme/ThemeProvider";

interface CommandPaletteProps {
  visible: boolean;
  onClose: () => void;
}

export function CommandPalette({ visible, onClose }: CommandPaletteProps) {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => commandRegistry.search(query), [query]);

  useEffect(() => {
    if (!visible) {
      return;
    }

    setQuery("");
    setSelectedIndex(0);

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [visible]);

  useEffect(() => {
    setSelectedIndex((current) => {
      if (results.length === 0) {
        return 0;
      }

      return Math.min(current, results.length - 1);
    });
  }, [results]);

  if (!visible) {
    return null;
  }

  const executeSelected = () => {
    const command = results[selectedIndex];

    if (!command) {
      return;
    }

    commandRegistry.execute(command.id);
    onClose();
  };

  const handleKeyDown = (event: JSX.TargetedKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (results.length === 0) {
          return 0;
        }

        return (current + 1) % results.length;
      });
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((current) => {
        if (results.length === 0) {
          return 0;
        }

        return (current - 1 + results.length) % results.length;
      });
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
        <ul className="command-palette__results" role="listbox" aria-label="Commands">
          {results.map((command, index) => (
            <li
              key={command.id}
              className={`command-palette__row ${index === selectedIndex ? "is-active" : ""}`}
              style={{ background: index === selectedIndex ? theme.border : "transparent" }}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                commandRegistry.execute(command.id);
                onClose();
              }}
            >
              <span className="command-palette__label" style={{ color: theme.text }}>{command.label}</span>
              <span className="command-palette__keybinding" style={{ color: theme.textMuted }}>{command.keybinding ?? ""}</span>
            </li>
          ))}
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
