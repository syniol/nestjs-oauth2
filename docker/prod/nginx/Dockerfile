FROM nginx:1.22-alpine

RUN apk add --update-cache curl

COPY ./docker/prod/nginx/fullchain.pem /usr/.ssl/fullchain.pem
COPY ./docker/prod/nginx/privkey.pem /usr/.ssl/privkey.pem
COPY ./docker/prod/nginx/nginx.conf /etc/nginx/nginx.conf
