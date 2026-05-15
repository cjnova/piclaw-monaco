---
id: 371-tool-call-panels-improvements
title: "feat: Tool call panels improvements — branch hint, arg parsing, status pills, retry countdown"
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

# feat: Tool call panels improvements

## Summary

The Monaco `AgentStatusPanel` tool-call card is missing several enrichments present in the upstream classic UI. After implementation audit, the following gaps remain:

- **Tool argument parsing** — bash command extraction for human-readable titles (we currently show `detail.title` as-is)
- **Per-tool kind/status pills** — visual distinction by tool type (bash, file, search, etc.); we only have recovery pills, not per-tool ones
- **Retry countdown** — we show a "retrying" pill but no live countdown timer

The following items are **partially implemented**:
- **Git branch hint** — we receive and render `status_hints` SVG icons, but do not parse git context from tool args as upstream does (`status.ts:287–333`)
- **Retry state** — recovery pills are rendered, but no live countdown is derived from retry timestamps

The **activity-age clock** was confirmed already implemented via `elapsed.tools` timer and is **out of scope**.

All remaining changes are in `AgentStatusPanel.tsx`; reference logic in `status.ts:127–340`.

## Acceptance Criteria

- [ ] Tool argument parsing extracts the primary bash command from `tool_args` and shows a shortened, human-readable title instead of raw `detail.title` where applicable
- [ ] Per-tool kind pills or icons visually distinguish tool types (e.g., bash, file, search) beyond the current spinner/checkmark and recovery pills
- [ ] Retry countdown appears in the tool row when the tool is in a retry state; it counts down live and disappears when the retry fires
- [ ] Git branch hint is parsed from tool args (mirroring `status.ts:287–333`) and displayed next to the tool title when available, supplementing the existing `status_hints` SVG icon rendering
- [ ] No regression on existing tool card rendering (spinner, checkmark, sanitized SVG hints, header elapsed timer, recovery pills)
- [ ] TypeScript type check passes (`bun run typecheck`)

## Implementation Paths

### Path A — Direct port from `status.ts` (recommended)
1. Extract git-branch detection helper (inspect `tool_args` JSON for repo/branch keys; mirror `status.ts:287–333`).
2. Parse tool args for bash command extraction; add a `resolveTitleFromArgs(tool)` helper.
3. Add `kind` to the `ToolCall` state shape; map `tool_name` prefixes to icon/pill labels.
4. Add `retryCountdown` field to `ToolCall`; derive from `tool_status` events carrying retry timestamps; tick via `setInterval`.

**Pros:** Faithful to upstream; reviewers can diff against `status.ts`  
**Cons:** Requires careful typing of untyped `tool_args` JSON

### Path B — Minimal shim with feature flags
Add each feature behind a `FEATURE_*` boolean constant so they can be toggled off without reverting code.

## Recommended Path

Path A — direct port gives the most parity value and is straightforward to test.

## Test Plan

- [ ] Unit: add tests in `runtime/web/frontend/src/components/AgentStatusPanel.test.tsx` (create if absent)
  - `resolveTitleFromArgs` returns bash command string for bash tool args
  - `resolveTitleFromArgs` returns tool name as fallback when args absent
  - Git branch extraction returns `null` when no repo key in args
- [ ] Visual: run Monaco dev server; trigger a bash tool call; verify branch hint, kind icon/pill appear
- [ ] Visual: trigger a retry; verify countdown ticks and disappears on retry fire
- [ ] Regression: existing tool call cards (spinner, checkmark, SVG hints, elapsed timer, recovery pills) render unchanged
- [ ] `bun run typecheck` — zero new errors

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| `tool_args` shape varies by tool | Medium — may miss branch hints or bash commands | Defensive JSON parsing with try/catch |
| Retry timestamp not always present in `tool_status` events | Medium — countdown may not always fire | Fall back to static "retrying" pill if timestamp absent |
| Clock timer leak on unmount (retry countdown) | Low — memory leak | Clear interval in `useEffect` cleanup |
| SVG hint sanitization conflict with new git branch text | Low | Render branch hint in separate element, not sanitized HTML |

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
- Scope sourced from gap analysis `/workspace/tmp/ui-status-comparison.md` §1.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-05-14 (scope revision)
- Removed **activity-age clock** from scope — confirmed already implemented via `elapsed.tools` timer.
- **Git branch hint** downgraded to partial: SVG `status_hints` icons render, but arg-based git context parsing (upstream `status.ts:287–333`) is not yet done.
- **Retry state** downgraded to partial: recovery pills exist, live countdown does not.
- Remaining confirmed gaps: tool arg parsing, per-tool kind pills, retry countdown.

## Notes

- No upstream dependencies; can be started immediately.
- `tool_args` is currently stored as a raw string in `ToolCall`; may need to be parsed to `unknown` first.
- Retry countdown should derive its tick target from a timestamp in the `tool_status` event payload; if absent, degrade gracefully to static pill.
- Git branch parsing supplements (does not replace) the existing `status_hints` SVG rendering path.

## Links

- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:141–161` — tool call ingestion
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx:308–349` — tool card rendering
- `runtime/web/src/components/status.ts:127–130` — resolveAgentStatusContent
- `runtime/web/src/components/status.ts:287–340` — git context + running indicator
- `runtime/web/src/ui/status-dot.js:16–35` — dot/spinner decision matrix
- Parent epic: `workitems/00-inbox/370-monaco-status-panel-parity-epic.md`
