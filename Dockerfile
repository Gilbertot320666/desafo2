FROM node:14

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1

RUN wget -qO- https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | tar xvz -C /usr/local/bin

COPY app/package*.json ./
RUN npm install express mysql
COPY app .
EXPOSE 3000

