#!/usr/bin/env bun
/**
 * Emit the HTML payload for a generated dashboard widget that hosts the
 * interactive settings-dialog fixture.
 *
 * Usage:
 *   bun runtime/scripts/settings-widget-fixture-html.ts [section]
 */

const section = encodeURIComponent(process.argv[2] || "general");

console.log(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Settings dialog fixture</title>
  <style>
    html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #0f172a; }
    iframe { width: 100%; height: 100vh; border: 0; display: block; background: #0f172a; }
  </style>
</head>
<body>
  <iframe src="/test/fixtures/settings-widget-fixture.html?section=${section}" title="Settings dialog fixture"></iframe>
</body>
</html>`);
