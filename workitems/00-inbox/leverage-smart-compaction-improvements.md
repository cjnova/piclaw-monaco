---
id: leverage-smart-compaction-improvements
title: Leverage smart compaction improvements in context ring
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - context
  - upstream-sync
owner: 
---

# Leverage smart compaction improvements in context ring

## Summary

The context ring in the Monaco status bar should reflect improved smart compaction behavior from upstream. Upstream v2.1.0 includes improvements to the context window compaction algorithm that result in more efficient context reduction after a `/compact` operation. Verify that the `/compact` flow still works correctly through the Monaco UI and that the context ring shows accurate post-compaction metrics without stale values.

## Acceptance Criteria

- [ ] `/compact` command triggered from the context ring or chat still executes correctly.
- [ ] Context percentage displayed in the ring updates correctly after compaction completes.
- [ ] No stale/cached context values are shown after a compaction event.
- [ ] The context ring correctly reflects the improved (lower) post-compaction usage from the new algorithm.
- [ ] Context ring sparkline history is reset or marked at the compaction point (not misrepresented as continuous growth).
- [ ] Works across multiple consecutive compactions in the same session.

## Implementation Paths

### Path A — SSE event-driven update
- Verify that the upstream now emits a `context_compacted` SSE event with updated context metrics.
- Subscribe to this event in the Monaco context ring component and update the display immediately on receipt.
- Clear or mark the sparkline at the compaction boundary.

### Path B — Polling fallback
- After a `/compact` call completes, force a refresh of the context metrics from `/api/context/usage`.
- Fallback for environments where SSE events may be missed.

### Path C — Optimistic UI update
- Immediately after the user triggers `/compact`, show an animated "compacting…" state in the ring.
- Replace with actual metrics once the server confirms compaction complete.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] State-machine / invariant test
  - [x] Interaction scenario test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- `runtime/test/channels/web/system-metrics.test.ts`
- `runtime/test/channels/web/ui-meters-commands.test.ts`
- Browser smoke: `/compact` reduces context ring percentage
- Browser smoke: context ring does not show stale value after compaction

### New regression coverage to add
- [ ] Context ring updates after `context_compacted` event
- [ ] No stale value persists after compaction
- [ ] Multiple sequential compactions handled correctly
- [ ] Sparkline boundary marker at compaction point

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-29
- Created as part of upstream v2.1.0 sync planning.
- Smart compaction algorithm improvements are in the upstream core; this ticket is about ensuring the Monaco UI correctly reflects the improved behavior.

## Notes

- Do not alter the compaction algorithm itself — that lives upstream.
- Focus on verifying and fixing the UI update path to reflect accurate post-compaction state.
- If the upstream doesn't emit a dedicated event, use a polling fallback after `/compact` completes.

## Links

- `runtime/web/src/components/system-meters-hud.ts`
- `runtime/web/src/components/status-bar.ts`
- `runtime/test/channels/web/ui-meters-commands.test.ts`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
