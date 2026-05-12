# PiClaw Monaco — Backlog & Current State

Updated: 2026-05-12
Total open issues: 11
Upstream synced: v2.3.7 (The Conversation)

## Vision

Fork of rcarmo/piclaw replacing the embedded GUI with a **VS Code-style shell layout** using cherry-picked web components. The agent conversation remains the primary interaction, wrapped in a familiar developer shell.

## In Progress

| # | Title | Branch | Status |
|---|---|---|---|
| 96 | Provider setup wizard (OAuth + API key + custom) | `feat/96-provider-wizard` | Testing on `v2.3.7-rc3` Docker image |

## Open Issues — High Priority

| # | Title | Score | Notes |
|---|---|---|---|
| 359 | Spending/cost budget tracking with alerts and limits | 10/10 | Phased: pricing table → accumulated totals → limits + alerts |
| 316 | Authentication section in Settings (TOTP + passkey) | 10/10 | Backend ready, needs frontend component |
| 320 | Recovery substates — show blocked/backing-off/retrying in UI | 9/10 | Backend has state field, needs UI indicators |
| 319 | Operator controls — abort hung run, clear stale, drain queue | 9/10 | Power user feature, backend endpoints exist |
| 323 | Progress watchdog — hung-run detection + user notification | 8/10 | Backend ready (v2.3.7), needs UI toast/badge |

## Open Issues — Medium Priority

| # | Title | Score | Notes |
|---|---|---|---|
| 353 | Refactor status panels to card-style with 'more…' button | 9/10 | UI polish, upstream comparison documented |
| 321 | Session recordings — list, playback, export in UI | 9/10 | Needs backend research for recording format |
| 315 | Avatar upload UI (click-on-avatar popover) | 9/10 | Backend upload endpoints exist |
| 360 | VS Code theme import — map JSON themes to CSS variables | 9/10 | Phased: mapping table → import UI → preview |
| 86 | QR code pairing/linking in Settings panel | 8/10 | Needs backend endpoint for QR generation |

## Open Issues — Low Priority

| # | Title | Score | Notes |
|---|---|---|---|
| 358 | Bundle codicons.css + fonts.css into CSS build | 8/10 | 2 fewer HTTP requests, cosmetic |

## Recently Completed

| # | Title | Date |
|---|---|---|
| 356 | Sync upstream PiClaw v2.3.7 (backend + extensions) | 2026-05-12 |
| 355 | Fix addon install/uninstall wrong field name | 2026-05-12 |
| 350 | Widget tab content visibility (flex chain + indent cap) | 2026-05-09 |
| 336 | Vendor lib migration (DOMPurify bundled, 131 languages) | 2026-05-12 |
| 322 | Add-on health indicator — degraded badge | 2026-05-12 |
| 346 | Remove Dashboards from TabBar | 2026-05-09 |

## Infrastructure

- **Build**: `make build-web` uses piclaw-monaco frontend (`runtime/web/frontend/build.ts`)
- **Docker**: `docker-publish.yml` with `provenance: false`, semver + latest tags only
- **Upstream UI**: `runtime/web/src/` kept for vendor entries + merge compat, not built for app bundle
- **Dependencies added**: `esbuild`, `@preact/signals`, `dompurify`
