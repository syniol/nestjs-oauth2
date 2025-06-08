import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('User', tableBuilder => {
    tableBuilder.bigIncrements('id')
    tableBuilder.uuid('internalId')
    tableBuilder.string('username')
    tableBuilder.string('encryptedPassword')
    tableBuilder.string('role').checkIn(['ADMIN', 'CLIENT'])
    tableBuilder.specificType('scopes', 'text ARRAY')

    tableBuilder.timestamps(true, true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  throw new Error('always migrate forward')

  // should be used in a new migration if it needs to be dropped
  return knex.schema.dropTable('User')
}

