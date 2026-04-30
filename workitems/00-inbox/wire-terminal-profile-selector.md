---
id: wire-terminal-profile-selector
title: Wire terminal profile selector to Monaco terminal panel
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - terminal
  - feature
  - upstream-sync
owner: 
---

# Wire terminal profile selector to Monaco terminal panel

## Summary

Add terminal profile selection to the Monaco terminal panel. Upstream added support for multiple terminal profiles (different shells, environments, or startup commands). The Monaco terminal panel header should expose a profile selector so users can choose which profile to use when opening new terminal sessions, with new sessions immediately using the selected profile.

### Default Profiles

| Profile | Command | Description |
|---|---|---|
| Shell | `bash -i` | Default interactive bash shell |
| Pi TUI | `pi` or `piclaw tui` | Full Pi terminal UI with interactive components (SelectList, Editor, Markdown, etc.) |

The Pi TUI profile launches the agent's TUI mode directly in the terminal panel, giving access to the full extensible component system (overlays, theming, keyboard input, focusable IME support).

## Acceptance Criteria

- [ ] Terminal panel header shows a profile selector (dropdown or menu).
- [ ] Selector lists all available profiles from the upstream profile registry.
- [ ] Selecting a profile changes the default for new terminal sessions.
- [ ] New terminal session opened after profile selection uses the selected shell/environment.
- [ ] Existing terminal sessions are not forcibly reset when switching profiles.
- [ ] Default profile is pre-selected on load (falls back to first available if no preference is stored).
- [ ] Profile selection persists across page refreshes (stored in local/session preference).
- [ ] "Pi TUI" profile available that launches the pi CLI TUI directly
- [ ] TUI interactive components render correctly in ghostty-web terminal
- [ ] Profile persists across terminal panel close/reopen

## Implementation Paths

### Path A — Header dropdown
- Add a profile selector dropdown to the terminal panel header bar.
- Fetch available profiles from `/api/terminal/profiles`.
- Store selected profile in `localStorage` or session preference.
- Pass selected profile ID when creating a new terminal session via `POST /api/terminal/sessions`.

### Path B — Context menu on new-tab button
- Add a "New terminal" button with a drop-down arrow.
- Click arrow → context menu lists available profiles.
- Click a profile → opens a new terminal tab with that profile.

### Path C — Settings-driven default
- Add terminal profile preference to the Monaco Settings panel.
- Terminal panel respects the settings value as the default.
- Override still possible via header button for per-session selection.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Interaction scenario test
  - [x] State-machine / invariant test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- Browser smoke: terminal opens correctly with default profile
- Browser smoke: switching profile and opening new terminal uses new shell

### New regression coverage to add
- [ ] Profile list fetched and rendered in selector
- [ ] Profile selection stored and restored after refresh
- [ ] New terminal session uses selected profile shell/env
- [ ] Existing sessions unaffected by profile switch

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
- Terminal profiles are new in v2.1.0; existing terminal panel had no profile concept.

## Notes

- Graceful fallback: if only one profile exists, the selector can be hidden or shown as non-interactive.
- Profile names should be user-readable (e.g., "bash", "zsh", "Python REPL") — avoid exposing raw IDs.
- Do not forcibly close existing terminal sessions when the profile selection changes.

## Links

- `runtime/web/src/components/terminal-panel.ts`
- `runtime/src/channels/web/agent/terminal.ts`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
