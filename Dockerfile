FROM node:16-alpine
RUN apk add curl

RUN mkdir /bokupa-movie
WORKDIR /bokupa-movie
