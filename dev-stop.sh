#!/bin/bash
# Safely stop the dev instance — SIGINT + wait for graceful shutdown
PID=$(pgrep -f "port 9090")
if [ -z "$PID" ]; then
  echo "No server running on port 9090"
  exit 0
fi

echo "Sending SIGINT to server (PID $PID)..."
kill -INT "$PID"

# Wait up to 15s for graceful shutdown (like Supervisor)
for i in $(seq 1 15); do
  if ! kill -0 "$PID" 2>/dev/null; then
    echo "✓ Server stopped gracefully"
    exit 0
  fi
  sleep 1
done

echo "⚠ Server didn't stop in 15s, forcing..."
kill -9 "$PID" 2>/dev/null

# Checkpoint WAL as fallback after forced kill
DB="$(dirname "$0")/workspace/.piclaw/store/messages.db"
if [ -f "$DB" ]; then
  echo "Checkpointing WAL after forced kill..."
  sqlite3 "$DB" "PRAGMA wal_checkpoint(TRUNCATE);" 2>/dev/null && echo "✓ WAL checkpointed" || echo "⚠ Checkpoint failed"
fi
