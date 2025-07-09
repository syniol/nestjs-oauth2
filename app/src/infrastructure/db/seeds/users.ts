import { Knex } from 'knex'
import { CryptoService } from '../../../crypto/crypto.service'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del()

  const cryptoService = new CryptoService()
  await knex('users').insert([
    {
      username: 'guest',
      credential: await cryptoService.encrypt('Guest123456'),
      scopes: ['portal.read'],
    },
  ])
}
