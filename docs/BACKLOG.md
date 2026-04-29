# PiClaw Monaco — Backlog & Current State

Updated: 2026-04-29

## Vision

Fork of rcarmo/piclaw replacing the embedded GUI with a **VS Code-style shell layout** using cherry-picked web components. The agent conversation remains the primary interaction, wrapped in a familiar developer shell.

### Target Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  ⚡ PiClaw Monaco             [Ctrl+Shift+P Command Palette]        │
├────┬─────────────┬──────────────────────────────────────────────────┤
│ 📁 │ Sidebar     │  MAIN PANEL                                     │
│ 🔍 │ (contextual)│  (switches on Activity Bar selection)            │
│ 🧩 │             │                                                  │
│ 🤖 │             │  📁 Workspace → file tree + actions              │
│ ⚙️ │             │  🔍 Search → cross-file search results           │
│    │             │  🧩 Addons → browse/manage extensions            │
│ A  │             │  🤖 Agent → chat/timeline (primary)              │
│ c  │             │  ⚙️ Settings → piclaw config panels              │
│ t  │             │                                                  │
│ i  │             ├──────────────────────────────────────────────────┤
│ v  │             │  TERMINAL (docked bottom, resizable)              │
│ i  │             │  [maximize] [new-tab] [pop-out] [close]          │
│ t  │             ├──────────────────────────────────────────────────┤
│ y  │             │  STATUS BAR (connection, terminal toggle)         │
│ Bar│             │                                                  │
└────┴─────────────┴──────────────────────────────────────────────────┘
```

## Architecture

```
upstream: rcarmo/piclaw (full runtime with web UI)
     │
     └─ fork ──→ cjnova/piclaw-monaco
                    │
                    ├── runtime/web/frontend/  ← NEW Preact SPA (VS Code layout)
                    ├── runtime/web/static/    ← built assets served by backend
                    ├── runtime/src/           ← UNTOUCHED backend (channels, tools, agent)
                    └── Dockerfile, CI, etc.
```

### Tech Stack
- **Frontend**: Preact + Preact Signals + esbuild
- **Icons**: @vscode/codicons
- **Fonts**: IBM Plex Sans (UI), JetBrains Mono NF (code/terminal), Inter (fallback)
- **Backend**: Unchanged piclaw (Bun, WebSocket/SSE, REST API)
- **Docker**: debian:trixie-slim (same as upstream)
- **CI**: GitHub Actions (build + typecheck on PR, Docker publish on manual/tag)
- **Registry**: ghcr.io/cjnova/piclaw-monaco

## Completed (Waves 1–8+)

| Wave | Tasks Done |
|---|---|
| 1 | Fork repo, set up dev environment |
| 2 | Strip old frontend SPA |
| 3 | Scaffold new Preact SPA + esbuild pipeline |
| 4 | Wire backend API (WebSocket client) + Codicons |
| 5 | Activity Bar + Dockerfile |
| 6 | Panel router + Docker Compose |
| 7 | Split pane (now inline resize) + Command registry + GHCR workflow |
| 8 | Sidebar container + Bottom panel (terminal dock) + Command palette |
| — | Layout fixes: proper flex, no position:fixed, sidebar toggle via Activity Bar |
| — | Terminal: maximize, pop-out, new-tab, resize drag handle |
| — | Fonts: IBM Plex Sans + JetBrains Mono NF + codicons |
| — | LocalStorage persistence (sidebar width, collapsed, terminal state) |
| — | Renamed: Explorer→Workspace, Extensions→Addons |

### What Works Now

- [x] Activity Bar with 5 icons (Workspace, Search, Addons, Agent, Settings)
- [x] Click icon = toggle sidebar; click different icon = switch + open
- [x] Sidebar with titled header, resizable via drag handle (persisted)
- [x] Panel router: shows placeholder per panel
- [x] Terminal dock: show/hide (Ctrl+`/º), resize, maximize, pop-out, new-tab, close
- [x] Command palette: Ctrl+Shift+P, fuzzy search, keyboard nav
- [x] Status bar: connection dot + Terminal button
- [x] WebSocket connection manager with auto-reconnect
- [x] Font stack loaded (IBM Plex Sans, JetBrains Mono NF, codicons)
- [x] Layout persists across refreshes
- [x] CI: build + typecheck on every push/PR
- [x] Docker: multi-arch image (manual publish or tag)

## Remaining Work

### Wave 9 — Functional Panels

| Task | Description | Status |
|---|---|---|
| 010-task-layout-persistence | Persist layout (DONE — merged into fixes above) | ✅ |
| 023-task-xterm-component | Mount real xterm.js in terminal panel | ⏳ |
| 036-task-register-commands | Register all built-in commands in palette | ⏳ |

### Wave 10 — Real Content

| Task | Description | Status |
|---|---|---|
| 011-task-tree-data-provider | Backend API for workspace file listing | ⏳ |
| 012-task-tree-view-component | File tree component in Workspace sidebar | ⏳ |
| 015-task-message-list-component | Chat message list in Agent panel | ⏳ |
| 029-task-extensions-api-endpoint | Backend API for installed extensions | ⏳ |
| 037-task-search-backend | Backend search endpoint (ripgrep) | ⏳ |

### Wave 11+ — Full Functionality

| Task | Description |
|---|---|
| 016-task-markdown-renderer | Markdown + code + KaTeX + Mermaid rendering |
| 017-task-streaming-handler | Real-time agent streaming in chat |
| 018-task-adaptive-cards-renderer | Adaptive cards in chat |
| 019-task-widget-iframe-host | Dashboard widgets in chat |
| 020-task-compose-input | Message compose box |
| 024-task-terminal-tabs | Multi-tab terminal |
| 025-task-terminal-keybindings | Terminal keyboard shortcuts |
| 026-task-pty-spawn-service | PTY backend service |
| 027-task-ws-pty-endpoint | WebSocket PTY bridge |
| 030-task-extensions-list-component | Addons list UI |
| 032-task-extension-details-component | Addon details view |
| 038-task-search-sidebar-ui | Search input + toggles UI |
| 039-task-search-results-component | Search results grouped by file |

### Future (V2)

- Monaco editor tabs in main panel
- Split views (editor + chat)
- Diff viewer
- LSP/IntelliSense integration
- Wire ⚙️ Settings to existing piclaw settings API
- Wire 🤖 Agent to existing chat timeline API

## Development

```bash
# Clone
git clone https://github.com/cjnova/piclaw-monaco.git
cd piclaw-monaco

# Install
bun install

# Build frontend
bun run runtime/web/frontend/build.ts

# Dev (watch mode)
bun run runtime/web/frontend/build.ts --watch

# Run
bun run runtime/src/index.ts --port 9090

# Typecheck
bunx tsc -p runtime/web/frontend/tsconfig.json --noEmit
```

## Conventions

- **Branch per task**: `feat/<task-id>`
- **Commit format**: `feat(<task-id>): <description>`
- **PR to main**: squash merge
- **CI gate**: build + typecheck must pass
- **Docker publish**: manual dispatch or version tags only
- **Workitems**: in workspace `workitems/00-inbox/piclaw-monaco/` (kanban style)

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| Ctrl+Shift+P | Command palette |
| Ctrl+` / Ctrl+º | Toggle terminal |
| Ctrl+B | Toggle sidebar |

## Notes

- Activity Bar icons: click active = toggle sidebar, click different = switch + open
- Terminal: resizable (drag top edge), maximizable, pop-out to window or new tab
- All layout state persisted in localStorage
- Backend is completely untouched — all changes are in `runtime/web/frontend/` and `runtime/web/static/`
- Upstream sync: `git fetch upstream && git merge upstream/main`

## Layout Clarification (2026-04-29)

### Main Panel = ALWAYS Chat
The central/main panel is **always** the chat timeline. It never switches. Activity Bar icons only control the **left sidebar** content.

### Sidebar Panels

**📁 Workspace** (split vertically):
```
┌─────────────────────┐
│ WORKSPACE           │
├─────────────────────┤
│ File tree           │
│  ▸ notes/       27  │
│  ▸ repos/           │
│    file.md          │ ← selected
│  ▸ workitems/    7  │
├─────────────────────┤
│ file.md [+][✏️][🗑][↓]│
│ type: markdown      │
│ size: 11.1 KB       │
│ modified: date      │
├─────────────────────┤
│ PREVIEW             │
│ (rendered markdown   │
│  or folder donut     │
│  chart)              │
└─────────────────────┘
```

When **folder** selected: action bar shows `[+] create [↑] upload [↓] download zip` + donut chart preview
When **file** selected: action bar shows `[+] create [✏️] edit [🗑] delete [↓] download` + metadata + rendered preview (markdown, code, etc.)

**🔍 Search**: search input + results (future)
**🧩 Addons**: extension list + details (future)
**🤖 Agent**: focuses compose box (chat is always visible)
**⚙️ Settings**: existing piclaw settings panels

### Updated Target Layout
```
┌────┬──────────────────┬────────────────────────────────────┐
│    │  SIDEBAR          │  CHAT (always visible)              │
│ A  │  (controlled by   │  Agent messages, streaming          │
│ c  │   Activity Bar)   │  Markdown, code blocks              │
│ t  │                   │  Adaptive cards, widgets            │
│ i  │  📁 = file tree   │                                    │
│ v  │       + preview   │                                    │
│ i  │  🔍 = search      │                                    │
│ t  │  🧩 = addons      │                                    │
│ y  │  🤖 = focus chat  │  [Compose box]                     │
│    │  ⚙️ = settings    ├────────────────────────────────────┤
│ B  │                   │  TERMINAL (docked bottom)           │
│ a  │                   ├────────────────────────────────────┤
│ r  │                   │  STATUS BAR                         │
└────┴──────────────────┴────────────────────────────────────┘
```

## Recent Fixes (2026-04-29 afternoon)

- Light theme refined: softer grays (#f3f3f3 bg, #e8e8e8 sidebar), VS Code blue accent (#0078d4)
- Workspace split position now persists across refreshes (ref-based localStorage save)
- Terminal pop-out/new-tab opens terminal-only page (/static/terminal.html)
- Activity Bar: click same icon = toggle sidebar, click different = switch + open
- Sidebar header shows display names (Workspace, Addons) not raw IDs
- Removed ‹ collapse button from sidebar (Activity Bar is the toggle)
- All resize handles work: sidebar (horizontal), workspace split (vertical), terminal (vertical)
