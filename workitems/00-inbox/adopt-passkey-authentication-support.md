---
id: adopt-passkey-authentication-support
title: Adopt passkey authentication support
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - security
  - auth
  - web
  - upstream-sync
owner: 
---

# Adopt passkey authentication support

## Summary

Wire WebAuthn passkey enrollment and management into the Monaco Settings panel. Upstream added a passkey registration endpoint and a full WebAuthn auth flow. The Monaco frontend needs to expose enrollment from Settings and support login via passkey, while leaving existing TOTP authentication completely unaffected.

## Acceptance Criteria

- [ ] Passkey enrollment is accessible from the Monaco Settings panel (under an "Authentication" or "Security" section).
- [ ] Enrollment flow: challenge → user gesture → credential stored on server — works end-to-end.
- [ ] Login via passkey works from the login screen (in addition to existing password/TOTP flow).
- [ ] Existing TOTP second-factor flow is unaffected.
- [ ] Existing password-only login flow is unaffected.
- [ ] Enrolled passkey is listed in Settings with a registration date.
- [ ] Passkey can be deleted from Settings.

## Implementation Paths

### Path A — Minimal Settings integration
- Add "Passkeys" section to the Monaco Settings panel.
- Call upstream `/api/auth/passkey/register/begin` and `/api/auth/passkey/register/complete` endpoints.
- Use the browser's `navigator.credentials.create()` WebAuthn API.
- Show success/error state after enrollment.

### Path B — Full login flow
- On the login screen, detect whether passkeys are enrolled for the user.
- Add a "Sign in with passkey" button that calls `/api/auth/passkey/authenticate/begin` and `/api/auth/passkey/authenticate/complete`.
- Falls back to password login gracefully if no passkey enrolled.

### Path C — Shared WebAuthn helper module
- Extract WebAuthn registration and authentication flows into a shared `webauthn-client.ts` module.
- Reuse for both Settings enrollment and login screen.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] State-machine / invariant test
  - [x] Interaction scenario test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- Browser smoke: login with TOTP still works
- Browser smoke: passkey enrollment flow completes without errors

### New regression coverage to add
- [ ] Unit tests for WebAuthn client helper (mock `navigator.credentials`)
- [ ] Settings panel renders passkey section when feature is available
- [ ] Enrollment success/error states are handled correctly
- [ ] TOTP regression: TOTP login unaffected after passkey integration

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
- Passkey management UI is split into a separate ticket (`wire-passkey-management-to-settings`); this ticket focuses on the enrollment and auth flow.

## Notes

- WebAuthn requires HTTPS in production. Verify dev environment setup.
- The browser `navigator.credentials` API is not available in all test environments — use mocks.
- Do not remove or modify the TOTP flow as part of this work.

## Links

- `runtime/web/src/components/settings-panel.ts`
- `runtime/src/channels/web/agent/auth.ts`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
