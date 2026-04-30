---
id: avatar-and-identity-management
title: Avatar and identity management — default PiClaw avatar, user/agent profile commands
status: inbox
created: 2026-04-30
updated: 2026-04-30
tags:
  - work-item
  - kanban
  - web
  - avatar
  - identity
  - ui
  - chat
owner: 
---

# Avatar and identity management — default PiClaw avatar, user/agent profile commands

## Summary

The chat message list uses letter-initial circles for avatars (Y for You, P for PiClaw). The agent should show the actual PiClaw avatar image by default (served at `/avatar/agent`). Additionally, expose the identity management slash commands through the UI — users should be able to change both agent and user avatar/name from the Settings panel or compose bar.

## Backend APIs

| Endpoint | Method | Purpose |
|---|---|---|
| `/avatar/agent` | GET | Get agent avatar image |
| `/avatar/user` | GET | Get user avatar image |
| `/agent/{chat_jid}/message` | POST | Send identity commands as messages |

### Identity slash commands (from command-registry.ts):
| Command | Description |
|---|---|
| `/agent-name` | Set or show the agent display name |
| `/agent-avatar` | Set or show the agent avatar URL |
| `/user-name` | Set or show your display name |
| `/user-avatar` | Set or show your avatar URL |
| `/user-github` | Set name/avatar from a GitHub handle or profile URL |

## Design

### 1. Default PiClaw avatar in chat
- Agent messages show the actual PiClaw avatar from `/avatar/agent` instead of letter "P" circle
- User messages show avatar from `/avatar/user` if available, fall back to letter circle
- Avatar images: 28-32px circular, loaded once and cached
- SSE events include `agent_avatar` and `user_avatar` fields — use those if present

### 2. Identity management in Settings panel
Add a section in the Settings panel (Wave 10c):
- **Agent identity**: name input + avatar preview + upload/URL button
- **User identity**: name input + avatar preview + upload/URL button + "Import from GitHub" button
- Changes send the corresponding slash command via the message API
- Preview updates immediately on change

### 3. Compose bar integration (future)
- The session pill (@name) reflects the current user identity
- Clicking could show identity quick-edit

## Acceptance Criteria

- [ ] Agent messages show PiClaw avatar from `/avatar/agent` (not letter circle)
- [ ] User messages show avatar from `/avatar/user` when available
- [ ] Fallback to letter-initial circle when no avatar set
- [ ] Avatars are cached (not re-fetched per message)
- [ ] Settings panel shows agent name + avatar editor
- [ ] Settings panel shows user name + avatar editor
- [ ] "Import from GitHub" button sends `/user-github <handle>`
- [ ] Avatar changes reflect immediately in chat
- [ ] SSE `agent_avatar` / `user_avatar` fields used when present

## Implementation

### Phase 1 — Default avatars in chat
1. In `MessageList.tsx`, replace letter circles with `<img>` for avatars
2. Agent: `src="/avatar/agent"` with fallback to letter circle on error
3. User: `src="/avatar/user"` with fallback to letter circle on error
4. Cache via normal browser image caching

### Phase 2 — Identity management UI
1. Add identity section to Settings panel
2. Text inputs for names, image preview for avatars
3. Buttons send slash commands: `/agent-name <name>`, `/user-github <handle>`, etc.

## Test Plan

- [ ] Agent avatar loads from `/avatar/agent`
- [ ] Missing avatar falls back to letter circle
- [ ] Name changes via slash command update chat display
- [ ] GitHub import fetches correct avatar
- [ ] Avatar persists across page refreshes

## Definition of Done

- [ ] All acceptance criteria satisfied
- [ ] Build + typecheck pass
- [ ] Tested with custom avatars
- [ ] No regression in chat layout

## Notes

- `/avatar/agent` returns WebP; browsers handle it natively
- The favicon is already served from the agent avatar (dispatch-shell.ts converts to PNG for Safari)
- SSE events carry `agent_name`, `agent_avatar`, `user_name`, `user_avatar`, `user_avatar_background` fields
- The `/user-github` command fetches name + avatar from GitHub profile — powerful one-step setup

## Links

- `runtime/src/agent-control/command-registry.ts` — identity commands (lines 53-57)
- `runtime/src/channels/web/http/dispatch-shell.ts` — avatar routes (lines 96-101)
- `runtime/web/frontend/src/components/MessageList.tsx` — avatar rendering
- `GET /avatar/agent`, `GET /avatar/user` — avatar image endpoints
