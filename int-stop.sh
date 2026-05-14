#!/bin/bash
# Stop the integration instance running on port 9090
PID=$(lsof -ti :9090 2>/dev/null)
if [ -z "$PID" ]; then
  echo "[int] No process found on port 9090"
  exit 0
fi
echo "[int] Stopping PID $PID on port 9090..."
kill "$PID" 2>/dev/null
sleep 1
if kill -0 "$PID" 2>/dev/null; then
  echo "[int] Force killing PID $PID..."
  kill -9 "$PID" 2>/dev/null
fi
echo "[int] Stopped"
