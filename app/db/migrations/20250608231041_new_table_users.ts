import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', tableBuilder => {
    tableBuilder.bigIncrements('id').primary()
    tableBuilder.uuid('internal_id').unique()
    tableBuilder.string('username').unique()
    tableBuilder.string('encrypted_password')
    tableBuilder.string('role').checkIn(['ADMIN', 'CLIENT'])
    tableBuilder.specificType('scopes', 'text ARRAY')

    tableBuilder.timestamps(true, true, false)

    tableBuilder.index('username', 'users_username_idx')
  })
}

export async function down(knex: Knex): Promise<void> {
  throw new Error('always migrate forward')

  // should be used in a new migration if it needs to be dropped
  return knex.schema.dropTable('users')
}

