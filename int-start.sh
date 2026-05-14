#!/bin/bash
# Launch the integration instance on port 9090 with visual UI mode
cd "$(dirname "$0")" || exit 1

DB="./workspace/.piclaw/store/messages.db"

cleanup() {
  echo ""
  echo "[int] Shutting down..."
  if [ -f "$DB" ]; then
    sqlite3 "$DB" "PRAGMA wal_checkpoint(TRUNCATE);" 2>/dev/null && echo "[int] ✓ WAL checkpointed" || echo "[int] ⚠ Checkpoint failed"
  fi
  exit 0
}

trap cleanup SIGINT SIGTERM EXIT

PICLAW_WEB_UI_MODE=visual bun runtime/src/index.ts --port 9090 --workspace ./workspace "$@"
