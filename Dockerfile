FROM node:latest as build-stage

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY ./ .

RUN npx gulp build

FROM node:alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app/build .
COPY --from=build-stage /app/server.js ./server.js
COPY --from=build-stage /app/node_modules ./node_modules

EXPOSE 3000

CMD [ "node", "server.js"]
