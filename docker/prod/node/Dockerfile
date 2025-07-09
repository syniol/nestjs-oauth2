FROM node:22-alpine as Builder

COPY ./docker/prod/node/entrypoint.sh ./var/local/app/entrypoint.sh

COPY ./app /var/local/app

WORKDIR /var/local/app

ENV NODE_ENV=development

RUN npm i && npm test && npm run build

FROM node:22-alpine

RUN apk update  \
    && apk upgrade \
    && apk add curl

COPY --from=Builder /var/local/app/dist /var/local/app/dist
COPY --from=Builder /var/local/app/package.json /var/local/app/dist/package.json
COPY --from=Builder /var/local/app/package-lock.json /var/local/app/dist/package-lock.json
COPY --from=Builder /var/local/app/node_modules /var/local/app/dist/node_modules

COPY --from=Builder /var/local/app/entrypoint.sh /var/local/app/dist/entrypoint.sh

WORKDIR /var/local/app/dist

ENV NODE_ENV=production

RUN npm i --omit=dev

ENTRYPOINT ["./entrypoint.sh"]
