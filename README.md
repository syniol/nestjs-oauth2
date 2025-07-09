# NestJS OAuth 2.1 Demo
![workflow](https://github.com/syniol/nestjs-skeleton/actions/workflows/makefile.yml/badge.svg)

This is intended as a production ready demo application for OAuth 2.1 implementation using NestJS.

<div style="text-align: center;">
    <img style="max-width: 100%;" alt="NestJS OAuth 2.1 Mascot" src="https://github.com/syniol/nestjs-skeleton/blob/main/docs/logo.png?raw=true" />
</div>

## Production Deployment
todo: explain docker commands on VPS or Dedicated Server


## Architecture
todo:


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
Following RFC-6749 for OAuth 2.1 for `grant_type=password`, created an endpoint to request a token to access auth 
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


### Todos
 * [X] Produce and return a dummy response for now and remove `void` as a return type
 * [X] Validate the input with Zod or create a value object or a combination of both
 * [X] Create a new module "Users"
 * [X] Created Database Seeds for Users in dev
 * [X] Create a database container for postgres
 * [X] Finalise ORM/ODM to use for Database Access Abstraction layer
 * [X] Create a new module "Cache" as an abstraction to Redis Connection
 * [X] Create a cache container for redis
 * [X] Create a new module "Database" as an abstraction to Knex Connection
 * [X] Create `prod` folder under `docker` for production version
 * [ ] Docker `prod` new Dockerfile to include build section for tests and etc
 * [ ] Check all todos in code ticked-off


##### Credits
<small>Author: [Hadi Tajallaei](mailto:hadi@syniol.com)</small>
<p><small>Copyright &copy; 2025 Syniol Limited. All rights reserved.</small></p>
