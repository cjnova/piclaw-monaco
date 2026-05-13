import { describe, expect, test } from "bun:test";

import { buildWindowsInstallScript } from "../../../scripts/release/build-portable-artifact.ts";

describe("portable artifact Windows installer", () => {
  test("emits a PowerShell 5-compatible param block before executable statements", () => {
    const script = buildWindowsInstallScript("piclaw-2.3.4-windows-x64");
    const firstNonEmptyLine = script.split(/\r?\n/).find((line) => line.trim().length > 0);

    expect(firstNonEmptyLine).toBe("param(");
    expect(script.indexOf("$ErrorActionPreference = 'Stop'")).toBeGreaterThan(script.indexOf(")\r\n"));
  });

  test("writes cmd shims for piclaw and pi with interpreted CRLF escapes instead of literal backtick text", () => {
    const script = buildWindowsInstallScript("piclaw-2.3.4-windows-x64");

    expect(script).toContain("$PiclawLauncher = Join-Path $Current 'bin\\piclaw.cmd'");
    expect(script).toContain("$PiLauncher = Join-Path $Current 'bin\\pi.cmd'");
    expect(script).toContain('$PiclawShim = "@echo off`r`n`"$PiclawLauncher`" %*`r`n"');
    expect(script).toContain('$PiShim = "@echo off`r`n`"$PiLauncher`" %*`r`n"');
    expect(script).toContain("$PiclawShim | Set-Content -Encoding ASCII (Join-Path $BinDir 'piclaw.cmd')");
    expect(script).toContain("$PiShim | Set-Content -Encoding ASCII (Join-Path $BinDir 'pi.cmd')");
    expect(script).not.toContain("'@echo off`r`n");
  });
});
