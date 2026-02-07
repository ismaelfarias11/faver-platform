# =========
# deps
# =========
FROM node:20-alpine AS deps
WORKDIR /repo

COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm ci

# =========
# build
# =========
FROM node:20-alpine AS builder
WORKDIR /repo

COPY --from=deps /repo /repo
RUN npx turbo run build --filter=kronos3d --no-daemon

# =========
# runner (standalone)
# =========
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3001

COPY --from=builder /repo/apps/kronos3d/.next/standalone ./
COPY --from=builder /repo/apps/kronos3d/.next/static ./.next/static
COPY --from=builder /repo/apps/kronos3d/public ./public

EXPOSE 3001
CMD ["node", "server.js"]
