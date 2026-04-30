# Dev Server

## Launch

```bash
# Using the wrapper script (recommended)
/workspace/piclaw-monaco/piclaw-monaco.sh

# Or manually from the repo root
cd /workspace/piclaw-monaco
bun run runtime/src/index.ts --port 9090 --workspace ./workspace

# Background mode (logs to file)
bun run runtime/src/index.ts --port 9090 --workspace ./workspace &>/tmp/monaco-9090.log &
```

## Check if running

```bash
ss -tlnp | grep 9090
```

## Kill

```bash
kill $(ss -tlnp | grep 9090 | grep -o 'pid=[0-9]*' | cut -d= -f2)
```

## Logs

```bash
# If launched in background
tail -f /tmp/monaco-9090.log

# Filter for errors
grep -i "error\|fail\|warn" /tmp/monaco-9090.log
```

## Access

- Web UI: `http://localhost:9090/`
- With session: `http://localhost:9090/?chat_jid=web:default`

## Notes

- `--workspace ./workspace` avoids inheriting the main piclaw's auth config at `/workspace/.piclaw/`
- Extensions are symlinked from `/workspace/.pi/extensions/` (piclaw-fleet, kanban-board-widget, lib, node_modules)
- Provider auth is symlinked from `/home/agent/.pi/agent/auth.json`
- Extensions register routes on first session — send a message to trigger session creation
- The route freeze workaround (rcarmo/piclaw#512) defers freeze to session init
