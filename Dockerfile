FROM oven/bun:debian

WORKDIR /usr/src/app

COPY . .

RUN bun install

CMD ["bun", "start"]
