# ... (todo tu build previo queda igual)

WORKDIR /repo/apps/waiter-ai
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3002
EXPOSE 3002

CMD ["sh", "-c", "npx prisma migrate deploy --schema prisma/schema.prisma && node .next/standalone/server.js"]
