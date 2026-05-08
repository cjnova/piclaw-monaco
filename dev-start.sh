#!/bin/bash
# Launch the dev instance on port 9090
cd "$(dirname "$0")" || exit 1
exec bun runtime/src/index.ts --port 9090 --workspace ./workspace "$@"
