FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./yarn.lock ./.npmrc  ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
