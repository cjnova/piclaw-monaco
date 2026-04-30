import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { JSX } from "preact";
import { commandRegistry } from "../services";
import { getMessageUrl } from "../api/chat-jid";

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

type ParamType = "bare" | "autocomplete" | "text";

interface CommandParam {
  type: ParamType;
  fetch?: string;          // API endpoint for autocomplete options
  extractField?: string;   // field in API response to get options from
  placeholder?: string;    // for text input
}

const COMMAND_PARAMS: Record<string, CommandParam> = {
  // Autocomplete — fetch options from API
  "/model": { type: "autocomplete", fetch: "/agent/models", extractField: "models" },
  "/thinking": { type: "autocomplete", fetch: "/agent/models", extractField: "available_thinking_levels" },
  "/switch-session": { type: "autocomplete", fetch: "/agent/active-chats", extractField: "chats" },
  // Text — user types parameter
  "/shell": { type: "text", placeholder: "Shell command" },
  "/bash": { type: "text", placeholder: "Bash command" },
  "/user-github": { type: "text", placeholder: "GitHub username or URL" },
  "/session-name": { type: "text", placeholder: "Session name" },
  "/agent-name": { type: "text", placeholder: "Agent display name" },
  "/agent-avatar": { type: "text", placeholder: "Avatar URL" },
  "/user-name": { type: "text", placeholder: "Your display name" },
  "/user-avatar": { type: "text", placeholder: "Avatar URL" },
  "/fork": { type: "text", placeholder: "Entry ID (use /forks to list)" },
  "/clone": { type: "text", placeholder: "Entry ID" },
  "/ask": { type: "text", placeholder: "instance_id prompt" },
  "/queue": { type: "text", placeholder: "Follow-up message" },
  "/queue-all": { type: "text", placeholder: "Follow-up message (batch)" },
  "/steer": { type: "text", placeholder: "Steering message" },
  "/followup-mode": { type: "text", placeholder: "all or one" },
  "/steering-mode": { type: "text", placeholder: "all or one" },
  // Bare — execute immediately, no params
  "/compact": { type: "bare" },
  "/stats": { type: "bare" },
  "/state": { type: "bare" },
  "/context": { type: "bare" },
  "/abort": { type: "bare" },
  "/abort-bash": { type: "bare" },
  "/abort-retry": { type: "bare" },
  "/last": { type: "bare" },
  "/restart": { type: "bare" },
  "/tree": { type: "bare" },
  "/forks": { type: "bare" },
  "/auto-compact": { type: "bare" },
  "/auto-retry": { type: "bare" },
  "/cycle-model": { type: "bare" },
  "/cycle-thinking": { type: "bare" },
  "/new-session": { type: "bare" },
  "/session-rotate": { type: "bare" },
};

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

function sendCommand(command: string) {
  fetch(getMessageUrl(), {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: command }),
  }).catch((err) => console.warn("[CommandPalette] send failed:", err));
}

export function CommandPalette({ visible, onClose, onCommand }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [backendCommands, setBackendCommands] = useState<BackendCommand[]>([]);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [step, setStep] = useState<"command" | "parameter">("command");
  const [selectedCommand, setSelectedCommand] = useState<string>("");
  const [autoCompleteOptions, setAutoCompleteOptions] = useState<string[]>([]);
  const [paramPlaceholder, setParamPlaceholder] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Reset state when palette opens/closes
  useEffect(() => {
    if (visible) {
      setQuery("");
      setSelectedIndex(0);
      setStep("command");
      setSelectedCommand("");
      setAutoCompleteOptions([]);
      setParamPlaceholder("");

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
    } else {
      // Reset on close
      setStep("command");
      setSelectedCommand("");
      setAutoCompleteOptions([]);
    }
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

  // Filter by query (for both steps)
  const results = useMemo(() => {
    if (step === "parameter" && autoCompleteOptions.length > 0) {
      // Step 2: filter autocomplete options
      const q = query.trim().toLowerCase();
      if (!q) return autoCompleteOptions;
      return autoCompleteOptions.filter((opt) => opt.toLowerCase().includes(q));
    }

    if (step === "parameter") {
      // Free text step — no list
      return [];
    }

    // Step 1: filter commands
    const q = query.trim().toLowerCase();
    if (!q) return allCommands;
    return allCommands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        (cmd.description?.toLowerCase().includes(q) ?? false)
    );
  }, [query, allCommands, step, autoCompleteOptions]);

  useEffect(() => {
    setSelectedIndex((current) => {
      if (results.length === 0) return 0;
      return Math.min(current, results.length - 1);
    });
  }, [results]);

  if (!visible) {
    return null;
  }

  const executeBackendCommand = async (command: MergedCommand) => {
    const name = command.label; // e.g., "/model"
    const param = COMMAND_PARAMS[name];

    if (!param || param.type === "bare") {
      // Execute immediately
      sendCommand(name);
      if (onCommand) onCommand(name);
      onClose();
      return;
    }

    if (param.type === "autocomplete" && param.fetch) {
      // Fetch options, switch to step 2
      try {
        const res = await fetch(param.fetch, { credentials: "same-origin" });
        const data = await res.json();
        const options = param.extractField ? data[param.extractField] ?? [] : [];
        setAutoCompleteOptions(Array.isArray(options) ? options : []);
      } catch (err) {
        console.warn("[CommandPalette] Failed to fetch autocomplete options:", err);
        setAutoCompleteOptions([]);
      }
      setSelectedCommand(name);
      setStep("parameter");
      setSelectedIndex(0);
      setQuery(""); // clear query for parameter filtering
      window.setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }

    if (param.type === "text") {
      setSelectedCommand(name);
      setParamPlaceholder(param.placeholder ?? "Enter value");
      setStep("parameter");
      setQuery(""); // clear for text input
      window.setTimeout(() => inputRef.current?.focus(), 0);
      return;
    }
  };

  const executeSelected = () => {
    if (step === "parameter") {
      if (autoCompleteOptions.length > 0) {
        // Autocomplete: user selected an option from the list
        const selectedOption = (results as string[])[selectedIndex];
        if (selectedOption != null) {
          const fullCommand = `${selectedCommand} ${selectedOption}`;
          sendCommand(fullCommand);
          if (onCommand) onCommand(fullCommand);
          onClose();
        }
      } else {
        // Free text: user typed and pressed Enter
        const trimmed = query.trim();
        if (trimmed) {
          const fullCommand = `${selectedCommand} ${trimmed}`;
          sendCommand(fullCommand);
          if (onCommand) onCommand(fullCommand);
          onClose();
        }
      }
      return;
    }

    const command = (results as MergedCommand[])[selectedIndex];
    if (!command) return;

    if (command.handler) {
      command.handler();
      onClose();
    } else if (command.isBackend) {
      executeBackendCommand(command);
    } else {
      onClose();
    }
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
      if (step === "parameter") {
        // Go back to command list
        setStep("command");
        setSelectedCommand("");
        setAutoCompleteOptions([]);
        setQuery("");
        setSelectedIndex(0);
      } else {
        onClose();
      }
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

  const isParameterStep = step === "parameter";
  const isAutocompleteStep = isParameterStep && autoCompleteOptions.length > 0;
  const isTextStep = isParameterStep && autoCompleteOptions.length === 0;

  const inputPlaceholder = isAutocompleteStep
    ? `${selectedCommand} > Select option...`
    : isTextStep
    ? `${selectedCommand} > ${paramPlaceholder}`
    : "Type a command...";

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div
        className="command-palette"
        onClick={(event) => event.stopPropagation()}
      >
        {isParameterStep && (
          <div className="command-palette__step-indicator">
            <span className="command-palette__step-command">{selectedCommand}</span>
            <span className="command-palette__step-arrow">›</span>
            <span className="command-palette__step-hint">
              {isAutocompleteStep ? "Select option" : paramPlaceholder || "Enter value"}
            </span>
          </div>
        )}
        <input
          ref={inputRef}
          className="command-palette__input"
          placeholder={inputPlaceholder}
          value={query}
          onInput={(event) => setQuery((event.target as HTMLInputElement).value)}
          onKeyDown={handleKeyDown}
        />
        {copiedLabel && (
          <div className="command-palette__copied">
            Copied to clipboard: <strong>{copiedLabel}</strong>
          </div>
        )}
        {isTextStep ? (
          <div className="command-palette__text-hint">
            Press <kbd>Enter</kbd> to send{query.trim() ? `: ${selectedCommand} ${query.trim()}` : ""}
          </div>
        ) : (
          <ul ref={listRef} className="command-palette__results" role="listbox" aria-label="Commands">
            {isAutocompleteStep
              ? (results as string[]).map((option, index) => (
                <li
                  key={option}
                  className={`command-palette__row ${index === selectedIndex ? "is-active" : ""}`}
                  style={{ background: index === selectedIndex ? "var(--border)" : "transparent" }}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    const fullCommand = `${selectedCommand} ${option}`;
                    sendCommand(fullCommand);
                    if (onCommand) onCommand(fullCommand);
                    onClose();
                  }}
                >
                  <span className="command-palette__row-content">
                    <span className="command-palette__label">{option}</span>
                  </span>
                </li>
              ))
              : (results as MergedCommand[]).map((command, index) => {
                const badgeColor = CATEGORY_BADGE_COLORS[command.category] ?? "#9399b2";
                return (
                  <li
                    key={command.id}
                    className={`command-palette__row ${index === selectedIndex ? "is-active" : ""}`}
                    style={{ background: index === selectedIndex ? "var(--border)" : "transparent" }}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      if (command.handler) {
                        command.handler();
                        onClose();
                      } else if (command.isBackend) {
                        executeBackendCommand(command);
                      } else {
                        onClose();
                      }
                    }}
                  >
                    <span className="command-palette__row-content">
                      <span className="command-palette__label">{command.label}</span>
                      {command.description && (
                        <span className="command-palette__description">
                          {command.description}
                        </span>
                      )}
                    </span>
                    <span className="command-palette__row-meta">
                      <span
                        className="command-palette__badge"
                        style={{
                          background: `${badgeColor}22`,
                          color: badgeColor,
                          border: `1px solid ${badgeColor}44`,
                        }}
                      >
                        {command.category}
                      </span>
                      {command.keybinding && (
                        <span className="command-palette__keybinding command-palette__keybinding--static">
                          {command.keybinding}
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            {results.length === 0 && !isTextStep && (
              <li className="command-palette__empty">
                No matching commands
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
