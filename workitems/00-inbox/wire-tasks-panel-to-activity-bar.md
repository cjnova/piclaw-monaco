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

Add a new Activity Bar icon for **Tasks** (codicon: `tasklist` or `checklist`) that opens a sidebar panel listing piclaw scheduled tasks. Same philosophy as Addons and Settings — fetch from backend API, display in sidebar, allow interaction.

Piclaw has a built-in task scheduler (`scheduled_tasks` tool) with cron/interval/one-time tasks. The web UI should expose this via a dedicated panel showing active, paused, and completed tasks with controls to pause/resume/delete.

## Backend APIs

- `GET /agent/tasks` or use the existing task scheduler internals (check `runtime/src/` for task-related endpoints)
- The `scheduled_tasks` system stores tasks with: id, schedule_type (cron/interval/once), schedule_value, status (active/paused/completed), task_kind (agent/shell), command/prompt, last_run info
- Look at how the `/agent/queue-state` endpoint works for reference

## Design

### Horizontal Tabs

The Tasks panel uses horizontal tabs (same pattern as Dashboards/extension pages) to host multiple management views:

| Tab | Description | Backend API |
|---|---|---|
| **Tasks** | Scheduled tasks (cron/interval/once) — create, pause, resume, delete | `scheduled_tasks` system |
| **Channels** | Active web chat sessions — list, switch, rename | `GET /agent/active-chats`, `POST /agent/rename-jid` |
| **Branches** | Conversation branches — fork, rename, prune, restore | `GET /agent/branches`, `POST /agent/branch-fork`, `POST /agent/branch-rename`, `POST /agent/branch-prune`, `POST /agent/branch-restore` |

Each tab fetches its own data independently. Switching tabs is instant (cached state). The tab bar matches the style used in the Dashboards panel (`.chat-tabs` pattern).

Activity Bar: Add a new icon (codicon `tasklist`) between Dashboards and Settings.

### Sidebar panel shows:
- Filter/search input at top
- Task list grouped by status: Active, Paused, Completed
- Each task card shows:
  - Task name/ID
  - Type badge (agent/shell, cron/interval/once)
  - Schedule value (cron expression or interval)
  - Last run time + status
  - Controls: [▶ Resume] [⏸ Pause] [🗑 Delete]
- Empty state: "No scheduled tasks"
- Create task button (opens form or sends /schedule command)

### Actions:
- Pause → POST to pause endpoint
- Resume → POST to resume endpoint  
- Delete → POST to delete endpoint (with confirmation)
- Create → form or redirect to chat with /schedule command

## Acceptance Criteria

- [ ] New Activity Bar icon for Tasks appears between Dashboards and Settings
- [ ] Clicking opens sidebar with task list
- [ ] Tasks fetched from backend API on mount
- [ ] Horizontal tab bar with Tasks, Channels, Branches tabs
- [ ] Tasks grouped by status (active/paused/completed)
- [ ] Each task shows: ID, type, schedule, last run, status
- [ ] Pause/Resume/Delete controls work
- [ ] Channels tab shows active chat sessions with switch/rename controls
- [ ] Branches tab shows conversation branches with fork/prune/restore controls
- [ ] Filter input searches by task name/ID
- [ ] Empty state shown when no tasks exist
- [ ] Handles auth errors gracefully (401 → "Authenticate to view tasks")
- [ ] All styles in CSS (BEM), no inline styles

## Implementation

Reuse the pattern from AddonsPanel:
- Fetch task data on mount
- Render cards with controls
- Actions POST to API with loading states
- Refresh list after mutations

## Test Plan

- [ ] Verify tasks display correctly
- [ ] Create a task via chat, verify it appears
- [ ] Pause/resume/delete work and list refreshes
- [ ] Filter works
- [ ] Auth error handled

## Definition of Done

- [ ] All acceptance criteria satisfied
- [ ] Build + typecheck pass
- [ ] Tested with live scheduled tasks
- [ ] No regression in other panels

## Links

- `runtime/src/` — look for task scheduler endpoints
- `scheduled_tasks` tool documentation
- AddonsPanel as reference implementation pattern
