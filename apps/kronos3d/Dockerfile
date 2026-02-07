FROM node:20-alpine AS deps
WORKDIR /repo

COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /repo

COPY --from=deps /repo/node_modules ./node_modules
COPY . .
RUN npx turbo run build --filter=kronos3d

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /repo/apps/kronos3d/.next/standalone ./
COPY --from=builder /repo/apps/kronos3d/.next/static ./.next/static
COPY --from=builder /repo/apps/kronos3d/public ./public

EXPOSE 3000
CMD ["node","server.js"]
