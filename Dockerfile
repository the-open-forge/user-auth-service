FROM node:lts-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn

COPY . .
RUN yarn build-docker

COPY ./dist .

EXPOSE 5000

CMD ["node","./dist/src/server.js"]
