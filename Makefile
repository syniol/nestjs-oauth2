# Default environment
ENV ?= prod

build:
	docker compose -f ./docker/$(ENV)/docker-compose.yml build --no-cache

up:
	docker compose -f ./docker/$(ENV)/docker-compose.yml up -d

down:
	docker compose -f ./docker/$(ENV)/docker-compose.yml down

node:
	docker compose -f ./docker/$(ENV)/docker-compose.yml exec node sh

redis:
	docker compose -f ./docker/$(ENV)/docker-compose.yml exec redis sh

pg:
	docker compose -f ./docker/$(ENV)/docker-compose.yml exec postgres sh

nginx:
	docker compose -f ./docker/$(ENV)/docker-compose.yml exec nginx sh
