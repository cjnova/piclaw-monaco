---
id: 373-thought-draft-panel-improvements
title: "feat: Thought/Draft panel — markdown rendering, internal tag stripping, line truncation, Escape collapse, close button"
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

# feat: Thought/Draft panel — markdown rendering, internal tag stripping, line truncation, Escape collapse, close button

## Summary

The Monaco `AgentPanel` component (used for both Thoughts and Draft in `AgentStatusPanel.tsx`) renders content as plain `textContent` with a 200-character character limit. The upstream classic UI renders thought/draft panels with:

- **Markdown rendering** (not plain text)
- **`<internal>` tag stripping** via `stripInternalTags` before display
- **Line-based truncation** (8 lines collapsed, not 200 chars)
- **Omitted line count label** ("N more lines")
- **Escape key to collapse** an expanded panel
- **Close button** to dismiss the panel

Reference: `status.ts:157–159` (constants), `status.ts:178` (`stripInternalTags`), `status.ts:379–424` (`renderThinkingPanel`).

## Acceptance Criteria

- [ ] Thought and Draft panel content is rendered as **Markdown** (same renderer used elsewhere in the UI, e.g., `marked` or the existing markdown utility)
- [ ] Before rendering, `<internal>…</internal>` tags (and their content) are stripped from thought/draft text
- [ ] Collapsed state shows at most **8 lines** of rendered content (constant `THOUGHT_MAX_LINES = 8`)
- [ ] When content exceeds 8 lines, a "N more lines" label is shown below the truncated preview (N = total lines − 8)
- [ ] Clicking "more…" / "show less" still expands/collapses as today
- [ ] Pressing **Escape** while a panel is expanded collapses it
- [ ] A **close button (×)** in the panel header allows dismissing the panel entirely for the current turn
- [ ] Dismissed panels do not reappear until the next agent turn starts
- [ ] Turn-color dot matches the current turn color (not a fixed purple/orange) — align with upstream `agent.css:331–335`
- [ ] No regression on elapsed-timer display, panel expansion persistence across sessions, or other existing `AgentPanel` behavior
- [ ] TypeScript type check passes (`bun run typecheck`)

## Implementation Paths

### Path A — Enhance `AgentPanel` component (recommended)
1. Add `stripInternalTags(text: string): string` helper (strip `/<internal>[\s\S]*?<\/internal>/g`).
2. Replace `COLLAPSED_MAX_CHARS = 200` with `COLLAPSED_MAX_LINES = 8` line-based logic.
3. Wire `marked.parse()` (or existing markdown util) on the displayed content; sanitize output.
4. Add `dismissed` boolean state per panel key; render `null` when dismissed.
5. Add `keydown` listener for `Escape` → collapse; clean up on unmount.
6. Add `<button className="agent-panel__close">×</button>` in panel header.
7. Update CSS for close button and omitted-line label.

**Pros:** Contained within `AgentStatusPanel.tsx`; no new component  
**Cons:** `AgentPanel` grows in complexity; consider extracting if >300 LOC

### Path B — New `ThinkingPanel` component
Extract upstream-style `ThinkingPanel` from `AgentPanel`; keep `AgentPanel` for non-thought use cases.

## Recommended Path

Path A for now; Path B as a follow-up refactor if complexity grows.

## Test Plan

- [ ] Unit: add/extend `AgentPanel` or `AgentStatusPanel` tests
  - `stripInternalTags('<internal>secret</internal>visible')` → `'visible'`
  - Content with 12 lines collapsed → shows 8 lines + "4 more lines" label
  - Content with 5 lines → no omitted-line label
  - Markdown rendering: `**bold**` → `<strong>bold</strong>` in output
  - Escape key on expanded panel → panel collapses
  - Close button click → panel dismissed; does not reappear until turn change
- [ ] Visual: trigger an agent thought; verify markdown renders, internal tags hidden, 8-line limit
- [ ] Regression: Draft panel behavior matches Thought panel; elapsed timer unaffected
- [ ] `bun run typecheck` — zero new errors

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Markdown XSS via thought content | Medium | Use DOMPurify or existing sanitizer before `innerHTML`; do not skip sanitization |
| `<internal>` stripping too aggressive (nested tags) | Low | Use non-greedy regex; add unit test for nested case |
| Line-count differs between raw text and rendered HTML | Low | Count lines on raw text before markdown render |
| Escape listener conflicts with other panels | Low | Check `document.activeElement` or use React `onKeyDown` on panel element |

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
- Scope sourced from gap analysis `/workspace/tmp/ui-status-comparison.md` §3–§4.
- Covers both Thought and Draft panels (same code path).
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- No upstream dependencies; can be started immediately.
- `THOUGHT_MAX_LINES = 8` per `status.ts:157–159`; the task brief says 9 but the local upstream file says 8 — use 8.
- Expansion persistence across sessions is an existing feature; the new "dismissed" state should be turn-scoped only (in-memory, not persisted to localStorage).
- Draft panel shares the same `AgentPanel` component; both panels benefit from this ticket.

## Links

- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:6–24` — AgentPanel constants + truncation
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:388–397` — Thoughts panel
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:399–408` — Draft panel
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:422–466` — AgentPanel render
- `runtime/web/src/components/status.ts:157–159` — THOUGHT_MAX_LINES / DRAFT_MAX_LINES
- `runtime/web/src/components/status.ts:178` — stripInternalTags
- `runtime/web/src/components/status.ts:379–424` — renderThinkingPanel
- `runtime/web/static/classic/css/agent.css:300–424` — upstream thinking panel CSS
- `runtime/web/static/classic/css/shell.css:5494–5502` — Monaco draft dot CSS
- Parent epic: `workitems/00-inbox/370-monaco-status-panel-parity-epic.md`
