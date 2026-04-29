# Upstream Sync: rcarmo/piclaw v2.1.0

## Summary

119 commits since our fork point. Key themes:
- Side-prompt feature (streaming, UI, thread management)
- Passkey/WebAuthn authentication
- Tool execution pipeline refactor (phases 1+2)
- Smart compaction improvements
- SDK lifecycle events (tool_aborted, session_ready, onDispose)
- Observability/diagnostics hooks
- Watchdog external health-check
- fleet_batch tool

## Sync Strategy

- Merge `v2.1.0` tag into our `main`
- Keep OURS for: `runtime/web/frontend/`, `runtime/web/static/css/`, `runtime/web/static/dist/`, `runtime/web/static/index.html`, `runtime/web/static/terminal.html`, `docs/BACKLOG.md`
- Accept THEIRS for: `runtime/src/`, `package.json`, `Dockerfile`, `runtime/vendor-manifests/`
- Rebuild vendor assets + frontend after merge

## Tickets to Create (10/10 scored)

### Must-do (security/build)

1. **merge-upstream-v2.1.0-into-monaco-fork** — Perform the git merge, resolve conflicts, rebuild, verify
2. **adopt-security-freeze-extension-routes** — Validate the route-freeze security change works with our frontend
3. **adopt-passkey-authentication-support** — Wire passkey enrollment/management into our Settings panel

### New capabilities to expose in Monaco UI

4. **wire-side-prompt-panel-to-monaco** — Add a side-prompt compose/response panel (new API: side-prompt endpoints)
5. **wire-fleet-batch-to-command-palette** — Expose fleet_batch via command palette or dedicated UI
6. **wire-provider-billing-tracking-to-status** — Show multi-provider billing/usage in status bar or settings
7. **wire-terminal-profile-selector** — Add terminal profile selection (upstream added this)
8. **wire-passkey-management-to-settings** — Passkey enrollment/deletion UI in Settings panel

### Backend improvements to leverage

9. **leverage-smart-compaction-improvements** — Context ring should reflect improved compaction behavior
10. **leverage-tool-lifecycle-events-in-chat** — Show tool_aborted, richer tool events in MessageList

## Breaking Changes to Watch

- `refactor(core): move tool definitions to extension surface` — may change /agent/commands response shape
- `refactor: tool execution pipeline` — may change tool call content_blocks format
- `security: freeze extension route registry` — routes registered after startup will fail
- `fix: abort signals for running tools` — tool_use blocks may now include abort status

## After Merge Checklist

- [ ] `bun install` (new deps)
- [ ] Rebuild vendor: `cd runtime && bun run build:vendor:ghostty-web`
- [ ] Rebuild frontend: `bun run runtime/web/frontend/build.ts`
- [ ] Typecheck: `bunx tsc -p runtime/web/frontend/tsconfig.json --noEmit`
- [ ] Verify terminal still works
- [ ] Verify SSE connection
- [ ] Verify model picker / context ring
- [ ] Verify search
- [ ] Create `.piclaw-monaco-upstream-tag` file with `v2.1.0`
