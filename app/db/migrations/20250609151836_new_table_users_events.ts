import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('events.users', tableBuilder => {
    tableBuilder.bigIncrements('id').primary()
    tableBuilder.uuid('internal_id').unique()
    tableBuilder.string('event')
    tableBuilder.jsonb('request')
    tableBuilder.jsonb('response')

    tableBuilder.timestamps(true, true, false)
  })
}

export async function down(knex: Knex): Promise<void> {
  throw new Error('always migrate forward')

  // should be used in a new migration if it needs to be dropped
  return knex.schema.dropTable('events.users');
}
