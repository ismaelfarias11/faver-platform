FROM node:20-alpine AS build
WORKDIR /repo

COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm ci
RUN npx turbo run build --filter=hub --no-daemon

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["npm","run","start","--workspace=hub"]
