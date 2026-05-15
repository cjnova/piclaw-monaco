---
id: 372-tool-output-copy-truncation
title: "feat: Tool output copy button and tail-direction line truncation"
status: inbox
priority: medium
created: 2026-05-14
updated: 2026-05-14
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - area:web
  - enhancement
  - parent:370
owner: pi
---

# feat: Tool output copy button and tail-direction line truncation

## Summary

Completed tool output panels in `ToolCallBlock` (`MessageItem.tsx`) lack:
1. **Copy button** on tool output — currently only code-fence blocks have copy buttons; tool result `<pre>` bodies do not
2. **Tail-direction line truncation** — collapsed view truncates from the end rather than showing a fixed char limit; long results show only the final N lines when collapsed
3. **Measured/estimated overflow detection** — detect when a result is large and show a disclosure metadata label (e.g., "247 lines, showing last 20")

Reference: `status.ts:11–17` (copy SVG), `agent.css:718–747` (copy styles); upstream truncation logic is absent from this checkout but the Monaco `shell.css:2400–2470` scroll approach can be enriched.

## Acceptance Criteria

- [ ] Each `ToolCallBlock` result `<pre>` has a **copy button** (clipboard icon) in its top-right corner that copies the full result text to the clipboard
- [ ] Copy button shows a transient "Copied!" confirmation (min 1.5 s) then reverts to the clipboard icon
- [ ] When a collapsed `ToolCallBlock` result exceeds **20 lines**, only the last 20 lines are shown (tail truncation), with an "N more lines — click to expand" label above the truncated content
- [ ] When expanded, the full output is shown with no truncation
- [ ] Overflow detection uses measured line count (split on `\n`); no DOM measurement required
- [ ] Input `<pre>` (tool arguments) is not truncated — only the result body
- [ ] No regression on existing `ToolCallBlock` rendering (disclosure triangle, tool name, `done` badge, JSON bodies)
- [ ] TypeScript type check passes (`bun run typecheck`)

## Implementation Paths

### Path A — Inline enrichment of `ToolCallBlock` (recommended)
1. Add `resultLines` derived state = `result.split('\n')` inside `ToolCallBlock`.
2. Render tail-truncated slice when collapsed and `resultLines.length > 20`.
3. Add a `<button className="tool-output-copy">` absolutely positioned in the result `<pre>` wrapper.
4. Wire `navigator.clipboard.writeText(result)` on click; manage `copied` boolean state with `setTimeout` reset.
5. Add CSS for copy button and truncation label (can reuse `.code-copy-btn` pattern from `code-highlighting.ts`).

**Pros:** Self-contained in one component; easy to test  
**Cons:** Duplicates copy-button pattern from code blocks (acceptable; can refactor later)

### Path B — Shared `CopyableBlock` component
Extract a `CopyableBlock` wrapper used by both `ToolCallBlock` result and code-fence copy buttons.

**Pros:** DRY  
**Cons:** Larger scope; touches code-highlighting paths

## Recommended Path

Path A — minimal scope; Path B can be a follow-up refactor ticket.

## Test Plan

- [ ] Unit: add/extend `ToolCallBlock` tests
  - Result with 25 lines → collapsed view shows last 20 + "5 more lines" label
  - Result with 10 lines → no truncation label, full content shown
  - Copy button click → `navigator.clipboard.writeText` called with full result text
- [ ] Visual: open chat with a completed bash tool call; verify copy button appears and truncation works
- [ ] Regression: tool name, done badge, input JSON, disclosure triangle all render correctly
- [ ] `bun run typecheck` — zero new errors

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| `navigator.clipboard` unavailable (non-HTTPS) | Low — copy fails silently | Fallback to `document.execCommand('copy')` or show error toast |
| Very large results (MB) cause slow render | Low — only last 20 lines shown | Slice before render; full text kept in state for copy |
| CSS z-index conflicts for copy button | Low | Scope CSS to `.tool-output-copy` inside `.tool-call-block` |

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally (`bun run test`)
- [ ] Type check clean (`bun run typecheck`)
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed (no config changes required)
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Quality score ≥ 9 recorded in final update
- [ ] Ticket front matter updated (`status`, `updated`, `completed`)
- [ ] Ticket moved to `50-done/`

## Updates

### 2026-05-14
- Created as sub-issue of epic #370 (Monaco status panel parity).
- Scope sourced from gap analysis `/workspace/tmp/ui-status-comparison.md` §2.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- No upstream dependencies; can be started in parallel with #371.
- The 20-line threshold is a reasonable default; make it a named constant `TOOL_OUTPUT_TAIL_LINES = 20`.
- Classic upstream copy SVG is defined at `status.ts:11–17`; can use the same SVG path or substitute a Heroicon.

## Links

- `runtime/web/frontend/src/components/message-list/MessageItem.tsx:16–64` — ToolCallBlock
- `runtime/web/frontend/src/components/message-list/MessageItem.tsx:281–288` — tool pairs render site
- `runtime/web/static/classic/css/shell.css:2400–2470` — tool block CSS
- `runtime/web/frontend/src/utils/code-highlighting.ts:369–381` — existing copy button pattern
- `runtime/web/src/components/status.ts:11–17` — classic copy SVG
- `runtime/web/static/classic/css/agent.css:718–747` — classic copy styles
- Parent epic: `workitems/00-inbox/370-monaco-status-panel-parity-epic.md`
