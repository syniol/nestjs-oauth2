import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations",
      directory: './db/migrations',
      extension: 'ts',
      disableTransactions: true,
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations",
      directory: './db/migrations',
      extension: 'ts',
      disableTransactions: true,
    },
    seeds: {
      directory: './db/seeds',
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations",
      directory: './db/migrations',
      extension: 'ts',
      disableTransactions: true,
    },
    seeds: {
      directory: './db/seeds',
    },
  }

};

module.exports = config;
