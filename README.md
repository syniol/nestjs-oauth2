# NestJS Skeleton
This is a skeleton application for NestJS with TypeScript.


## Initial Skeleton Build
In order to create a new skeleton application, I ran the following inside the node.js docker container.

```bash
nest new app
```
It creates a new folder named `app` with all example files and an endpoint `/` with `GET` method for Hello World message.


## Health Check
todo: add info about health endpoint


## Authentication
Following RFC-6749 for OAuth 2.1 for `grant_type=password`, created an endpoint to request a token to access auth 
guarded endpoints utilising `AuthGuard`.

__Request Example:__
```bash
curl -d "username=hadi&password=myP7ssword3&grant_type=password" \
 -H "Content-Type: application/x-www-form-urlencoded" \
  -X POST http://127.0.0.1:8080/auth/token
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


### Todos
 * [X] Produce and return a dummy response for now and remove `void` as a return type
 * [ ] Validate the input with Zod or create a value object or a combination of both
 * [ ] Create a new module "Cache" and later link it to redis container
 * [ ] create a new module "Users" and create a database container
 * [ ] Finalise ORM/ODM to use for Database Access Abstraction layer


#### Credits
Author: [Hadi Tajallaei](mailto:hadi@syniol.com)
Copyright &copy; 2025 Syniol Limited. All rights reserved.
