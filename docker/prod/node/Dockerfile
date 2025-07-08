FROM node:22-alpine

RUN apk update  \
    && apk upgrade \
    && apk add git \
    && apk add curl \
    && npm i -g @nestjs/cli

ENV NODE_ENV=production

COPY ./docker/prod/node/entrypoint.sh ./usr/bin/entrypoint.sh

ENTRYPOINT ["./usr/bin/entrypoint.sh"]
