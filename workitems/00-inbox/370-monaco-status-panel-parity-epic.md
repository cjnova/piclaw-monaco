---
id: 370-monaco-status-panel-parity-epic
title: "epic: Monaco status panel parity with upstream classic UI"
status: inbox
priority: high
created: 2026-05-14
updated: 2026-05-14
estimate: XL
risk: medium
tags:
  - work-item
  - kanban
  - area:web
  - enhancement
  - epic
owner: pi
---

# epic: Monaco status panel parity with upstream classic UI

## Summary

The Monaco frontend's `AgentStatusPanel` component has significant gaps compared to the upstream classic `status.ts` implementation. Key areas include tool call panel enrichment, tool output improvements, thought/draft rendering quality, intent/status indicator fidelity, extension panels, series charts, and the pending-request approval modal. This epic tracks all parity work as a structured set of focused sub-issues.

Full gap analysis: `/workspace/tmp/ui-status-comparison.md`

## Gap Summary Table

| # | Area | Parity | Priority | Sub-issue |
|---|---|---|---|---|
| 1 | Tool call panels (running) | ⚠️ Partial | medium | #371 |
| 2 | Tool output copy + truncation | ⚠️ Partial | medium | #372 |
| 3 | Thought/Draft panel improvements | ⚠️ Partial | medium | #373 |
| 4 | Intent/status indicator improvements | ⚠️ Partial | medium | #374 |
| 5 | Extension panels support | ❌ Missing | low | #375 |
| 6 | Series charts for autoresearch | ❌ Missing | low | #376 |
| 7 | Pending request approval modal | ❌ Missing | high | #377 |

## Sub-issues

- [ ] #371 — Tool call panels improvements (`AgentStatusPanel.tsx`)
- [ ] #372 — Tool output copy button + truncation (`MessageItem.tsx`, `AgentStatusPanel.tsx`)
- [ ] #373 — Thought/Draft panel improvements (`AgentStatusPanel.tsx`)
- [ ] #374 — Intent/status indicator improvements (`AgentStatusPanel.tsx`, CSS)
- [ ] #375 — Extension panels support (`AgentStatusPanel.tsx`, new CSS) — depends on #374
- [ ] #376 — Series charts for autoresearch (new component, CSS) — depends on #375
- [ ] #377 — Pending request approval modal (new component or `AgentStatusPanel.tsx`)

## Acceptance Criteria

- [ ] All 7 sub-issues created with full AC checklists, file refs, and labels
- [ ] Each sub-issue independently completable (no hidden cross-dependencies beyond those listed)
- [ ] Epic remains the canonical tracking point; all sub-issues link back to #370
- [ ] When all sub-issues reach `done`, this epic is closed

## Implementation Paths

### Path A — Incremental sub-issue delivery (recommended)
Execute sub-issues in priority order: #377 (security), then #373/#374/#371/#372 (medium), then #375/#376 (low).
Each sub-issue is self-contained; merge individually.

### Path B — Wave delivery
Group by effort: Wave 1 = #373+#374+#371, Wave 2 = #372+#377, Wave 3 = #375+#376.

## Recommended Path

Path A — delivers the security-relevant approval modal first, then improves existing panels incrementally.

## Test Plan

- [ ] Each sub-issue carries its own test plan; this epic has no direct code changes
- [ ] Integration smoke test: `AgentStatusPanel` renders without regression after all sub-issues land

## Definition of Done

- [ ] All 7 sub-issues in `50-done/`
- [ ] `AgentStatusPanel.tsx` passes typecheck (`bun run typecheck`)
- [ ] No visual regression on existing tool call, thought, and draft panels
- [ ] Epic ticket moved to `50-done/`

## Updates

### 2026-05-14
- Created as epic tracking issue for Monaco status panel parity with upstream classic UI.
- Gap analysis sourced from `/workspace/tmp/ui-status-comparison.md`.
- 7 sub-issues created: #371–#377.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- Classic upstream source: `runtime/web/src/components/status.ts`
- Classic upstream CSS: `runtime/web/static/classic/css/agent.css`
- Monaco source: `runtime/web/frontend/src/components/AgentStatusPanel.tsx`
- Monaco CSS: `runtime/web/static/classic/css/shell.css` (sections 5210–5565)
- Status-dot logic: `runtime/web/src/ui/status-dot.js:16–35`

## Links

- `/workspace/tmp/ui-status-comparison.md` — full gap analysis
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx`
- `runtime/web/src/components/status.ts`
- `runtime/web/static/classic/css/agent.css`
