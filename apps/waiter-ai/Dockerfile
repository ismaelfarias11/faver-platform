FROM node:20-alpine AS build
WORKDIR /repo

COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm ci

# Prisma (si tienes prisma/schema.prisma en waiter-ai)
RUN npx prisma generate --schema apps/waiter-ai/prisma/schema.prisma

RUN npx turbo run build --filter=waiter-ai --no-daemon

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm","run","start","--workspace=waiter-ai"]
