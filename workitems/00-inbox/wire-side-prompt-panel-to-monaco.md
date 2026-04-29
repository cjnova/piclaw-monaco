---
id: wire-side-prompt-panel-to-monaco
title: Wire side-prompt panel to Monaco
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - feature
  - upstream-sync
owner: 
---

# Wire side-prompt panel to Monaco

## Summary

Add a side-prompt panel to Monaco that uses the new upstream side-prompt streaming API. Side-prompts allow parallel model queries without affecting the main chat context — useful for quick lookups, comparisons, or exploratory queries while a main chat session is active. The panel should support streaming responses and be visually distinct from the main chat.

## Acceptance Criteria

- [ ] A side-prompt panel can be opened from the Monaco UI (e.g., via command palette, keyboard shortcut, or toolbar button).
- [ ] User can type a prompt and submit it to the side-prompt endpoint.
- [ ] Streaming response is displayed in the side-prompt panel with live token rendering.
- [ ] Submitting a side-prompt does not affect the main chat context or history.
- [ ] The side-prompt panel can be closed/cleared without affecting the main chat.
- [ ] Multiple sequential side-prompts can be sent in the same panel session.

## Implementation Paths

### Path A — Slide-in drawer panel
- Add a slide-in side drawer component to the Monaco shell.
- Wire to upstream `/api/side-prompt` SSE streaming endpoint.
- Render streaming tokens with the same token renderer used in the main chat.
- Open via keyboard shortcut (e.g., `Ctrl+Shift+P` / `Cmd+Shift+P`) or toolbar icon.

### Path B — Split-pane view
- Add a vertical split to the Monaco editor area.
- Right pane hosts the side-prompt input and response.
- Allows side-by-side comparison with main chat.

### Path C — Command palette integration
- Expose "Open side prompt" as a command palette action.
- Panel opens as a floating overlay anchored to the right side.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Interaction scenario test
  - [x] State-machine / invariant test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- Browser smoke: main chat unaffected after side-prompt use
- Browser smoke: side-prompt streams response correctly

### New regression coverage to add
- [ ] Side-prompt panel opens and closes without affecting main chat state
- [ ] Streaming token rendering works in side-prompt panel
- [ ] Side-prompt context isolation test: main chat history unchanged after side-prompt

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
- Side-prompt API is new in v2.1.0; no prior Monaco UI surface existed.

## Notes

- Ensure the side-prompt panel does not share a message context with the main chat channel.
- Consider mobile layout: side-prompt may need to be a bottom sheet on narrow viewports.
- The token renderer should be reused from the main chat, not duplicated.

## Links

- `runtime/web/src/components/message-list.ts`
- `runtime/web/src/components/compose-box.ts`
- `runtime/src/channels/web/agent/`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
