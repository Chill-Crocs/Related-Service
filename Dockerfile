FROM node:14.15.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm ci

EXPOSE 3001

CMD [ "npm", "start" ]