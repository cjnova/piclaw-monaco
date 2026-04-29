# Dev Environment Setup

This repo is a fork of [rcarmo/piclaw](https://github.com/rcarmo/piclaw) maintained at [cjnova/piclaw-monaco](https://github.com/cjnova/piclaw-monaco).

## Git Remotes

```
origin   https://github.com/cjnova/piclaw-monaco.git  (fork)
upstream https://github.com/rcarmo/piclaw.git          (source)
```

## Prerequisites

- [Bun](https://bun.sh) v1.x

## Setup

```bash
git clone https://github.com/cjnova/piclaw-monaco.git
cd piclaw-monaco
bun install
```

## Development

```bash
# Type check
bun run typecheck

# Build web bundles
make build-web

# Start dev server (watch mode)
bun run dev

# Full build
make build-piclaw
```

## Syncing with upstream

```bash
git fetch upstream
git merge upstream/main
```
