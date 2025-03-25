FROM node:22-alpine
RUN apk add curl

RUN mkdir /bokupa-movie
WORKDIR /bokupa-movie
RUN yarn global add typescript ts-node typesync @types/node
