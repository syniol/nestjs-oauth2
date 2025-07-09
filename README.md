# NestJS OAuth 2.1
![workflow](https://github.com/syniol/nestjs-oauth2/actions/workflows/makefile.yml/badge.svg)

This is intended as a production ready demo application for OAuth 2.1 implementation using NestJS.

<p align="center">
  <a href="https://syniol.com/" target="blank"><img src="https://github.com/syniol/nestjs-oauth2/blob/main/docs/logo.png?raw=true" width="420" alt="NestJS OAuth 2.1 Mascot" /></a>
</p>


## Component Architecture
[port:80,443]Proxy Container <-> [port:8080]App Container <-> Relational Database & In-Memory Database (Cache) Containers 


## Solution Architecture
[port:80,443]NGINX Container <-> [port:8080]Node Container <-> Postgres & Redis Containers

Postgres Container <- Knex Container  (Database Migration and Seeding Data)


## Production Deployment
You need to have a docker installation on the host machine (VPS, Dedicated Server, Cloud Private Computing). For an Ubuntu
distros you can follow the instruction below.

```bash
todo: add commands for installing docker and docker compose
```

when installation is complete, simply clone this repository and run: `make && make up`. This will build docker images necessary
to run the app and spins up the containers. Please look at `Makefile` to see all available commands.


## Initial Skeleton Build
In order to create a new skeleton application, I ran the following inside the node.js docker container.

```bash
nest new app
```
It creates a new folder named `app` with all example files and an endpoint `/` with `GET` method for Hello World message.


## Data Transfer Objects (DTO) Validation
In order to validate the incoming requests we use Zod and its extension for NestJS. Please [read more here](https://www.npmjs.com/package/nestjs-zod).

```bash
npm i nestjs-zod zod
```


## Database & ORM
Postgres chosen and Knex for Database Abstraction Layer.

__Useful Commands:__
```bash
npm install nestjs-knex knex pq --save

npx knex init -x ts

npx knex migrate:make <migration_name> -x ts
npx knex migrate:latest

npx knex seed:make <seed_name> -x ts
npx knex seed:run
```


## Health Check
todo: add info about health endpoint
```bash
curl -X GET http://127.0.0.1/healthz
```


## Authentication
Following __RFC-6749__ standard for OAuth 2.1 for `grant_type=password`, created an endpoint to request a token to access auth 
guarded endpoints utilising `AuthGuard`.

__Request Example:__
```bash
curl -d "username=guest&password=Guest123456&grant_type=password" \
 -H "Content-Type: application/x-www-form-urlencoded" \
  -X POST http://127.0.0.1/auth/token
```

__Response Example:__
```json
{
  "access_token": "wLLGQxn5CpUd4Kx0tnM5qrxTgoZyLd8LnqvE8ZkaVHPVeFQF/iuMYuvQu1QGPk9qRj91vqc1JzDZHOlCFV8NhQ==",
  "expires_in": 3600,
  "refresh_token": "E/hi7cQ4La/TZwwk33VXHbCqaSc3cZx0FGxsamgdCOli4+uAXAsezWMo+NrPTCcwujlwqqszik7r/qmXJzPJoA==",
  "scope": "portal.readonly",
  "token_type": "Bearer"
}
```


## Encryption
There is a CLI node.js application located at: `app/bin/key.js` that creates a secret key 
could be utilised to decrypt and encryption of user password. Environment variable 
`CRYPTO_SECRET_KEY` is populated via host or `.env` file at the root of docker files.


### Credits
<small>Author: [Hadi Tajallaei](mailto:hadi@syniol.com)</small>
<p><small>Copyright &copy; 2025 Syniol Limited. All rights reserved.</small></p>
