build:
	docker compose -f ./docker/docker-compose.yml build --no-cache

up:
	docker compose -f ./docker/docker-compose.yml up -d

down:
	docker compose -f ./docker/docker-compose.yml down

tty:
	docker compose -f ./docker/docker-compose.yml exec node sh
