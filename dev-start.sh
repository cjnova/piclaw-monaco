#!/bin/bash
# Launch the dev instance on port 9090 with proper shutdown handling
cd "$(dirname "$0")" || exit 1

DB="./workspace/.piclaw/store/messages.db"

cleanup() {
  echo ""
  echo "[dev] Shutting down..."
  if [ -f "$DB" ]; then
    sqlite3 "$DB" "PRAGMA wal_checkpoint(TRUNCATE);" 2>/dev/null && echo "[dev] ✓ WAL checkpointed" || echo "[dev] ⚠ Checkpoint failed"
  fi
  exit 0
}

trap cleanup SIGINT SIGTERM EXIT

bun runtime/src/index.ts --port 9090 --workspace ./workspace "$@"
