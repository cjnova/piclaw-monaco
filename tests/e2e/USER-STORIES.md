# User Stories — Primary User Profile

## Persona: Power User (Rui)

- **Devices:** iPhone (away/quick), iPad (primary daily driver), Desktop (deep work)
- **Sessions:** 5-6 active across multiple instances, topic-based, long-lived
- **Switching:** Typeahead on keyboard, swipe on touch
- **Compose style:** Short concise instructions, occasional long paste (bug reports, feature specs)
- **Queue usage:** Very heavy — queues follow-ups constantly, pulls back for editing frequently
- **Abort:** Rare, expects partial summary
- **Slash commands:** Rare; `/tint` and `/theme` are the most frequent
- **Editor:** Critical on writing-focused instance; zen mode, markdown preview, popouts all used
- **Workspace:** Uploads occasional but critical; rename/delete important but clunky
- **Settings:** Opened very often during dev/test; accessed via typeahead primarily
- **Attachments:** Screenshots pasted constantly, lightbox and file preview heavily used
- **Panes:** Terminal, VNC, office viewers all used on all devices
- **Adaptive Cards:** Liked for logins/pickers; widgets for complex input
- **Push notifications:** Not a priority (HTTPS-limited)
- **Recovery action:** Refresh (full page reload)

---

## User Stories

### US-01: Morning Triage
> As a power user, I want to quickly scan the timeline across multiple sessions and provide guidance, so that I can keep all workstreams moving.

**Acceptance criteria:**
- Switching between 5-6 sessions is fast (<500ms visual transition)
- Timeline loads without cross-session message bleed
- Compose box is ready for input immediately after switch
- `/tint` and `/theme` work reliably from compose

### US-02: Queue and Steer
> As a power user, I want to queue follow-up messages while the agent works and pull them back for editing, so that I can refine my instructions before delivery.

**Acceptance criteria:**
- Sending while agent is busy adds to queue visibly
- Queue items show edit/remove controls
- Pulling back a queue item returns text to compose box
- Queue state survives SSE reconnect
- No race conditions between queue state and agent completion

### US-03: Multi-Device Session Switching
> As a multi-device user, I want to switch sessions via typeahead (keyboard) or swipe (touch) depending on my device, so that the interaction model matches my input method.

**Acceptance criteria:**
- Typeahead finds sessions by name (prefix and substring match)
- Finger swipe navigates sessions on iPad/iPhone
- Apple Pencil does NOT trigger swipe
- Horizontal gesture on message content does NOT trigger switch
- Session popup sorts alphabetically with active first

### US-04: Editor as Workspace
> As a writer, I want the editor to be stable with zen mode, live markdown preview, and reliable tab management, so that I can focus on content without UI fights.

**Acceptance criteria:**
- Switching files: no flicker
- Dirty tab close: confirmation dialog
- Tab activation: on mouse-down, not mouse-up
- Zen mode: no CPU spikes on hover
- Preview splitter: stable during resize
- Editor state: survives popout/return and page refresh

### US-05: Screenshot Debugging Workflow
> As a developer, I want to paste screenshots into compose and view them in the lightbox, so that I can show the agent what's broken and review its visual output.

**Acceptance criteria:**
- Paste image from clipboard attaches to compose
- Drag-and-drop image attaches to compose
- Sent images appear in timeline with thumbnail
- Clicking thumbnail opens lightbox
- Lightbox supports zoom, pan, close
- File preview works for PDFs and archives

### US-06: Settings During Development
> As a developer iterating on the app, I want settings to open instantly and save changes immediately, so that I don't lose flow switching models or configuring addons.

**Acceptance criteria:**
- Settings opens within 100ms (cached) or shows shell immediately (cold)
- Number fields accept typed values (not just stepper clicks)
- Changes persist without explicit save button
- Rapid open/close does not duplicate dialogs
- Accessible via typeahead, gear icon, or Cmd+,

### US-07: Resilient Reconnection
> As a user on flaky WiFi or switching between devices, I want the app to recover from network drops without losing messages or showing stale state.

**Acceptance criteria:**
- SSE reconnects within 5s after network recovery
- Messages delivered during disconnect appear after reconnect
- Queue state refreshes on reconnect
- Agent status shows correct state after reconnect
- No auto-reload loops on version drift
- Page refresh recovers all state (timeline, queue, compose draft)

### US-08: Touch-First Pane Interaction
> As an iPad user, I want VNC, terminal, and office viewer panes to work with touch input without getting stuck or losing connection.

**Acceptance criteria:**
- VNC: touch/pen input does not get stuck
- VNC: reconnect failure shows minimal UI (no complex error screen)
- Terminal: reattaches after popout/return
- Office viewer: renders and controls work on touch
- All panes: no stuck states requiring refresh

### US-09: Session Lifecycle
> As an organiser, I want to name, fork, archive, and find sessions efficiently, so that my topic-based workflow stays manageable at scale.

**Acceptance criteria:**
- Rename propagates to all connected clients (SSE broadcast)
- Renamed sessions findable in typeahead immediately
- Fork creates a sub-session linked to parent
- Archive moves session below active list
- Non-default sessions can be archived
- Delete works for archived sessions

### US-10: Workspace File Operations
> As a user, I want to upload, rename, and delete files in the workspace explorer without frustration, so that I can manage project assets directly.

**Acceptance criteria:**
- Upload: drag-and-drop works, progress shown, up to 512MB
- Rename: clear affordance, keyboard-friendly, no accidental delete
- Delete: confirmation required, no accidental trigger from gestures
- Explorer: responsive to touch, no stuck drag states

### US-11: PWA Manifest and Home Screen Icons
> As a user adding PiClaw to my iOS home screen, I want the manifest to always be correct and supply high-resolution versions of the avatar icons, so that the desktop icon looks sharp and branded.

**Acceptance criteria:**
- `/manifest.json` returns valid JSON with `name`, `icons`, `start_url`, `display`
- Manifest includes 192x192 and 512x512 PNG icons
- Icon URLs actually resolve to PNG images of the declared size
- Apple touch icons at 180x180, 167x167, 152x152 all resolve
- Generic `/apple-touch-icon.png` resolves
- `/favicon.ico` serves a valid PNG (Safari compatibility)
- HTML head contains `<link rel="apple-touch-icon">` tags with correct sizes
- When avatar changes, manifest icon URLs get a new version parameter
- Icons use the custom agent avatar when configured, not generic defaults

---

## Priority Matrix

| Story | iPad | iPhone | Desktop | Frequency | Regression risk |
|-------|------|--------|---------|-----------|-----------------|
| US-02 Queue & steer | ★★★ | ★★ | ★★★ | Very high | **Very high** |
| US-03 Session switch | ★★★ | ★★★ | ★★ | High | High |
| US-01 Morning triage | ★★★ | ★★ | ★★ | Daily | Medium |
| US-07 Reconnection | ★★★ | ★★★ | ★★ | High | High |
| US-04 Editor | ★★ | ☆ | ★★★ | High | Medium |
| US-05 Screenshots | ★★★ | ★★ | ★★★ | High | Medium |
| US-06 Settings | ★★ | ★ | ★★★ | High | **Very high** |
| US-08 Panes | ★★★ | ★ | ★★★ | Medium | High |
| US-09 Session lifecycle | ★★ | ★ | ★★ | Medium | Medium |
| US-10 Workspace files | ★★ | ★ | ★★ | Low-Medium | Medium |
| US-11 PWA manifest | ★★★ | ★★★ | ★ | Every install | Medium |

## Test implementation priority

1. **US-02** — Queue/steer (keeps breaking, daily pain)
2. **US-03** — Session switching (multi-device, touch)
3. **US-07** — Reconnection (silent failures)
4. **US-06** — Settings (frequent regressions from race conditions)
5. **US-01** — Morning triage (composition of 02+03)
6. **US-04** — Editor stability
7. **US-05** — Screenshot workflow
8. **US-08** — Panes
9. **US-09** — Session lifecycle
10. **US-10** — Workspace files
11. **US-11** — PWA manifest & icons
