# PiClaw Monaco — Backlog & Current State

Updated: 2026-04-29 (post-review)

## Vision

Fork of rcarmo/piclaw replacing the embedded GUI with a **VS Code-style shell layout** using cherry-picked web components. The agent conversation remains the primary interaction, wrapped in a familiar developer shell.

### Target Layout

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
│ y  │  🤖 = focus chat  │  [Compose box — multiline]         │
│    │  ⚙️ = settings    ├────────────────────────────────────┤
│ B  │                   │  TERMINAL (ghostty-web, docked)     │
│ a  │                   ├────────────────────────────────────┤
│ r  │                   │  STATUS BAR                         │
└────┴──────────────────┴────────────────────────────────────┘

Status Bar:
[● Connected] [provider / model  thinking  ● tokens/total] [↗ CPU%  ··· RAM] [date — HH:MM] [Terminal]
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
- **Terminal**: ghostty-web (WASM-based terminal emulator)
- **Backend**: Unchanged piclaw (Bun, WebSocket/SSE, REST API)
- **Docker**: debian:trixie-slim (same as upstream)
- **CI**: GitHub Actions (build + typecheck on PR, Docker publish on manual/tag)
- **Registry**: ghcr.io/cjnova/piclaw-monaco

## Completed (Waves 1–9)

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
| 9 | Real terminal (ghostty-web) + Full command palette + Status bar + Model picker |

### What Works Now

- [x] Activity Bar with 5 icons (Workspace, Search, Addons, Agent, Settings)
- [x] Click icon = toggle sidebar; click different icon = switch + open
- [x] Sidebar with titled header, resizable via drag handle (persisted)
- [x] Panel router: shows placeholder per panel
- [x] **Terminal**: real ghostty-web terminal connected to backend PTY via WebSocket
- [x] Terminal dock: show/hide (Ctrl+\`/º), resize, maximize, pop-out, new-tab, close
- [x] **Terminal standalone page**: `/static/terminal.html` for popout/new-tab
- [x] **Command palette**: Ctrl+Shift+P, fuzzy search, keyboard nav (arrows, PgUp/PgDn, Home/End)
- [x] **Real piclaw commands**: palette fetches `/agent/commands` (slash commands, extensions, skills)
- [x] **18 local UI commands**: navigation, terminal, theme, session, general
- [x] **Slash trigger**: typing "/" in chat auto-opens command palette
- [x] **Backspace to close**: pressing Backspace on empty palette input closes it
- [x] **Status bar**: connection dot, model/context badge, CPU/RAM stats, date/time clock, Terminal button
- [x] **Model picker**: click badge → dropdown with available models, switch via `/model <id>`
- [x] **Thinking level picker**: click thinking level → dropdown, switch via `/thinking <level>`
- [x] **Context indicator**: filled circle (green/yellow/red) + consumed/total tokens (1M notation), click to compact
- [x] **Model dropdown**: shows context window size per model (e.g., 200k, 1.0M)
- [x] **Chat compose box**: multiline textarea, auto-grows up to 25vh, thin scrollbar
- [x] **Theme toggle**: dark/light via command palette
- [x] **Theme**: Catppuccin Mocha dark, brighter textMuted (#9399b2) for readability
- [x] WebSocket connection manager with auto-reconnect
- [x] Font stack loaded (IBM Plex Sans, JetBrains Mono NF, codicons)
- [x] Layout persists across refreshes (localStorage)
- [x] CI: build + typecheck on every push/PR
- [x] Code review hardening pass (delta CPU stats, stale state detection, CSRF, AbortController, noopener)
- [x] Refactored all inline styles to BEM CSS classes
- [x] Switched system metrics to builtin `/agent/system-metrics` (CPU, RAM, RSS, SWP)
- [x] Terminal sends `clear` on panel close

### New Keyboard Shortcuts (Wave 9)

| Shortcut | Action |
|---|---|
| Ctrl+Shift+P | Command palette |
| Ctrl+\` / Ctrl+º | Toggle terminal |
| Ctrl+B | Toggle sidebar |
| Ctrl+Shift+E | Show Workspace (Explorer) |
| Ctrl+Shift+F | Show Search |
| Ctrl+Shift+X | Show Addons |
| Ctrl+Shift+A | Show Agent (collapse sidebar) |
| Ctrl+, | Show Settings |

## Remaining Work

### Wave 10 — Real Content ✅

| Task | Description | Status |
|---|---|---|
| 011-task-tree-data-provider | Backend API for workspace file listing | ✅ |
| 012-task-tree-view-component | File tree component in Workspace sidebar | ✅ |
| 015-task-message-list-component | Chat message list in Agent panel | ✅ |
| 029-task-extensions-api-endpoint | Backend API for installed extensions | ✅ |
| 037-task-search-backend | Backend search endpoint (ripgrep) | ✅ (uses existing /search) |
| 038-task-search-sidebar-ui | Search input + results UI in sidebar | ✅ |
| render-extension-pages | Dashboards panel — extension page discovery + iframe | ✅ |
| chat-send | Wire compose box to POST /agent/message | ✅ |

### Wave 10b — Upstream Sync & Foundation

| Task | Description | Status |
|---|---|---|
| merge-upstream-v2-1-0 | Merge upstream v2.1.0 tag, resolve conflicts, rebuild | ⏳ |
| adopt-security-freeze-extension-routes | Verify extension route freeze works with our frontend | ⏳ |
| configure-dev-provider | Configure model provider on dev instance for testing | ⏳ |
| verify-all-panels-post-merge | Smoke test all panels after merge | ⏳ |

### Wave 10c — Settings Panel

| Task | Description | Status |
|---|---|---|
| wire-settings-panel-to-piclaw-config | Full settings panel (General, Providers, Models, Appearance, etc.) | ⏳ |
| adopt-passkey-authentication-support | Wire passkey enrollment/management into Settings | ⏳ |
| wire-passkey-management-to-settings | Passkey list/register/delete UI | ⏳ |
| wire-tasks-panel-to-activity-bar | Tasks panel in Activity Bar (scheduled task management) | ⏳ |

### Wave 11 — Full Functionality

| Task | Description |
|---|---|
| 016-task-markdown-renderer | Markdown + code + KaTeX + Mermaid rendering |
| 017-task-streaming-handler | Real-time agent streaming in chat |
| 018-task-adaptive-cards-renderer | Adaptive cards in chat |
| 019-task-widget-iframe-host | Dashboard widgets in chat |
| 024-task-terminal-tabs | Multi-tab terminal |
| 025-task-terminal-keybindings | Terminal keyboard shortcuts |
| 030-task-extensions-list-component | Addons list UI |
| 032-task-extension-details-component | Addon details view |

### Future (V2)

- Monaco editor tabs in main panel
- Split views (editor + chat)
- Diff viewer
- LSP/IntelliSense integration

## Development

```bash
# Clone
git clone https://github.com/cjnova/piclaw-monaco.git
cd piclaw-monaco

# Install
bun install

# Build vendor assets (ghostty-web WASM, etc.)
cd runtime && bun run build:vendor:ghostty-web

# Build frontend
bun run runtime/web/frontend/build.ts

# Dev (watch mode)
bun run runtime/web/frontend/build.ts --watch

# Run (use --workspace to avoid inheriting main piclaw auth)
bun run runtime/src/index.ts --port 9090 --workspace /workspace/piclaw-monaco/workspace

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

## Notes

- Activity Bar icons: click active = toggle sidebar, click different = switch + open
- Terminal: real ghostty-web (WASM), connects to backend PTY at `/terminal/ws`
- Anonymous terminal access via `?client=<uuid>` query param (stored in localStorage)
- All layout state persisted in localStorage
- Backend is completely untouched — all changes are in `runtime/web/frontend/` and `runtime/web/static/`
- Model/context badge polls `/agent/status` (5s) and `/agent/context` (10s)
- System stats poll `/api/system-stats` (3s) — CPU % and RAM (no frequency in containers)
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
