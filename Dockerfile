FROM node:26-slim

RUN apt-get update &&\
    apt-get install --no-install-recommends -y curl &&\
    rm -rf /var/lib/apt/lists

WORKDIR /app
RUN npm i -g --allow-scripts=pnpm pnpm

COPY ./package.json ./pnpm-lock.yaml ./
RUN pnpm install --prod

COPY ./src ./src

CMD ["node", "./src/index.ts"]
