---
id: wire-provider-billing-tracking-to-status
title: Wire provider billing tracking to status bar
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - feature
  - billing
  - upstream-sync
owner: 
---

# Wire provider billing tracking to status bar

## Summary

Show multi-provider billing and usage tracking in the Monaco status bar or a settings panel. Upstream added provider usage metrics that track costs across providers (tokens used, estimated cost per session, per-provider breakdown). The Monaco frontend should surface current session cost in the status bar and provide a per-provider breakdown in a settings or billing panel.

## Acceptance Criteria

- [ ] Current session cost (or token count) is visible in the status bar or HUD without requiring navigation.
- [ ] Per-provider cost/usage breakdown is accessible (settings panel, tooltip, or popover).
- [ ] Metrics update in near-real-time as the session progresses.
- [ ] Zero-cost or no-data state is handled gracefully (e.g., hides the indicator or shows "—").
- [ ] Billing display does not degrade performance of the main chat interface.
- [ ] Works correctly when multiple providers are active in the same session.

## Implementation Paths

### Path A — Status bar cost pill
- Add a cost indicator to the Monaco status bar (right side).
- Fetch from upstream `/api/billing/session` or equivalent SSE event.
- Show total session cost as a compact currency string (e.g., `$0.003`).
- Click to open a popover with per-provider breakdown.

### Path B — HUD extension
- Extend the existing system meters HUD to include a "Cost" row.
- Update on each model response event.
- Sparkline showing cost accumulation over the session.

### Path C — Settings billing panel
- Add a "Usage & Billing" tab to the Monaco Settings panel.
- Show provider-by-provider breakdown with token counts and cost estimates.
- Include a session reset button to clear accumulated metrics.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Interaction scenario test
  - [x] State-machine / invariant test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- `runtime/test/channels/web/system-metrics.test.ts`
- Browser smoke: status bar shows cost indicator during active session

### New regression coverage to add
- [ ] Billing indicator renders correctly with single and multiple providers
- [ ] Zero-cost graceful state (no indicator shown or "—" fallback)
- [ ] Popover/breakdown panel shows correct per-provider values
- [ ] Cost updates after each model response

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
- Provider billing tracking is new in v2.1.0; no prior UI surface in Monaco.

## Notes

- Do not show exact dollar amounts if pricing data is unavailable for a provider — show token counts instead.
- Keep the status bar indicator compact: cost pill or token count, not a full table.
- Billing data is best-effort; the UI should not block or error if the billing endpoint is unavailable.

## Links

- `runtime/web/src/components/system-meters-hud.ts`
- `runtime/web/src/components/status-bar.ts`
- `runtime/src/channels/web/agent/system-metrics.ts`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
