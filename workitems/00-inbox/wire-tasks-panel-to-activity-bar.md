---
id: wire-tasks-panel-to-activity-bar
title: Wire Tasks panel to Activity Bar for scheduled task management
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - web
  - tasks
  - scheduling
  - ui
owner: 
---

# Wire Tasks panel to Activity Bar for scheduled task management

## Summary

Add a **Tasks** Activity Bar icon (codicon: `tasklist`) that opens a three-tab sidebar panel for managing scheduled tasks, active chat channels, and conversation branches. The panel follows the same composition pattern as AddonsPanel: fetch-on-mount, card list, action controls. The Tasks tab requires a **new** `GET /agent/scheduled-tasks` HTTP endpoint backed by the existing `listScheduledTasks()` query service; Channels and Branches tabs use existing HTTP endpoints already present in `dispatch-agent.ts`.

## Backend APIs

### Needs to be CREATED

| Endpoint | Method | Description |
|---|---|---|
| `GET /agent/scheduled-tasks` | GET | List scheduled tasks. Query params: `status` (active/paused/completed), `chat_jid`, `limit` (1–50, default 20), `include_latest_run_log` (bool). Backed by `listScheduledTasks()` from `runtime/src/scheduled-task-query-service.ts`. |

**Response shape** (`GET /agent/scheduled-tasks`):
```json
{
  "counts": { "active": 2, "paused": 1, "completed": 5 },
  "tasks": [
    {
      "id": "abc123",
      "chat_jid": "web:default",
      "task_kind": "agent",
      "status": "active",
      "schedule_type": "cron",
      "schedule_value": "0 9 * * *",
      "next_run": "2026-04-30T09:00:00Z",
      "last_run": "2026-04-29T09:00:00Z",
      "last_result": "ok",
      "created_at": "2026-04-01T12:00:00Z",
      "model": null,
      "prompt_summary": "Summarize news headlines",
      "command_summary": null,
      "summary": "Summarize news headlines",
      "latest_run_log": null
    }
  ]
}
```

Mutations are handled via **IPC** (no new HTTP endpoints needed for mutations):

| IPC message type | Parameters | Effect |
|---|---|---|
| `pause_task` | `{ taskId }` | Pause an active task |
| `resume_task` | `{ taskId }` | Resume a paused task |
| `cancel_task` | `{ taskId }` | Delete a task (irreversible) |
| `schedule_task` | full payload | Create a new task |
| `update_task` | `{ taskId, ...fields }` | Modify existing task |

> **Implementation note**: IPC mutations are exposed via the tool interface (`/tasks pause <id>`, etc.). For the UI, prefer either (a) routing mutations through the existing `POST /agent/respond` endpoint (sending the appropriate command text) or (b) adding thin `POST /agent/task-pause`, `POST /agent/task-resume`, `POST /agent/task-cancel` endpoints backed by direct IPC calls. Path A is lower risk; Path B is cleaner UX (no chat message side-effects). See **Implementation Paths** below.

### Already exists

| Endpoint | Method | Description |
|---|---|---|
| `GET /agent/active-chats` | GET | List active chat sessions |
| `POST /agent/rename-jid` | POST | Rename a chat session |
| `GET /agent/branches` | GET | List conversation branches |
| `POST /agent/branch-fork` | POST | Fork a branch |
| `POST /agent/branch-rename` | POST | Rename a branch |
| `POST /agent/branch-prune` | POST | Prune messages from a branch |
| `POST /agent/branch-restore` | POST | Restore a pruned branch |
| `POST /agent/branch-purge` | POST | Permanently purge a branch |

## Design

### Activity Bar

Add a new icon (codicon `tasklist`) between Dashboards and Settings in the Activity Bar. Clicking toggles the Tasks sidebar panel.

### Horizontal Tab Bar

The Tasks panel uses the same `.chat-tabs` horizontal tab pattern as Dashboards. Three tabs:

| # | Tab label | Data source | Refresh trigger |
|---|---|---|---|
| 1 | **Tasks** | `GET /agent/scheduled-tasks` | On mount + after each mutation |
| 2 | **Channels** | `GET /agent/active-chats` | On tab focus |
| 3 | **Branches** | `GET /agent/branches` | On tab focus |

Tab switching is instant; previously loaded data is cached in component state.

### Tab 1 — Tasks

- **Filter/search input** at top (client-side, searches `id`, `summary`, `chat_jid`)
- **Status group headers**: Active · Paused · Completed (collapsible, badge count)
- **Task card** (one per row):
  - `summary` (truncated to ~60 chars, full on hover)
  - Type badge: `agent` / `shell` / `internal` — `cron` / `interval` / `once`
  - Schedule value (e.g. `0 9 * * *` or `30m`)
  - Chat JID badge (links to that chat)
  - Next run / last run times (relative, e.g. "in 4h", "3h ago")
  - Last result indicator (ok / error / —)
  - Controls: `▶ Resume` (paused only) · `⏸ Pause` (active only) · `🗑 Delete` (all, with confirmation dialog)
- **Empty state**: "No scheduled tasks. Use `/schedule` in chat to create one."
- **Create** button in panel header → sends `/schedule help` to current chat tab or opens inline wizard (deferred)

### Tab 2 — Channels

- List of active chat sessions from `GET /agent/active-chats`
- Each row: channel name / JID, message count, last activity
- Actions: **Switch** (navigate to that chat), **Rename** (`POST /agent/rename-jid`)
- Empty state: "No active channels"

### Tab 3 — Branches

- List of conversation branches from `GET /agent/branches`
- Each row: branch name, parent JID, creation date, message count
- Actions: **Fork** · **Rename** · **Prune** · **Restore** · **Purge** (destructive, confirmation required)
- Empty state: "No branches"

### Style constraints

- All styles in BEM CSS classes — no inline styles
- Panel width consistent with other sidebar panels
- Loading skeleton while fetching (match AddonsPanel pattern)
- Error banner on fetch failure (match AddonsPanel)
- Auth error (`401`) → "Authenticate to view tasks"

## Implementation Paths

### Path A — IPC/tool interface for mutations (lower risk)

Mutations are routed through `POST /agent/respond` by sending the appropriate slash command text (e.g. `/tasks pause abc123`). No new HTTP endpoints needed. Side-effect: commands appear in the chat timeline.

- ✅ No backend changes for mutations
- ✅ Consistent with existing tool CLI behavior
- ⚠️ Visible as chat messages — can be surprising

### Path B — Thin HTTP mutation endpoints (cleaner UX)

Add three new endpoints in `dispatch-agent.ts` backed by direct IPC calls:

| Endpoint | Payload | IPC message |
|---|---|---|
| `POST /agent/task-pause` | `{ taskId }` | `pause_task` |
| `POST /agent/task-resume` | `{ taskId }` | `resume_task` |
| `POST /agent/task-cancel` | `{ taskId }` | `cancel_task` |

- ✅ No chat timeline side-effects
- ✅ Proper HTTP semantics (status codes, error bodies)
- ⚠️ Three new endpoints + handler methods needed
- **Recommended** — follow the branch endpoint pattern already in `dispatch-agent.ts`

### Shared steps (both paths)

1. Add `GET /agent/scheduled-tasks` endpoint wired to `listScheduledTasks()`
2. Register in `dispatch-agent.ts` alongside existing agent endpoints
3. Add rate-limit rule in `rate-limit-rules.ts` (GET: standard; POSTs: standard)
4. Scaffold `TasksPanel` component in `runtime/web/src/components/`
5. Add `TasksPanel` to activity bar registration
6. Implement the three-tab layout with card renderers
7. Wire fetch → card render → action → refetch cycle

## Acceptance Criteria

### Activity Bar
- [ ] New `tasklist` codicon icon appears between Dashboards and Settings
- [ ] Clicking the icon opens/closes the Tasks sidebar panel
- [ ] Panel toggle does not affect other panels or active chat state

### Tasks Tab
- [ ] Tasks fetched from `GET /agent/scheduled-tasks` on panel mount
- [ ] Tasks grouped by status: Active, Paused, Completed
- [ ] Each task card displays: summary, type badges, schedule value, chat JID, next/last run, last result
- [ ] Pause control visible and functional for active tasks
- [ ] Resume control visible and functional for paused tasks
- [ ] Delete control visible for all tasks; requires confirmation before POSTing
- [ ] After mutation (pause/resume/delete), task list refreshes automatically
- [ ] Filter input narrows cards by summary, ID, or JID (client-side)
- [ ] Status group badge counts update after mutations
- [ ] Empty state shown when no tasks exist (all groups empty)
- [ ] Error banner shown when `/agent/scheduled-tasks` returns non-2xx
- [ ] `401` response shows auth-specific message

### Channels Tab
- [ ] Sessions fetched from `GET /agent/active-chats` on tab focus
- [ ] Each session row shows channel name / JID, message count, last activity
- [ ] Switch action navigates to that chat
- [ ] Rename action calls `POST /agent/rename-jid` and refreshes list
- [ ] Empty state shown when no active channels

### Branches Tab
- [ ] Branches fetched from `GET /agent/branches` on tab focus
- [ ] Each branch row shows name, parent, creation date, message count
- [ ] Fork / Rename / Prune / Restore / Purge actions work and refresh list
- [ ] Destructive actions (Purge) require confirmation
- [ ] Empty state shown when no branches exist

### Cross-cutting
- [ ] All CSS in BEM classes; no inline styles
- [ ] Loading skeleton shown during fetch
- [ ] Panel is responsive within normal sidebar width
- [ ] No regression in Addons, Settings, or Dashboards panels
- [ ] `bun run typecheck` clean
- [ ] `make build-web` succeeds

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [x] Real-browser smoke test
- [ ] Existing tests to rerun are listed
- [ ] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? **Yes** — panel open/close, tab switching, task actions

### Existing tests to rerun
- `runtime/test/scheduled-task-query-service.test.ts`
- `runtime/test/runtime/scheduler.test.ts`
- `runtime/test/extensions/extensions-scheduled-tasks.test.ts`
- `runtime/test/web/addons-handler.test.ts` (reference panel regression baseline)
- `bun run typecheck`
- `make build-web`

### New regression coverage to add
- [ ] Unit: `GET /agent/scheduled-tasks` handler — all query params, empty result, limit clamping
- [ ] Unit: `GET /agent/scheduled-tasks` returns correct response shape matching `ScheduledTaskListResult`
- [ ] Unit: Mutation endpoint (Path B) — pause/resume/cancel with valid and invalid taskIds
- [ ] Integration: Panel fetch → card render cycle (happy path and 401 path)
- [ ] Component: Status group count badges update correctly after mutation + refetch
- [ ] Component: Filter input reduces visible cards without triggering re-fetch
- [ ] Smoke: Open Tasks panel → Tasks tab loads → Channels tab loads → Branches tab loads
- [ ] Smoke: Pause a task → list refreshes → task appears in Paused group
- [ ] Smoke: Delete a task → confirmation → task disappears from list
- [ ] Smoke: Panel close → re-open → state resets (or is cached as designed)

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean (`bun run typecheck`)
- [ ] Web build clean (`make build-web`)
- [ ] Docs updated: `docs/settings-and-addons.md` or new `docs/tasks-panel.md`
- [ ] Operational impact assessed (new endpoint rate-limit rule in place)
- [ ] Follow-up tickets created for deferred scope (inline task creation wizard)
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated (`status`, `updated`)

## Notes

- `listScheduledTasks()` already exists and is well-tested — the backend work is primarily wiring an HTTP handler around it.
- Default `limit` is 20; the UI should indicate when results are truncated and offer a "load more" or "show all" affordance.
- IPC mutations (`pause_task`, `resume_task`, `cancel_task`) are synchronous and do not need polling; a single refetch after the action is sufficient.
- `include_latest_run_log=true` adds one extra DB query per task — use only on the task detail view (future ticket), not on the list endpoint by default.
- Task `chat_jid` links the task to a specific channel; the UI should make this navigable (click badge → switch to that channel).
- For the Channels tab, "Switch" should update the active chat context without closing the panel.
- Branch "Purge" is irreversible — modal confirmation must clearly state this.
- Internal tasks (e.g. `dream`) should be displayed but mutation controls should be disabled or hidden to avoid breaking background maintenance.

## Links

- `runtime/src/scheduled-task-query-service.ts` — `listScheduledTasks()`, `ScheduledTaskInspectionRecord`, `ScheduledTaskListResult`
- `runtime/src/ipc.ts` — IPC message types: `schedule_task`, `pause_task`, `resume_task`, `cancel_task`, `update_task`
- `runtime/src/extensions/scheduled-tasks.ts` — `scheduled_tasks` tool implementation
- `runtime/src/channels/web/http/dispatch-agent.ts` — existing HTTP endpoint registration (add new endpoints here)
- `runtime/src/channels/web/http/rate-limit-rules.ts` — rate-limit configuration for new endpoints
- `runtime/src/channels/web/handlers/addons.ts` — reference handler pattern
- `runtime/web/src/components/` — web component directory (add `TasksPanel` here)
- `runtime/test/scheduled-task-query-service.test.ts` — existing query service tests
- `runtime/test/web/addons-handler.test.ts` — reference test for handler pattern
- `workitems/regression-test-planning-reference.md` — regression class reference

## Updates

### 2026-04-29
- Created ticket for Tasks panel wired to Activity Bar.
- Researched codebase: confirmed no existing `GET /api/tasks` HTTP endpoint; task data lives in SQLite via `listScheduledTasks()` in `scheduled-task-query-service.ts`.
- Identified IPC message types for mutations (`pause_task`, `resume_task`, `cancel_task`) in `ipc.ts`.
- Confirmed existing HTTP endpoints for Channels (`/agent/active-chats`, `/agent/rename-jid`) and Branches (`/agent/branches`, branch mutation endpoints) in `dispatch-agent.ts`.
- Refined to 10/10 spec: full API shapes, implementation paths, comprehensive ACs, test plan with regression classes, Definition of Done.
