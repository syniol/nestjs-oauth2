import type { Knex } from 'knex'

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/infrastructure/db/migrations',
      extension: 'ts',
      disableTransactions: true,
    },
    seeds: {
      directory: './src/infrastructure/db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'migrations',
      directory: './src/infrastructure/db/migrations',
      extension: 'ts',
      disableTransactions: true,
    },
    seeds: {
      directory: './src/infrastructure/db/seeds',
    },
  },
}

module.exports = config
