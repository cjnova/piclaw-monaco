# Memory System

Structured agent memory for the piclaw-monaco workspace.

## Layout

- `MEMORY.md` — compact startup index (loaded every session)
- `current-state.md` — workspace status snapshot
- `recent-context.md` — rolling window of recent activity
- `user.md` — user preferences and identity
- `project.md` — project architecture and knowledge
- `reference.md` — durable reference facts
- `feedback.md` — corrections and learned preferences
- `days/` — sparse episodic memory per day (only when durable signal exists)
