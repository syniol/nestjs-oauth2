import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createSchema('events')
}

export async function down(knex: Knex): Promise<void> {
  throw new Error('always migrate forward')

  // should be used in a new migration if it needs to be dropped
  return knex.schema.dropSchema('events')
}

