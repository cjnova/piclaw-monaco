---
id: wire-passkey-management-to-settings
title: Wire passkey management to Monaco Settings panel
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - auth
  - settings
  - upstream-sync
owner: 
---

# Wire passkey management to Monaco Settings panel

## Summary

Add passkey management (list, register, delete) to the Monaco Settings panel. Show enrolled passkeys with registration dates and deletion capability. This ticket covers the management UI; the enrollment and auth flow wiring is covered in `adopt-passkey-authentication-support`. Both tickets can proceed in parallel once the upstream passkey endpoints are available after the v2.1.0 merge.

## Acceptance Criteria

- [ ] Monaco Settings panel shows a "Passkeys" section under Authentication/Security.
- [ ] Enrolled passkeys are listed with name and registration date.
- [ ] User can register a new passkey from the Settings panel.
- [ ] User can delete an existing passkey from the Settings panel (with confirmation prompt).
- [ ] Deleting the last passkey shows a warning if passkey is the only auth method.
- [ ] Empty state is shown when no passkeys are enrolled ("No passkeys registered").
- [ ] All API calls show appropriate loading and error states.

## Implementation Paths

### Path A — Passkeys section in Settings
- Add a "Passkeys" subsection to the existing Monaco Settings panel.
- `GET /api/auth/passkeys` → list enrolled passkeys (id, name, createdAt).
- Render as a table or list with delete buttons per row.
- "Add passkey" button triggers the WebAuthn registration flow (shared with `adopt-passkey-authentication-support`).
- Delete: `DELETE /api/auth/passkeys/:id` with confirmation modal.

### Path B — Dedicated Security Settings tab
- Add a "Security" tab to the Monaco Settings panel.
- Passkey management section lives within the Security tab alongside TOTP settings.
- Allows future expansion (API tokens, session management) in the same tab.

### Path C — Inline settings card
- Render a passkey management card as a collapsible section within the current single-page Settings panel (no new tab).
- Lower implementation cost if Settings is not currently tabbed.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Interaction scenario test
  - [x] State-machine / invariant test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- Browser smoke: Settings panel opens, Passkeys section visible
- Browser smoke: empty state shown when no passkeys enrolled

### New regression coverage to add
- [ ] Passkey list renders correctly (0, 1, N items)
- [ ] Delete confirmation modal works, DELETE call made on confirm
- [ ] Add passkey triggers WebAuthn registration flow
- [ ] Error states handled (API failure, WebAuthn not supported)

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
- Companion ticket to `adopt-passkey-authentication-support`; both cover different surfaces of the same passkey feature.

## Notes

- Confirm deletion before making the DELETE API call — passkey deletion is irreversible.
- Warn if deleting the last passkey would leave the user without a second factor.
- Share the WebAuthn registration flow module with `adopt-passkey-authentication-support` to avoid duplication.

## Links

- `runtime/web/src/components/settings-panel.ts`
- `runtime/src/channels/web/agent/auth.ts`
- `workitems/00-inbox/adopt-passkey-authentication-support.md`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
