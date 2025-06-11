import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  await knex('users').insert([
    { username: 'hadi1', encrypted_password: 'SomeRandomString', scopes: ['portal.read'] },
    { username: 'hadi2', encrypted_password: 'SomeRandomString', scopes: ['portal.read'] },
    { username: 'hadi3', encrypted_password: 'SomeRandomString', scopes: ['portal.read'] },
  ])
}
