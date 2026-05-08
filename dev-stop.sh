#!/bin/bash
# Safely stop the dev instance — checkpoint WAL before killing
DB="$(dirname "$0")/workspace/.piclaw/store/messages.db"
if [ -f "$DB" ]; then
  echo "Checkpointing WAL..."
  sqlite3 "$DB" "PRAGMA wal_checkpoint(TRUNCATE);" 2>/dev/null && echo "✓ WAL checkpointed" || echo "⚠ Checkpoint failed (server may hold lock)"
fi
PID=$(pgrep -f "port 9090")
if [ -n "$PID" ]; then
  echo "Stopping server (PID $PID)..."
  kill "$PID"
  echo "✓ Server stopped"
else
  echo "No server running on port 9090"
fi
