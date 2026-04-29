---
id: wire-fleet-batch-to-command-palette
title: Wire fleet_batch to command palette
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - feature
  - fleet
  - upstream-sync
owner: 
---

# Wire fleet_batch to command palette

## Summary

Expose the new `fleet_batch` tool (multi-workitem orchestration) through the command palette or a dedicated batch-run UI. The upstream `fleet_batch` tool allows spawning multiple agent tasks concurrently against a set of workitems. The Monaco UI should allow users to select workitems and batch-spawn agents, then observe progress across the batch.

## Acceptance Criteria

- [ ] "Run fleet batch" is accessible from the command palette or a dedicated UI surface.
- [ ] User can select one or more workitems to include in the batch.
- [ ] Batch is submitted to the upstream `fleet_batch` tool/endpoint.
- [ ] Progress of each batch agent is visible in the UI (status, running/done/error per item).
- [ ] Batch run does not block the main chat interface.
- [ ] Results or errors from each agent in the batch are surfaced to the user.

## Implementation Paths

### Path A — Command palette action
- Add "Fleet: Run batch on selected workitems" to the command palette.
- Open a modal/sheet to pick workitems from the current board.
- Submit via `fleet_batch` tool call in a new agent message.
- Show a progress card in the chat with per-item status updates.

### Path B — Workitem board batch-select UI
- Add multi-select checkboxes to the kanban board workitem cards.
- "Run batch" button appears when items are selected.
- Submits `fleet_batch` and shows a batch-progress panel.

### Path C — Dedicated Batch Run panel
- Add a "Batch Run" panel to the Monaco shell (similar to the terminal panel).
- Displays active and past batch runs with per-agent logs.
- Can be opened from the command palette or sidebar.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Interaction scenario test
  - [x] State-machine / invariant test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- Browser smoke: command palette opens, batch action present
- Browser smoke: batch progress visible after submission

### New regression coverage to add
- [ ] Command palette lists fleet batch action
- [ ] Workitem selector works (select/deselect, submit)
- [ ] Progress tracking updates per-agent status
- [ ] Main chat interface remains responsive during batch run

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
- `fleet_batch` is new in v2.1.0; this ticket tracks the Monaco UI wiring only.

## Notes

- The `fleet_batch` tool spawns sub-agents; the UI should not poll too aggressively.
- Consider a streaming/SSE channel for per-agent progress updates.
- Batch progress state should survive a page refresh if possible (persist to local state).

## Links

- `runtime/web/src/components/command-palette.ts`
- `runtime/src/tools/fleet_batch.ts`
- `workitems/`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
