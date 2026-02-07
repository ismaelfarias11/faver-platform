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

# Prisma generate antes del build
RUN npx prisma generate --schema apps/waiter-ai/prisma/schema.prisma

RUN npx turbo run build --filter=waiter-ai --no-daemon

# =========
# runner (standalone)
# =========
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3002

COPY --from=builder /repo/apps/waiter-ai/.next/standalone ./
COPY --from=builder /repo/apps/waiter-ai/.next/static ./.next/static
COPY --from=builder /repo/apps/waiter-ai/public ./public

# Prisma (para migrate deploy / db push)
COPY --from=builder /repo/apps/waiter-ai/prisma ./prisma

EXPOSE 3002

# ===== OPCIÓN A (si tienes migrations) =====
CMD ["sh", "-c", "npx prisma migrate deploy --schema prisma/schema.prisma && node server.js"]

# ===== OPCIÓN B (si NO tienes migrations) =====
# CMD ["node", "server.js"]
