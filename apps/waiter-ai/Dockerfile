FROM node:20-alpine AS deps
WORKDIR /repo

COPY package.json package-lock.json ./
COPY apps/waiter-ai/package.json apps/waiter-ai/package.json
COPY packages ./packages
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /repo
COPY --from=deps /repo /repo
COPY . .
RUN npx turbo run build --filter=waiter-ai...

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /repo/apps/waiter-ai ./
EXPOSE 3000
CMD ["npm","run","start"]
