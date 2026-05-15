---
id: 377-pending-request-approval-modal
title: "feat: Pending request approval modal — shield icon, request details, Allow/Deny/Always Allow"
status: inbox
priority: high
created: 2026-05-14
updated: 2026-05-14
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - area:web
  - enhancement
  - security
  - parent:370
owner: pi
---

# feat: Pending request approval modal — shield icon, request details, Allow/Deny/Always Allow

## Summary

The Monaco frontend has no UI for pending agent approval requests. When an agent raises a `pending_request` status, the upstream classic UI shows an "Awaiting approval…" row and opens an `AgentRequestModal` with:

- A **shield SVG icon** in the header
- Request details: command, diff, and affected files
- Three action buttons: **Allow**, **Deny**, **Always Allow**
- Integration with `respondToAgentRequest`

This is security-relevant: without the approval modal, users have no way to review or approve agent actions that require explicit sign-off. Highest priority of the parity sub-issues.

Reference: `status.ts:430–431` (pending row), `status.ts:773–779` (modal trigger), `status.ts:880–889` (`respondToAgentRequest`), `status.ts:900–945` (modal render).

## Acceptance Criteria

- [ ] When `agentStatus === 'pending_request'`, the `AgentStatusPanel` status row shows "Awaiting approval…" text with the shield icon and a pulsing dot (not a spinner)
- [ ] Clicking the status row (or the shield icon) opens an `AgentRequestModal`
- [ ] `AgentRequestModal` renders:
  - Header: shield SVG icon + "Agent request" title
  - **Command** block: monospace display of the requested command (if present)
  - **Diff** block: syntax-highlighted or plain diff display (if present)
  - **Files** list: affected file paths (if present)
  - **Description**: free-text description of the request (if present)
- [ ] Three action buttons: **Allow**, **Deny**, **Always Allow**
  - "Allow" calls `respondToAgentRequest({ action: 'allow', requestId })`
  - "Deny" calls `respondToAgentRequest({ action: 'deny', requestId })`
  - "Always Allow" calls `respondToAgentRequest({ action: 'always_allow', requestId, pattern })` where `pattern` is derived from the command
- [ ] After any action, the modal closes and the "Awaiting approval…" row disappears
- [ ] Modal is keyboard accessible: focus trapped inside modal, Escape closes (as Deny), Enter confirms focused button
- [ ] `respondToAgentRequest` is imported from the appropriate runtime API module
- [ ] Shield SVG icon is a standalone asset or inline SVG (matches upstream `status.ts:900–904`)
- [ ] No regression on existing status row, tool cards, or thought/draft panels
- [ ] TypeScript type check passes (`bun run typecheck`)

## Implementation Paths

### Path A — New `AgentRequestModal` component (recommended)
1. Create `runtime/web/frontend/src/components/AgentRequestModal.tsx`.
2. Define `AgentRequest` type: `{ id: string; command?: string; diff?: string; files?: string[]; description?: string }`.
3. Add `pendingRequest?: AgentRequest` prop to `AgentStatusPanelProps`.
4. When `pendingRequest` is set, render "Awaiting approval…" in the status row with shield icon.
5. Modal open/close state in `AgentStatusPanel` (or modal manages its own open state via prop).
6. Import and call `respondToAgentRequest` from the runtime API.
7. Add CSS for modal overlay, shield icon, command/diff blocks, action buttons.

**Pros:** Clean separation; testable in isolation; mirrors upstream structure  
**Cons:** Requires locating and importing `respondToAgentRequest` from the runtime API

### Path B — Inline in `AgentStatusPanel.tsx`
Render the modal JSX inline as a conditional block within the main component.

**Pros:** No new file  
**Cons:** Component becomes very large; harder to test modal in isolation

## Recommended Path

Path A — security-sensitive UI deserves its own component with isolated tests.

## Test Plan

- [ ] Unit: `AgentRequestModal` renders command, diff, files, description when provided
- [ ] Unit: `AgentRequestModal` renders correctly with only a command (no diff/files)
- [ ] Unit: Allow button calls `respondToAgentRequest` with `action: 'allow'`
- [ ] Unit: Deny button calls `respondToAgentRequest` with `action: 'deny'`
- [ ] Unit: Always Allow button calls `respondToAgentRequest` with `action: 'always_allow'`
- [ ] Unit: Escape key calls deny handler and closes modal
- [ ] Unit: focus is trapped inside modal while open
- [ ] Integration: `pending_request` status in `AgentStatusPanel` shows "Awaiting approval…" row
- [ ] Integration: clicking shield icon opens modal
- [ ] Integration: after Allow/Deny, modal closes and status row reverts
- [ ] Regression: no change to tool/thought/draft panels or other status rows
- [ ] `bun run typecheck` — zero new errors

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| `respondToAgentRequest` API shape differs from upstream | High — wrong approval call | Locate API in runtime source; add type assertion |
| "Always Allow" pattern derivation is non-trivial | Medium — may allow too broadly | Default to exact-match pattern; add `pattern` field to type for future refinement |
| Modal focus trap missed during fast status changes | Medium — accessibility gap | Use `focus-trap` library or manual `tabIndex` management |
| User dismisses modal without acting (closes tab) | Medium — request hangs | Document that Escape is equivalent to Deny; consider auto-deny on unmount |

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally (`bun run test`)
- [ ] Type check clean (`bun run typecheck`)
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed — security-relevant: document that Always Allow persists a whitelist entry
- [ ] Follow-up tickets created for deferred scope (e.g., whitelist management UI)
- [ ] Update history complete with evidence
- [ ] Quality score ≥ 9 recorded in final update
- [ ] Ticket front matter updated (`status`, `updated`, `completed`)
- [ ] Ticket moved to `50-done/`

## Updates

### 2026-05-14
- Created as sub-issue of epic #370 (Monaco status panel parity).
- Scope sourced from gap analysis `/workspace/tmp/ui-status-comparison.md` §8.
- Marked high priority due to security relevance (agent action approval gate).
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- No upstream dependencies; can and should be started first (highest priority).
- The "Always Allow" whitelist may be stored in a config or runtime data structure — check `respondToAgentRequest` signature in the runtime source before implementing.
- The shield SVG at `status.ts:900–904` is a simple path element; inline it or use an existing icon set.
- Escape-to-Deny semantics must be documented in the component's JSDoc; this is a UX decision with security implications.

## Links

- `runtime/web/src/components/status.ts:430–431` — pending request status row
- `runtime/web/src/components/status.ts:773–779` — modal trigger
- `runtime/web/src/components/status.ts:880–889` — respondToAgentRequest call
- `runtime/web/src/components/status.ts:900–945` — AgentRequestModal render
- `runtime/web/frontend/src/components/AgentStatusPanel.tsx` — add pendingRequest prop
- Parent epic: `workitems/00-inbox/370-monaco-status-panel-parity-epic.md`
