# Visual UI Mode

PiClaw ships two web frontend modes. The default is `classic` — the original
server-rendered-HTML + vanilla-JS interface. The **visual** mode is a modern
Preact-based single-page application with a VS Code–style layout.

## Switching modes

Set the `PICLAW_WEB_UI_MODE` environment variable before starting PiClaw:

```bash
# Use the visual UI
PICLAW_WEB_UI_MODE=visual bun run start

# Return to the classic UI (default)
PICLAW_WEB_UI_MODE=classic bun run start
```

The default is `classic`, so no change is needed if you do not set this variable.

## Building the visual UI

Prerequisites: [Bun](https://bun.sh) installed.

```bash
# Install dependencies (one-time)
bun install

# Build the visual frontend
bun run build:web:visual
```

Output is written to `runtime/web/static/visual/dist/`.

The build compiles:
- `app.bundle.js` — Preact SPA entry point
- `editor.bundle.js` — CodeMirror-based editor extension
- `app.bundle.css` — bundled styles

## Architecture

```
runtime/web/
├── frontend/            # Preact source (TypeScript + TSX)
│   ├── build.ts         # esbuild build script
│   └── src/
│       ├── index.tsx    # SPA entry point
│       ├── App.tsx      # Root component
│       ├── api/         # Typed API client
│       ├── app/         # App-level state and routing
│       ├── components/  # Shared UI components
│       ├── hooks/       # Custom React/Preact hooks
│       ├── panels/      # Collapsible agent-status panels
│       ├── services/    # Background services (SSE, storage)
│       ├── theme/       # VS Code theme engine
│       ├── types/       # Shared TypeScript types
│       └── utils/       # Markdown, mermaid, format utilities
└── static/
    └── visual/          # Built output (served at runtime)
        ├── index.html   # SPA shell
        ├── css/         # Pre-built CSS sheets
        └── dist/        # Compiled JS + CSS bundles
```

The frontend source lives in `runtime/web/frontend/`. Built assets are output
to `runtime/web/static/visual/dist/` and served directly by the HTTP layer.

## Key features

| Feature | Description |
|---|---|
| **Preact SPA** | Full single-page app; no page reloads between views |
| **Dark theme** | VS Code–style dark color scheme out of the box |
| **VS Code theme import** | Import `.json` VS Code color themes; 17 bundled themes included |
| **Collapsible panels** | Agent thought, draft, output, and tool-call panels collapse/expand |
| **Activity bar** | Icon sidebar for navigation (chat, workspace, settings) |
| **Command palette** | ⌘K / Ctrl+K quick-open for actions and navigation |
| **Settings pane** | In-app settings panel; no page reload required |
| **OverlayShell** | Slide-over overlay for secondary views |
| **CopyButton** | One-click copy on all code and message blocks |
| **CustomSelect** | Keyboard-navigable dropdown component |
| **Shared vendor assets** | Fonts, marked, KaTeX, Mermaid loaded from `static/common/` |

## Key differences from classic UI

| Aspect | Classic | Visual |
|---|---|---|
| Framework | Vanilla JS + preact-htm | Preact with JSX (TSX) |
| Build | Bundled into `static/classic/dist/` | Bundled into `static/visual/dist/` |
| Theming | CSS custom properties | VS Code theme engine + import |
| Layout | Single-column chat | Multi-panel with activity bar |
| Panels | Inline in chat | Collapsible side/overlay panels |

## What is NOT changed

- The `classic/` UI is untouched
- All backend/API code is unchanged
- The default mode remains `classic`
- Login page (`login.html`) is shared between both modes via `static/common/`

## Maintained at

Source: [cjnova/piclaw-monaco](https://github.com/cjnova/piclaw-monaco)
