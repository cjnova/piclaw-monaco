---
id: wire-settings-panel-to-piclaw-config
title: Wire Settings panel to piclaw configuration API
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - settings
  - configuration
  - ui
owner: 
---

# Wire Settings panel to piclaw configuration API

## Summary

The ⚙️ Settings Activity Bar icon currently shows a placeholder. Wire it to the existing piclaw settings API (`GET /agent/settings-data`, `POST /agent/settings/general`) to render a full configuration panel matching piclaw's native settings UI.

The panel uses a **left navigation + right content** layout (same pattern as the Addons panel catalog view). Left sidebar lists settings categories, clicking one renders its form fields on the right.

## Backend APIs

- `GET /agent/settings-data` — returns full settings payload:
  - Identity (user name, agent name)
  - Session config (auto-rotate, max session size, system meters, tool use budget, session isolation)
  - Instance config (compose upload MB, workspace upload MB)
  - Providers (configured auth providers with status)
  - Models (available models, current selection)
  - Themes (presets with color palettes)
  - Toolsets (available tool groups)
  - Quick actions
  - Auth state (TOTP, passkey)
- `POST /agent/settings/general` — save general settings (body: key-value pairs)
- `GET /agent/settings/quick-actions` — get quick actions config
- `POST /agent/settings/quick-actions` — save quick actions

## Design (from piclaw screenshot)

### Left navigation (sidebar within the Settings panel):
- **General** (codicon: gear) — Identity, Session, Instance Configuration, TOTP
- **Providers** (codicon: cloud) — Auth provider list (configured/not), OAuth buttons
- **Models** (codicon: hubot) — Model selection, default model, available models
- **Appearance** (codicon: paintcan) — Theme presets, custom colors
- **Quick Actions** (codicon: zap) — Configurable quick action buttons
- **Keychain** (codicon: key) — Stored secrets management
- **Tools** (codicon: tools) — Tool activation, toolset selection

### Form controls needed:
- Text input (User name, Agent name)
- Checkbox (Auto-rotate sessions, System meters)
- Stepper (Max session size, Tool use budget, Upload limits) — [–] value [+]
- Dropdown/select (Session isolation)
- Section headers (Identity, Session, Instance Configuration)
- Info cards (TOTP setup QR)
- Provider cards (name, status, OAuth/API key buttons)

### Layout:
```
┌─────────────────────────────────────────┐
│ ⚙️ SETTINGS                             │
├──────────┬──────────────────────────────┤
│ General  │  Identity                    │
│ Providers│  ┌─────────────────────────┐ │
│ Models   │  │ User    [+] [Your name] │ │
│ Appearance│ │ Agent   [+] [PiClaw   ] │ │
│ Quick Act│  └─────────────────────────┘ │
│ Keychain │                              │
│ Tools    │  Session                     │
│          │  ☑ Auto-rotate sessions      │
│          │  Max session size [–][32][+] │
│          │  ...                         │
└──────────┴──────────────────────────────┘
```

## Acceptance Criteria

- [ ] Settings icon opens sidebar with category navigation
- [ ] Clicking a category renders its form fields
- [ ] General settings: identity, session, instance config all editable
- [ ] Changes save via POST to `/agent/settings/general`
- [ ] Providers section shows configured providers with status
- [ ] Models section shows available models
- [ ] Appearance section shows theme presets
- [ ] Tools section shows toolsets
- [ ] Stepper controls work (increment/decrement with bounds)
- [ ] Checkbox toggles save immediately
- [ ] Dropdown selects save on change
- [ ] Error handling: show toast/inline error on save failure
- [ ] Loading state while fetching settings

## Implementation

Reuse the pattern from AddonsPanel:
- Fetch data on mount
- Filter/navigation in sidebar
- Content area renders based on active section
- All styles in CSS (BEM), no inline styles
- Forms use controlled inputs

## Test Plan

- [ ] Each settings category renders correctly
- [ ] Save round-trips to API and persists
- [ ] Provider status reflects actual auth state
- [ ] Theme changes preview immediately
- [ ] Error states handled (401, network failure)

## Definition of Done

- [ ] All acceptance criteria satisfied
- [ ] Build + typecheck pass
- [ ] Tested with live piclaw backend
- [ ] No regression in other panels

## Links

- `GET /agent/settings-data` — main settings payload
- `POST /agent/settings/general` — save endpoint
- `runtime/src/channels/web/handlers/general-settings.ts` — backend implementation
- `runtime/src/channels/web/http/dispatch-agent.ts` — route registration
