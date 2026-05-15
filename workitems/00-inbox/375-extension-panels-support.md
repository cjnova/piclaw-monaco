---
id: 375-extension-panels-support
title: "feat: Extension panels support in AgentStatusPanel"
status: inbox
priority: low
created: 2026-05-14
updated: 2026-05-14
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - area:web
  - enhancement
  - parent:370
owner: pi
---

# feat: Extension panels support in AgentStatusPanel

## Summary

The Monaco `AgentStatusPanel` has no support for extension panels. The upstream classic UI accepts an `extensionPanels` prop and renders rich per-extension cards with:

- State-derived header colors
- Pulsing running dot (reuses dot infrastructure from #374)
- Collapsed title + metadata
- Actions with pending-state labels
- Expandable detail section (Markdown)
- Tmux command with copy SVG
- Elapsed/last-activity timestamps
- Series chart area (placeholder; charts implemented in #376)

Reference: `status.ts:208–239` (ticking), `status.ts:648–771` (`renderExtensionPanel`), `agent.css:544–631` (layout), `agent.css:701–763` (copy command block).

## Acceptance Criteria

- [ ] `AgentStatusPanel` accepts a new `extensionPanels?: ExtensionPanel[]` prop
- [ ] `ExtensionPanel` type is defined with fields: `id`, `title`, `meta?`, `state` (`running | idle | error | done`), `detail?` (markdown string), `actions?` (array of `{label, pending?, id}`), `tmuxCommand?`, `lastActivity?` (timestamp), `series?` (reserved for #376)
- [ ] Each extension panel renders a collapsible card with:
  - Header: pulsing dot (running) or state dot, title, meta text, elapsed/last-activity label
  - State-derived header color: `running` → blue, `error` → red, `done` → green, `idle` → grey
  - Expand/collapse toggle
  - Detail section: Markdown-rendered when expanded
  - Actions: button per action; shows pending spinner when `pending: true`
  - Tmux command block: monospace code + copy button (copies to clipboard; reuses copy pattern from #372)
- [ ] Series chart area renders a placeholder `<div>` with `data-series-placeholder` attribute (wired up in #376)
- [ ] CSS for extension panel layout is added (co-located module CSS or new section in `shell.css`; mirrors `agent.css:544–631`)
- [ ] `onExtensionPanelAction(panelId: string, actionId: string): void` callback prop is supported and called on action button click
- [ ] No regression on existing tool/thought/draft/status row rendering
- [ ] TypeScript type check passes (`bun run typecheck`)

## Implementation Paths

### Path A — New `ExtensionPanel` sub-component (recommended)
1. Define `ExtensionPanel` TypeScript interface in a co-located `types.ts`.
2. Create `ExtensionPanelCard.tsx` (new file) rendering the full card UI.
3. Add `extensionPanels` and `onExtensionPanelAction` props to `AgentStatusPanelProps`.
4. Render `<ExtensionPanelCard>` list after the tool/thought cards in `AgentStatusPanel.tsx`.
5. Add CSS module or `shell.css` section.

**Pros:** Clean separation; testable in isolation  
**Cons:** New file; two files to maintain

### Path B — Inline in `AgentStatusPanel.tsx`
Add extension panel rendering directly in the main component, similar to how tool cards are rendered inline.

**Pros:** Consistent with current structure  
**Cons:** File grows further; harder to test isolated card behavior

## Recommended Path

Path A — new sub-component gives better testability and mirrors upstream's separation of concerns.

## Test Plan

- [ ] Unit: `ExtensionPanelCard` renders correct state color for each `state` value
- [ ] Unit: action button calls `onExtensionPanelAction(panelId, actionId)` on click
- [ ] Unit: tmux copy button copies `tmuxCommand` string to clipboard
- [ ] Unit: `running` state dot is pulsing; non-running dot is static
- [ ] Unit: detail section only visible when expanded
- [ ] Visual: inject mock `extensionPanels` data; verify full card renders
- [ ] Regression: no change to tool/thought/draft/status row rendering
- [ ] `bun run typecheck` — zero new errors

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| `extensionPanels` data shape varies by extension | Medium | Define strict TypeScript type; extensions must conform |
| Markdown rendering in detail section (XSS) | Medium | Sanitize with DOMPurify (same as #373) |
| Large number of extension panels slows render | Low | Virtualize list if > 10 panels; unlikely in practice |
| Pulsing dot conflicts with #374 dot CSS | Low | Share CSS classes defined in #374 |

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally (`bun run test`)
- [ ] Type check clean (`bun run typecheck`)
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed (no config changes required — new prop is optional)
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Quality score ≥ 9 recorded in final update
- [ ] Ticket front matter updated (`status`, `updated`, `completed`)
- [ ] Ticket moved to `50-done/`

## Updates

### 2026-05-14
- Created as sub-issue of epic #370 (Monaco status panel parity).
- Scope sourced from gap analysis `/workspace/tmp/ui-status-comparison.md` §6.
- Depends on #374 for dot/spinner infrastructure.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- Blocked by #374 (intent/status indicator improvements) for the running-dot CSS classes.
- Series chart area is a placeholder `<div>` here; #376 wires up the actual SVG chart.
- The `tmuxCommand` copy button can share the copy-button pattern introduced in #372.
- `extensionPanels` prop is optional; existing callers need no changes.

## Links

- `runtime/web/frontend/src/components/AgentStatusPanel.tsx` — add prop + render list
- `runtime/web/src/components/status.ts:208–239` — extension panel ticking
- `runtime/web/src/components/status.ts:648–771` — renderExtensionPanel
- `runtime/web/static/classic/css/agent.css:544–631` — extension panel layout CSS
- `runtime/web/static/classic/css/agent.css:701–763` — copy command block CSS
- Depends on: `workitems/00-inbox/374-intent-status-indicator-improvements.md`
- Parent epic: `workitems/00-inbox/370-monaco-status-panel-parity-epic.md`
