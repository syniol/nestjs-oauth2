import { Knex } from 'knex'
import { CryptoService } from '../../src/crypto/crypto.service'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  const cryptoService = new CryptoService()
  await knex('users').insert([
    {
      username: 'hadi1',
      credential: await cryptoService.encrypt('SomeRandomString1'),
      scopes: ['portal.read'],
    },
    {
      username: 'hadi2',
      credential: await cryptoService.encrypt('SomeRandomString2'),
      scopes: ['portal.read'],
    },
    {
      username: 'hadi3',
      credential: await cryptoService.encrypt('SomeRandomString3'),
      scopes: ['portal.read'],
    },
  ])
}
