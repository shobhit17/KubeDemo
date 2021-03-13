FROM node:12-alpine

WORKDIR /app

COPY package.json /app

RUN npm install --production

COPY app.js /app

EXPOSE 30010

CMD node app.js