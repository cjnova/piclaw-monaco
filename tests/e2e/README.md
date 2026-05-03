# E2E / UX Regression Tests

BDD-style Playwright tests using Gherkin `.feature` files to capture UX regressions.

## Structure

```
tests/e2e/
├── features/          # Gherkin .feature files grouped by area
│   ├── compose/       # Compose box, queue, slash commands
│   ├── timeline/      # Message rendering, scroll, pills
│   ├── sessions/      # Session switching, archiving, naming
│   ├── settings/      # Settings dialog open/close, panes
│   ├── editor/        # File editing, tabs, zen mode
│   ├── workspace/     # Explorer, uploads, drag/drop
│   ├── panes/         # Popouts, VNC, terminal, viewers
│   └── mobile/        # iPad/iPhone specific (swipe, PWA, touch)
├── steps/             # Step definitions (TypeScript)
├── support/           # Hooks, world, helpers
│   ├── world.ts       # Custom Playwright World
│   ├── auth.ts        # E2E auth bootstrap helper
│   └── selectors.ts   # Shared CSS/aria selectors
├── fixtures/          # Test data (files, images, messages)
├── reports/           # HTML/JSON test reports (gitignored)
└── playwright.config.ts
```

## Stack

- **Playwright** — browser automation
- **@cucumber/cucumber** + **playwright-bdd** — Gherkin → Playwright step binding
- **Bun** — test runner and script execution

## Running

```bash
cd tests/e2e
bun run test              # all features
bun run test:compose      # compose area only
bun run test:mobile       # mobile/iPad scenarios
```

## CI trigger model

E2E tests run on CI **only** when a prerelease tag is pushed:

| Trigger | Runs E2E? |
|---|---|
| Push to `main` | No |
| Pull request | No |
| Tag `v*-ux` or `v*-prerelease` | **Yes** |
| `workflow_dispatch` | **Yes** (manual) |
| Final release tag `v*` (no suffix) | No |

This keeps standard commits fast while ensuring every release candidate passes the full UX regression suite before the final tag is cut.

See the top-level `AGENTS.md` for the full release process.

## Writing tests

1. Write a `.feature` file describing the user story
2. Implement step definitions in `steps/`
3. Use `support/selectors.ts` for stable element references
4. Run against the microvm-ui-test instance (not local)

## Bug taxonomy (from git history)

The 198 UX fixes since March 2026 cluster into these regression categories:

### Rendering / Layout
- Double mounts, DOM multiplication, BodyPortal loops
- Timeline cross-session merge on switch
- Table column collapse, markdown rendering
- Favicon not updating (Safari WebP, caching)
- Spinner/loading states stuck or missing

### Compose Box
- Cursor rollback on errors
- Queue state overwrite races
- Stop button theming/sizing
- Slash command typeahead selection
- Mobile compose jumps

### Session Management
- Swipe blocked on content / Apple Pencil
- Session ordering / sort
- Archive/delete flows
- Name broadcast via SSE

### Settings Dialog
- Open race conditions (multiple fixes)
- Lazy loading timing
- Stepper field input

### Editor
- Flicker on callback deps
- Singleton CodeMirror enforcement
- Dirty tab close confirmation
- Preview splitter flicker

### Panes / Popouts
- VNC touch on iPad
- Popout handoff failures
- Terminal reattach
- Viewer stability

### SSE / Reconnect
- iOS resume reconnect
- Delta resync after reconnect
- Rate limit window extension
- Auto-reload cascades
