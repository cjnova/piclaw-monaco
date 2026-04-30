# Chat Compose Bar — Design Analysis

## Piclaw's compose bar buttons (left to right):

| # | Button | Piclaw function | Our equivalent |
|---|---|---|---|
| 1 | Chat icon | Session switcher popup (same as #2) | Sessions tab in Tasks panel |
| 2 | Session name | Session switcher popup (shows @name) | Sessions tab in Tasks panel |
| 3 | 🔍 Magnifier | Search | ✅ Already in Activity Bar |
| 4 | 📍 Location | Geolocation sharing (disabled by security policy) | Skip — not applicable |
| 5 | 🔔 Bell | Toggle browser notifications | Future (push subscription) |
| 6 | ❓ Unknown | Doesn't work | Skip |
| 7 | 📎 Attach | Attach files to chat message | **Implement** — `POST /media/upload` |
| 8 | ▶/⏹ Send/Stop | Send message (colored) / Cancel running turn (red) | **Implement** |

## Send/Stop cycle — How it works upstream:

### State machine:
```
IDLE (gray, disabled) → user types → READY (colored, enabled) → user clicks → SENDING
SENDING → agent starts → ACTIVE (red stop button) → agent finishes → IDLE
ACTIVE → user clicks stop → sends /abort → IDLE
```

### Implementation:
1. **IDLE**: No text in compose box → button grayed/disabled
2. **READY**: Text present → button colored (accent), clickable → sends `POST /agent/{chat_jid}/message`
3. **ACTIVE** (agent responding): Listen to SSE `agent_status` event with status != idle → button turns RED (stop icon)
4. **STOP**: Click red button → sends `POST /agent/{chat_jid}/message` with `{"content": "/abort"}` → cancels the turn

### Relevant code:
- Send: `POST /agent/{chat_jid}/message` with `{ content: "...", media_ids: [] }`
- Abort: `POST /agent/{chat_jid}/message` with `{ content: "/abort" }`
- Status detection: SSE event `agent_status` → `{ status: "active"|"idle" }`
- Also: `GET /agent/status` returns `{ status: "active"|"idle", data: {...} }`

### File attachment flow:
1. Upload: `POST /media/upload` (multipart/form-data) → returns `{ id: number, ... }`
2. Send message with attachment: `POST /agent/{chat_jid}/message` with `{ content: "...", media_ids: [123] }`
3. Paste image: same flow — intercept paste event, upload as PNG, attach media_id

## Proposed layout for piclaw-monaco:

```
┌─────────────────────────────────────────────────────────────┐
│ [📎]  [textarea...............................] [▶ Send/⏹]  │
└─────────────────────────────────────────────────────────────┘
```

- **Left**: Attach button (📎 codicon `attach`)
- **Center**: Textarea (auto-grow, current)
- **Right**: Send/Stop button (dynamic state)

### Button states:
- **No text, idle**: Gray send icon (disabled)
- **Has text, idle**: Accent-colored send icon → click sends
- **Agent active**: Red stop icon (codicon `debug-stop`) → click sends /abort
- **Sending**: Brief loading state

### Notifications (bell) — future:
- Uses Web Push API: `GET /agent/push/vapid-public-key`, `POST /agent/push/subscription`
- Already has backend support

## Files to modify:
- `runtime/web/frontend/src/panels/ChatPanel.tsx` — compose bar redesign
- `runtime/web/frontend/src/components/MessageList.tsx` — listen for agent_status to propagate
- `runtime/web/static/css/shell.css` — compose bar styling
