/**
 * web/ui-meters-commands.ts – Local handling for /meters HUD controls.
 */

export type UiMetersPayload =
  | { mode: "set"; enabled: boolean }
  | { mode: "collapse"; collapsed: boolean }
  | { mode: "toggle" };

export interface UiMetersCommandResult {
  status: "success" | "error";
  message: string;
  payload?: UiMetersPayload;
}

function normalizeArg(input: string): string {
  return String(input || "").trim().toLowerCase();
}

export function handleUiMetersCommand(rawText: string): UiMetersCommandResult | null {
  const trimmed = rawText.trim();
  if (!trimmed.startsWith("/")) return null;
  const [command, ...rest] = trimmed.split(/\s+/);
  const args = normalizeArg(rest.join(" "));
  const commandLower = command.toLowerCase();

  if (commandLower !== "/meters") return null;

  if (!args) {
    return {
      status: "success",
      message: "CPU/RAM meters toggled.",
      payload: { mode: "toggle" },
    };
  }

  if (["on", "enable", "enabled", "show"].includes(args)) {
    return {
      status: "success",
      message: "CPU/RAM meters enabled.",
      payload: { mode: "set", enabled: true },
    };
  }

  if (["off", "disable", "disabled", "hide"].includes(args)) {
    return {
      status: "success",
      message: "CPU/RAM meters hidden.",
      payload: { mode: "set", enabled: false },
    };
  }

  if (["collapse", "collapsed", "min", "minimize"].includes(args)) {
    return {
      status: "success",
      message: "CPU/RAM meters collapsed.",
      payload: { mode: "collapse", collapsed: true },
    };
  }

  if (["expand", "expanded", "open", "restore"].includes(args)) {
    return {
      status: "success",
      message: "CPU/RAM meters expanded.",
      payload: { mode: "collapse", collapsed: false },
    };
  }

  if (args === "toggle") {
    return {
      status: "success",
      message: "CPU/RAM meters toggled.",
      payload: { mode: "toggle" },
    };
  }

  return {
    status: "error",
    message: `Unknown /meters option: ${args}. Use /meters on, /meters off, /meters toggle, /meters collapse, or /meters expand.`,
  };
}
