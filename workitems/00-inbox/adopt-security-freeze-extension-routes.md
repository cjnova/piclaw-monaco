---
id: adopt-security-freeze-extension-routes
title: Adopt security freeze for extension routes
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - security
  - upstream-sync
owner: 
---

# Adopt security freeze for extension routes

## Summary

Validate that the extension route registry freeze (security hardening from upstream) works correctly with our Monaco frontend. Upstream added a mechanism to freeze the extension route registry after startup to prevent runtime route injection attacks. Ensure no routes we depend on are affected by the freeze timing.

## Acceptance Criteria

- [ ] No 404 errors on any existing Monaco extension routes after upstream merge.
- [ ] Extension assets (JS, CSS, icons) load correctly in the browser.
- [ ] The route registry freeze does not block Monaco-specific extension registration.
- [ ] Security hardening is not weakened or bypassed by any Monaco customization.
- [ ] Error logs contain no route-freeze-related warnings during normal startup.

## Implementation Paths

### Path A — Validate and adjust registration order
- Audit all Monaco extension registrations to ensure they run before the freeze point.
- Check upstream freeze timing (likely triggered at a specific lifecycle hook).
- Move any late-registering Monaco extensions to run earlier in the startup sequence.

### Path B — Config-driven freeze window
- If upstream exposes a freeze delay config, verify it is set appropriately for our extension count.
- Document the setting in `docs/UPSTREAM-SYNC.md`.

### Path C — Whitelist / allowlist approach
- If upstream freeze uses an allowlist, add all Monaco routes to the allowlist during migration.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Routing matrix test
  - [x] Real-browser smoke test
  - [x] Interaction scenario test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- Browser: load Monaco, check Network tab for 404s on extension assets

### New regression coverage to add
- [ ] Route-freeze integration test: verify all Monaco routes respond 200 after freeze
- [ ] Startup-order test: extensions registered before freeze point

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
- Security hardening must not regress any existing Monaco extension routes.

## Notes

- Security freeze is a hardening measure — do not disable or circumvent it.
- If a route is missing post-freeze, fix registration order rather than bypassing the freeze.
- Cross-reference upstream CHANGELOG for the exact commit and rationale.

## Links

- `runtime/src/channels/web/extension-router.ts`
- `runtime/src/extensions/`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
