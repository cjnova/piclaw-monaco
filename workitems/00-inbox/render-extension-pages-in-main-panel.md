---
id: render-extension-pages-in-main-panel
title: Render extension page routes in the main panel via Activity Bar
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - extensions
  - routing
  - ui
owner: 
---

# Render extension page routes in the main panel via Activity Bar

## Summary

Extensions register HTTP routes via `__piclaw_registerRoute`. Routes ending in `-page` (e.g., `/fleet-page`, `/board-page`) serve standalone HTML dashboards. The Monaco frontend should discover these routes via `GET /api/extension-routes`, list them as navigable items, and render them in the main panel (iframe) when selected.

This makes the Monaco shell a universal container for any extension UI — fleet dashboard, kanban board, future custom pages — without needing to know about specific extensions at build time.

## Discovery Method

1. Fetch `GET /api/extension-routes` → returns `[{ prefix, extensionPath }]`
2. Filter: routes matching `*-page` pattern are renderable HTML pages
3. Extract display name from `extensionPath` (e.g., `piclaw-fleet` → "Fleet", `kanban-board-widget` → "Board")
4. API routes (`/api/*`) and viewer routes (`*-viewer`) are excluded from the list

## Acceptance Criteria

- [ ] The Activity Bar "Agent" icon (or a new dedicated icon) shows a list of discovered extension pages
- [ ] Each entry shows: display name derived from extension path, clickable
- [ ] Clicking an entry renders the page URL in an iframe in the main panel area
- [ ] The iframe is sandboxed but allows same-origin communication
- [ ] If no extension pages are registered, show empty state: "No extension pages available"
- [ ] Discovery refreshes on addon install/uninstall
- [ ] Extension pages coexist with the chat — either as a tab/toggle or replacing the main panel temporarily with a "back to chat" button
- [ ] Works with `piclaw-fleet` (/fleet-page) and `kanban-board-widget` (/board-page) as validation targets

## Implementation

### Option A — Sidebar list + main panel iframe
- Add a "Pages" section to the existing Addons sidebar panel
- Clicking opens the page in an iframe that replaces the chat area
- A close/back button returns to chat view

### Option B — Activity Bar sub-items
- Add extension pages as sub-items under the Agent activity bar icon
- Each page gets its own entry that opens in the main panel

### Option C — Tab bar above chat
- Add a horizontal tab bar above the chat area: "Chat" + discovered extension pages
- Click tab to switch between chat and extension page views

### Recommended: Option A (simplest, additive)

## Test Plan

- [ ] Install `piclaw-fleet` addon → verify `/fleet-page` appears in list
- [ ] Click → renders fleet dashboard in iframe
- [ ] Install `kanban-board-widget` → verify `/board-page` appears
- [ ] Uninstall addon → page disappears from list
- [ ] No extensions installed → empty state shown
- [ ] Iframe communication doesn't break host page

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Build passes
- [ ] Typecheck passes
- [ ] Works with at least 2 real extension pages
- [ ] No security regression (sandboxed iframe)

## Notes

- Extensions don't need to be bundled in the repo — they're installed at runtime via the addon system
- `piclaw-fleet` provides: `/fleet-page` (agent dashboard), `/api/fleet` (JSON), `/api/fleet-system` (metrics)
- `kanban-board-widget` provides: `/board-page` (kanban UI), `/api/board` (JSON)
- The naming convention `*-page` is already established by existing extensions
- Future extensions following this pattern will automatically appear in the list

## Links

- `runtime/src/channels/web/http/extension-routes.ts` — route registry + `/api/extension-routes` endpoint
- `GET /api/extension-routes` — discovery API
- `/workspace/tmp/piclaw-contrib/packages/piclaw-fleet/widget.ts` — reference implementation
