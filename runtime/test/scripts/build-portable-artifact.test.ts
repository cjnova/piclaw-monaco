import { describe, expect, test } from "bun:test";

import { buildWindowsInstallScript } from "../../../scripts/release/build-portable-artifact.ts";

describe("portable artifact Windows installer", () => {
  test("emits a PowerShell 5-compatible param block before executable statements", () => {
    const script = buildWindowsInstallScript("piclaw-2.3.4-windows-x64");
    const firstNonEmptyLine = script.split(/\r?\n/).find((line) => line.trim().length > 0);

    expect(firstNonEmptyLine).toBe("param(");
    expect(script.indexOf("$ErrorActionPreference = 'Stop'")).toBeGreaterThan(script.indexOf(")\r\n"));
  });

  test("writes the cmd shim with interpreted CRLF escapes instead of literal backtick text", () => {
    const script = buildWindowsInstallScript("piclaw-2.3.4-windows-x64");

    expect(script).toContain("$Launcher = Join-Path $Current 'bin\\piclaw.cmd'");
    expect(script).toContain('$Shim = "@echo off`r`n`"$Launcher`" %*`r`n"');
    expect(script).not.toContain("'@echo off`r`n");
  });
});
