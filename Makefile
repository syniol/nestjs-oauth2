build:
	docker compose -f ./docker/dev/docker-compose.yml build --no-cache

up:
	docker compose -f ./docker/dev/docker-compose.yml up -d

down:
	docker compose -f ./docker/dev/docker-compose.yml down

tty:
	docker compose -f ./docker/dev/docker-compose.yml exec node sh
