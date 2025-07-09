FROM node:22-alpine

COPY ./docker/prod/knex/entrypoint.sh ./var/local/app/entrypoint.sh

COPY ./app /var/local/app

WORKDIR /var/local/app

ENV NODE_ENV=development

RUN npm i

ENV NODE_ENV=production

CMD ["./entrypoint.sh"]
