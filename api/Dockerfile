FROM node:16-slim

WORKDIR /usr/src/app

COPY ./package.json ./yarn.lock ./

RUN yarn install --ignore-scripts --frozen-lockfile --non-interactive

COPY . .

RUN yarn prepare

EXPOSE 5000

CMD ["node", "./build/index.js"]
