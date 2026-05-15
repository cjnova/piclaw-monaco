---
id: 374-intent-status-indicator-improvements
title: "feat: Intent/status indicator — dot/spinner matrix, queued dot, turn color, error icon"
status: inbox
priority: medium
created: 2026-05-14
updated: 2026-05-14
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - area:web
  - enhancement
  - parent:370
owner: pi
---

# feat: Intent/status indicator — dot/spinner matrix, queued dot, turn color, error icon

## Summary

The Monaco `AgentStatusPanel` always shows a generic spinner for any non-idle/non-done status. The upstream classic UI uses a decision matrix (`status-dot.js`) to choose between a **dot**, **spinner**, or **nothing** depending on the current status kind. Additionally:

- A **queued dot** class exists upstream (pulsing) for queued/waiting states
- **Turn color** is applied to status dots (color cycles per turn)
- An **error icon (⚠)** appears on the status row when the agent is in an error state — not just the custom watchdog pill

Reference: `status-dot.js:16–35`, `agent.css:28–59` (dots), `agent.css:121–146` (spinner), `status.ts:806–842` (status row render).

## Acceptance Criteria

- [ ] A `resolveStatusIndicator(status: string): 'dot' | 'spinner' | 'none'` helper is implemented that mirrors `status-dot.js:16–35`:
  - `pending_request`, `intent`, and fallback → `'dot'`
  - `tool_metadata`, `tool_call`, `tool_status`, `thinking`, `waiting` → `'spinner'`
  - `error`, `last_activity` → `'none'`
- [ ] The status row renders a **dot** or **spinner** element based on the helper's return value (not always spinner)
- [ ] A **queued dot** CSS class (`.agent-status-dot--queued`) is applied when the agent is in a queued/waiting state, producing a pulsing animation (mirrors `agent.css:28–59`)
- [ ] Status dots use the **current turn color** rather than a fixed color; turn index is available from existing context
- [ ] When status is `error`, a **⚠ icon** appears in the status row (replaces the dot/spinner, not an additional element)
- [ ] Existing recovery/watchdog pills (`AgentStatusPanel.tsx:168–196`) are not removed — the new ⚠ error icon supplements them on the status row
- [ ] CSS for new dot classes and error icon is added (to `shell.css` or a co-located `.module.css`)
- [ ] No regression on existing spinner, recovery pill, or watchdog pill rendering
- [ ] TypeScript type check passes (`bun run typecheck`)

## Implementation Paths

### Path A — Helper function + CSS classes (recommended)
1. Add `resolveStatusIndicator(status)` to `AgentStatusPanel.tsx` or a co-located `status-indicator.ts`.
2. Replace the unconditional spinner JSX in the status row with a switch on the helper's result.
3. Add queued dot and turn-color CSS variables to `shell.css`.
4. Add `⚠` span for error status.

**Pros:** Small, isolated change; easy to test  
**Cons:** CSS lives in `shell.css` (large file) — consider co-located module CSS instead

### Path B — Port `status-dot.js` as TypeScript module
Convert `status-dot.js` to `runtime/web/frontend/src/utils/status-dot.ts` and import it.

**Pros:** Single source of truth; importable in tests  
**Cons:** Slightly larger diff; requires updating `status-dot.js` callers in classic UI

## Recommended Path

Path A for minimal scope; Path B is a good follow-up cleanup.

## Test Plan

- [ ] Unit: `resolveStatusIndicator` returns correct indicator for all known status strings
  - `'tool_call'` → `'spinner'`
  - `'intent'` → `'dot'`
  - `'error'` → `'none'`
  - unknown string → `'dot'` (fallback)
- [ ] Visual: trigger each major status type; verify correct dot/spinner/none and error ⚠
- [ ] Visual: queued state shows pulsing dot
- [ ] Regression: recovery pill and watchdog pill still render on their respective status codes
- [ ] `bun run typecheck` — zero new errors

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Turn color not available in status row context | Low | Pass `turnIndex` prop or derive from existing agent state |
| CSS specificity conflict with existing spinner classes | Low | Scope new classes under `.agent-status-panel__status-row` |
| New error icon overlaps existing watchdog emoji pill | Low | Error icon is on the status row; watchdog pill is a separate card |

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
- Scope sourced from gap analysis `/workspace/tmp/ui-status-comparison.md` §5.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- No upstream dependencies; can be started immediately.
- This ticket is a prerequisite for #375 (extension panels), which uses the same dot/spinner infrastructure.
- The `status-dot.js` decision matrix is the authoritative source; do not deviate from its logic.

## Links

- `runtime/web/src/ui/status-dot.js:16–35` — upstream dot/spinner decision matrix
- `runtime/web/src/components/status.ts:806–842` — status row render
- `runtime/web/static/classic/css/agent.css:28–59` — dot CSS
- `runtime/web/static/classic/css/agent.css:121–146` — spinner CSS
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:298–306` — current generic spinner
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:168–196` — recovery/watchdog pills
- `runtime/web/static/classic/css/shell.css:5218–5253` — Monaco spinner CSS
- Parent epic: `workitems/00-inbox/370-monaco-status-panel-parity-epic.md`
