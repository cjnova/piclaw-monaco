# PiClaw Monaco — Backlog & Current State

Updated: 2026-05-13
Total open issues: 4
Upstream synced: v2.3.8 (Spring Cleaning)

## Vision

Fork of rcarmo/piclaw replacing the embedded GUI with a **VS Code-style shell layout** using cherry-picked web components. The agent conversation remains the primary interaction, wrapped in a familiar developer shell.

## Open Issues

### Needs backend work

| # | Title | Score | Priority | Notes |
|---|---|---|---|---|
| 359 | Spending/cost budget tracking with alerts and limits | 10/10 | high | DB has cost_total but no REST endpoint; needs GET /agent/token-usage + budget limits |
| 86 | QR code pairing/linking in Settings panel | 8/10 | medium | No pairing endpoint exists; needs new backend route |

### Frontend-ready

| # | Title | Score | Priority | Notes |
|---|---|---|---|---|
| 360 | VS Code theme import — JSON themes to CSS variables | 10/10 | medium | Phased: mapping table → import UI → preview. Preserve AvatarSection in Appearance |
| 316 | Authentication section in Settings (TOTP + passkey) | 10/10 | high | Backend ready, needs frontend component. Deferred from Wave 4 |

## Recently Completed (2026-05-13)

| # | Title | Wave |
|---|---|---|
| 364 | Bug: abort doesn't clear tool/thought/draft panels | Wave 1 |
| 367 | Workspace panel: reindex + hidden files toggle | Wave 1 |
| 320 | Recovery substates — blocked/backing-off/retrying in UI | Wave 2 |
| 323 | Progress watchdog — hung-run detection + notification | Wave 2 |
| 319 | Operator controls — abort hung run | Wave 2 |
| 361 | Delimited file preview (CSV/TSV) in attachments | Wave 3 |
| 366 | Text highlighting with color picker popup | Wave 3 |
| 321 | Session recordings — list, playback, export | Wave 3 |
| 315 | Avatar upload + GitHub sync (Settings + chat popover) | Wave 4 |
| 353 | Card-style status panels (colored dots, more…, badges) | Wave 4 |

## Recently Completed (2026-05-12)

| # | Title |
|---|---|
| 96 | Provider setup wizard (OAuth + API key + custom providers) |
| 356 | Upstream sync v2.3.7 → v2.3.8 (backend + static restructure) |
| 362 | Backend hardening verification (v2.3.8 sync) |
| 363 | Build path adaptation to static/ restructure |
| 358 | Bundle codicons.css + fonts.css into CSS build |
| 355 | Fix addon install/uninstall wrong field name |
| 336 | Vendor lib migration (DOMPurify bundled, 131 languages) |
| 322 | Add-on health indicator — degraded badge |
| 350 | Widget tab content visibility (flex chain + indent cap) |

## Upstream

- **Current sync**: v2.3.8 (Spring Cleaning)
- **Upstream tag marker**: `.piclaw-monaco-upstream-tag` = `v2.3.8`
- **Upstream bug reported**: rcarmo/piclaw#592 (playback regex) — fixed in upstream commit 84faa45, drop our patch on next sync
- **Next sync**: watch for v2.3.9+

## Infrastructure

- **Build**: `make build-web` uses piclaw-monaco frontend (`runtime/web/frontend/build.ts`)
- **Docker**: `docker-publish.yml` with `provenance: false`, semver + latest tags
- **Static layout**: `classic/` (UI), `common/` (shared), `visual/` (upstream placeholder)
- **Dependencies**: `esbuild`, `@preact/signals`, `dompurify` (kept from upstream removal)
- **Fonts/icons**: bundled into `app.bundle.css` via `@import` in `styles.css`
