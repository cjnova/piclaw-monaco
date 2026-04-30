---
id: full-compose-bar-redesign
title: Full compose bar redesign — send/stop, attachments, queue, session pill
status: inbox
created: 2026-04-30
updated: 2026-04-30
tags:
  - work-item
  - kanban
  - web
  - chat
  - compose
  - attachments
  - ui
owner: 
---

# Full compose bar redesign — send/stop, attachments, queue, session pill

## Summary

Redesign the chat compose bar to match piclaw's full interaction model: dynamic send/stop button, file attachments (upload + paste), message queue management (steer, edit, cancel), and session context pill. This is the primary user interaction point and must feel responsive and feature-complete.

## Backend APIs

| Endpoint | Method | Purpose |
|---|---|---|
| `/agent/{chat_jid}/message` | POST | Send message `{ content, media_ids? }` |
| `/agent/{chat_jid}/message` | POST | Abort: `{ content: "/abort" }` |
| `/media/upload` | POST | Upload file (multipart/form-data) → `{ id, ... }` |
| `/agent/queue-state` | GET | List queued messages for chat |
| `/agent/queue-steer` | POST | Prioritize a queued message `{ chat_jid, row_id }` |
| `/agent/queue-remove` | POST | Cancel a queued message `{ chat_jid, row_id }` |
| `/agent/queue-reorder` | POST | Reorder queue |
| `/agent/status` | GET | Check if agent is active/idle |
| SSE `agent_status` | event | Real-time active/idle state changes |
| `/agent/push/vapid-public-key` | GET | Web Push VAPID key (notifications) |
| `/agent/push/subscription` | POST | Subscribe to push notifications |

## Design

### Layout:
```
┌─────────────────────────────────────────────────────────────────┐
│ [@session] [📎 file.png ✕] [📎 image.png ✕]   (attachments)   │
├─────────────────────────────────────────────────────────────────┤
│ [📎]  [textarea...............................] [⏹ Stop] [▶]   │
├─────────────────────────────────────────────────────────────────┤
│ Queued: "follow up..."  [✏️ Edit] [↩ Steer] [✕ Cancel]         │
└─────────────────────────────────────────────────────────────────┘
```

### Components:

**1. Session pill** (far left above textarea):
- Shows `@session-name` in blue pill (like piclaw)
- Click opens Sessions tab in Activity Bar panel
- Reflects current `?chat_jid=` from URL

### Session & Branch Action Icons

Small icon buttons next to the session pill (or in a dropdown) for quick session management. Each maps to a slash command sent via the message endpoint.

| Icon | Codicon | Action | Command |
|---|---|---|---|
| ➕ New | `add` | Start a new session | `/new-session` |
| 🔀 Fork | `git-branch` | Fork from current point | `/fork` |
| 📋 Clone | `copy` | Clone into a new session | `/clone` |
| 🔄 Rotate | `refresh` | Archive and start fresh | `/session-rotate` |
| 🌳 Tree | `list-tree` | Show session tree / branches | `/tree` |
| 📝 Rename | `edit` | Set session name | `/session-name <name>` |
| ↔️ Switch | `arrow-swap` | Switch to another session | `/switch-session` |

**Implementation**: Each icon sends the corresponding command as `POST /agent/{chat_jid}/message` with `{ content: "/command" }`. The response appears in chat (like typing the command manually).

**Layout**: These icons appear as a horizontal row, either:
- Next to the session pill (compact icon bar)
- In a dropdown menu (▾) from the session pill (cleaner, less clutter)

**Recommended**: Dropdown from session pill — click the pill to see all session actions.

**2. Attachment badges** (above textarea):
- Each uploaded file shows as pill: icon + filename + ✕ remove
- Supports: file picker (📎 button) + clipboard paste (images auto-upload as PNG)

**3. Attach button** (left of textarea):
- Codicon `attach` icon
- Opens native file picker
- Uploads via `POST /media/upload` (FormData)
- Stores `media_id` for inclusion in message

**4. Textarea** (center):
- Auto-growing, max 25vh
- `/` trigger for command palette
- Shift+Enter for newline, Enter to send

**5. Send/Stop buttons** (right):
- **Send** (▶ green arrow): visible when idle + has text → sends message with media_ids
- **Stop** (⏹ red square): visible when agent is active → sends `/abort`
- **Disabled** (gray): when no text and idle

**6. Queue indicator** (below compose):
- Shows when messages are queued (sent while agent busy)
- Each queued item: content preview (truncated) + [Edit] + [Steer] + [Cancel]
- Steer = promote to next (sends immediately after current turn)
- Edit = modify content before processing
- Cancel = remove from queue

**7. Notifications bell** (future):
- Toggle browser push notifications
- Uses Web Push API (`/agent/push/vapid-public-key`, subscription management)

## State machine:

```
                              user types
    DISABLED (gray) ──────────────────────→ READY (green)
         ↑                                       │
         │                                       │ user clicks send
         │                                       ↓
         │                               SENDING → agent starts
         │                                       │
         │           agent finishes              ↓
         ←──────────────────────────── ACTIVE (red stop)
                                                 │
                                                 │ user clicks stop
                                                 ↓
                                          sends /abort → IDLE
```

## Acceptance Criteria

- [ ] Send button disabled (gray) when textarea is empty
- [ ] Send button enabled (green/accent) when textarea has content
- [ ] Click send: POSTs message, clears textarea, message appears in chat
- [ ] Stop button (red) appears when agent is responding (detected via SSE agent_status)
- [ ] Click stop: sends /abort, agent cancels, button returns to send state
- [ ] Attach button opens file picker
- [ ] Selected file uploads to /media/upload, shows badge
- [ ] Multiple files can be attached (accumulate media_ids)
- [ ] Remove attachment badge removes media_id from pending list
- [ ] Paste image in textarea → auto-uploads as PNG, shows badge
- [ ] Messages sent while agent busy are queued (shown in queue bar)
- [ ] Queue items show: content preview, [Edit], [Steer], [Cancel]
- [ ] Steer moves message to priority position
- [ ] Cancel removes from queue
- [ ] Session pill shows current @name from URL chat_jid
- [ ] Session pill dropdown shows: New, Fork, Clone, Rotate, Tree, Rename, Switch actions
- [ ] Each action sends the corresponding /command and response shows in chat
- [ ] Icons use codicons for visual consistency
- [ ] All styles in CSS (BEM), no inline styles

## Implementation Paths

### Path A — Incremental (recommended)
1. Send/Stop cycle first (state from SSE)
2. Attach button + upload
3. Paste image support
4. Queue indicator
5. Session pill
6. Notifications (future)

### Path B — Full redesign
- Rewrite compose area as a single cohesive component with all features

## Test Plan

- [ ] Send message: appears in chat, textarea clears
- [ ] Stop during response: agent aborts, button returns to normal
- [ ] Attach file: uploads, badge shows, included in message
- [ ] Paste image: auto-uploads, badge shows
- [ ] Queue: send while busy → shows queued indicator
- [ ] Steer: queued message promoted
- [ ] Cancel: queued message removed
- [ ] Rapid send: multiple queued messages stack correctly
- [ ] Page refresh: queue state preserved (re-fetched from API)

## Definition of Done

- [ ] All acceptance criteria satisfied
- [ ] Build + typecheck pass
- [ ] Tested with live agent responses
- [ ] Works with file attachments (images, documents)
- [ ] No regression in existing chat functionality

## Notes

- The agent_status SSE event is the source of truth for active/idle state
- File uploads return media IDs that must be included in the message POST body
- Paste support uses the Clipboard API — intercept `paste` event on textarea
- Queue state is server-side; always re-fetch after mutations
- /abort is sent as a regular message with special content — the server parses it as a control command

## Links

- `runtime/src/channels/web/handlers/agent.ts` — message handler, abort logic (line ~744)
- `runtime/src/channels/web/http/dispatch-media.ts` — media upload endpoint
- `runtime/src/agent-control/command-registry.ts` — /abort command definition
- `GET /agent/queue-state` — queue inspection
- `POST /agent/queue-steer`, `POST /agent/queue-remove` — queue management
- `docs/COMPOSE-BAR-DESIGN.md` — design analysis notes

## Updates

### 2026-04-30
- Created from piclaw compose bar analysis
- Mapped all 9 buttons from piclaw's compose bar to Monaco equivalents
- Identified backend APIs for each feature
- Send/stop cycle implementation started (fleet agent)
