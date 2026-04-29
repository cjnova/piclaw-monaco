---
id: leverage-tool-lifecycle-events-in-chat
title: Leverage tool lifecycle events in chat MessageList
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - chat
  - tools
  - upstream-sync
owner: 
---

# Leverage tool lifecycle events in chat MessageList

## Summary

Show richer tool lifecycle events in the Monaco MessageList. Upstream v2.1.0 added `tool_aborted` events and richer tool lifecycle data in SSE events. The chat should differentiate between aborted tools and completed tools (success or error), and display more detailed tool status during execution. This improves observability of long-running or cancelled tool calls.

## Acceptance Criteria

- [ ] Aborted tool calls are shown differently from completed tool calls in the MessageList (distinct visual treatment, e.g., different icon, color, or label).
- [ ] Tool execution status is visible in real-time during tool execution (not just on completion).
- [ ] `tool_aborted` event causes the tool call bubble/card to update to an "Aborted" state immediately.
- [ ] Completed tools (success) retain their existing visual treatment.
- [ ] Tool errors are visually distinct from both aborted and successful tools.
- [ ] Richer lifecycle data (tool name, duration, partial output) is shown where available.
- [ ] Existing tool call rendering is not regressed for non-aborted tools.

## Implementation Paths

### Path A — Event-driven state machine per tool call
- Track each tool call's state: `pending → running → completed | aborted | error`.
- Subscribe to `tool_started`, `tool_completed`, `tool_aborted`, and `tool_error` SSE events.
- Update the tool call card/bubble in the MessageList based on the current state.
- Use distinct icons: ✓ completed, ✗ aborted, ⚠ error, ⟳ running.

### Path B — Enriched tool call card component
- Refactor the existing tool call card into a richer component with state prop.
- Pass lifecycle events from the SSE stream through the message handler to the card.
- Card renders different UI for each state without duplicating tool call display logic.

### Path C — Tooltip / detail popover
- Keep the existing compact tool call row.
- Add a detail popover on hover/click showing full lifecycle data: timestamps, duration, abort reason, partial output.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] State-machine / invariant test
  - [x] Interaction scenario test
  - [x] Pane / viewer contract test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- Browser smoke: existing tool calls still render correctly
- Browser smoke: aborted tool call shows "Aborted" state

### New regression coverage to add
- [ ] Tool call card renders correct state for: pending, running, completed, aborted, error
- [ ] `tool_aborted` SSE event updates card to aborted state without full re-render
- [ ] Existing completed tool call rendering unchanged
- [ ] Tool error state visually distinct from aborted state
- [ ] MessageList performance unaffected by additional event subscriptions

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
- `tool_aborted` SSE event and richer lifecycle data are new in v2.1.0.
- Prior Monaco UI only handled `tool_completed` and `tool_error` states.

## Notes

- Do not change the visual treatment of non-aborted tools — only add the new aborted state.
- Aborted tools should not be treated as errors; they are a neutral "cancelled" state.
- If `tool_aborted` arrives before `tool_started` (race condition), handle gracefully.

## Links

- `runtime/web/src/components/message-list.ts`
- `runtime/src/channels/web/agent/agent-message-handler.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
