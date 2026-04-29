import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import { commandRegistry } from "../services";

interface CommandPaletteProps {
  visible: boolean;
  onClose: () => void;
}

export function CommandPalette({ visible, onClose }: CommandPaletteProps) {
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
      <div className="command-palette" onClick={(event) => event.stopPropagation()}>
        <input
          ref={inputRef}
          className="command-palette__input"
          placeholder="Type a command..."
          value={query}
          onInput={(event) => setQuery((event.target as HTMLInputElement).value)}
          onKeyDown={handleKeyDown}
        />
        <ul className="command-palette__results" role="listbox" aria-label="Commands">
          {results.map((command, index) => (
            <li
              key={command.id}
              className={`command-palette__row ${index === selectedIndex ? "is-active" : ""}`}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                commandRegistry.execute(command.id);
                onClose();
              }}
            >
              <span className="command-palette__label">{command.label}</span>
              <span className="command-palette__keybinding">{command.keybinding ?? ""}</span>
            </li>
          ))}
          {results.length === 0 && <li className="command-palette__empty">No matching commands</li>}
        </ul>
      </div>
    </div>
  );
}
