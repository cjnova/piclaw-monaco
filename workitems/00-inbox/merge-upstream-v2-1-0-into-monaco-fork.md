---
id: merge-upstream-v2-1-0-into-monaco-fork
title: Merge upstream v2.1.0 into Monaco fork
status: inbox
created: 2026-04-29
updated: 2026-04-29
tags:
  - work-item
  - kanban
  - build
  - upstream-sync
  - merge
owner: 
---

# Merge upstream v2.1.0 into Monaco fork

## Summary

Perform git merge of upstream tag v2.1.0 into our main branch. Resolve conflicts keeping ours for frontend, theirs for backend. Rebuild and verify. This is the primary integration gate that all other upstream-sync tickets depend on — once clean, the individual feature wiring tickets can proceed in parallel.

## Acceptance Criteria

- [ ] `git merge upstream/v2.1.0` completes with no unresolved conflicts.
- [ ] Frontend conflict resolution: our Monaco-specific overrides in `runtime/web/` are preserved.
- [ ] Backend conflict resolution: upstream wins on backend/core changes (tool lifecycle, security, fleet_batch, etc.).
- [ ] `bun run typecheck` passes with no errors after merge.
- [ ] `make build-web` succeeds.
- [ ] All Monaco panels are functional in a browser smoke test (chat, terminal, settings, status bar).
- [ ] `.piclaw-monaco-upstream-tag` is updated to `v2.1.0` after successful merge.

## Implementation Paths

### Path A — Direct merge
- `git remote add upstream https://github.com/rcarmo/piclaw.git || true`
- `git fetch upstream --tags`
- `git merge v2.1.0 --no-ff -m "chore: merge upstream v2.1.0"`
- Resolve conflicts using the strategy: frontend → ours, backend/core → theirs
- Run build and typecheck, fix any remaining issues

### Path B — Rebase strategy
- `git rebase v2.1.0` with interactive rebase to preserve Monaco commits as a clean patch series on top of upstream
- Preferred if the diff is small and history cleanliness matters
- Note: rebase rewrites history — use only if the branch is not shared

### Path C — Incremental cherry-pick
- Cherry-pick individual upstream commits in dependency order
- Use when a full merge would pull in too many unrelated changes

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [x] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [x] Real-browser smoke test

### Existing tests to rerun
- `bun run typecheck`
- `make build-web`
- `bun test` (full suite)
- Browser smoke: all Monaco panels functional

### New regression coverage to add
- [ ] Conflict-resolution audit log (document which files were ours vs theirs)
- [ ] Post-merge build CI gate

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-29
- Created as part of upstream v2.1.0 sync planning.
- This ticket gates all other upstream-sync tickets.

## Notes

- Strategy: `runtime/web/` → ours wins; `runtime/src/` core → upstream wins.
- Check `CHANGELOG.md` and `docs/UPSTREAM-SYNC.md` for merge guidance.
- Update `.piclaw-monaco-upstream-tag` to `v2.1.0` after successful merge and CI pass.

## Links

- `.piclaw-monaco-upstream-tag`
- `docs/UPSTREAM-SYNC.md`
- https://github.com/rcarmo/piclaw/releases/tag/v2.1.0
