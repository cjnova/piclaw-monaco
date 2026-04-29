FROM oven/bun:latest AS build

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts
COPY . .
RUN bun run runtime/web/frontend/build.ts

FROM oven/bun:latest

RUN apt-get update \
    && apt-get install -y --no-install-recommends git ripgrep \
    && rm -rf /var/lib/apt/lists/*

# Use existing bun user (uid 1000) as non-root runtime user

COPY --from=build /app /app
WORKDIR /app

USER bun
EXPOSE 8080

CMD ["bun", "run", "runtime/src/index.ts", "--port", "8080"]
