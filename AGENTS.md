# piclaw

## Git workflow

- **Always use pull requests** — never commit directly to `main`
- Create a feature branch, commit, push, and open a PR via `gh pr create`
- Wait for the user to approve or say "merge" before merging
- Use `gh pr merge --merge --delete-branch` to merge and clean up
- PR descriptions should include: summary, what changed, test results
- One logical change per PR; don't bundle unrelated work

## Build and test

- `bun run typecheck` — type-check the runtime
- `bun run build:web` — build the web frontend
- `bun test <path>` — run tests
- `make ci-fast` — full CI gate

## Conventions

- See `skel/AGENTS.md` for the agent operating context and working style
- See `WORKITEMS.md` for the workitem lifecycle
- See `workitems/` for the kanban-style issue tracker
