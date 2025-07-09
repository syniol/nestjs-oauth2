FROM node:22-alpine as Builder

COPY ./docker/prod/node/entrypoint.sh ./var/local/app/entrypoint.sh

COPY ./app /var/local/app

WORKDIR /var/local/app

ENV NODE_ENV=development

RUN npm i

ENV NODE_ENV=production

ENTRYPOINT ["./entrypoint.sh"]
