import { Injectable } from '@nestjs/common'
import { InjectConnection, Knex } from 'nestjs-knex'
import { UserEntity } from './user.entity'
import { CryptoEncryptedValue } from '../crypto/dto/crypto.dto'

@Injectable()
export class UserRepository {
  public constructor(@InjectConnection() private readonly knex: Knex) {}

  public async findByUsername(username: string): Promise<UserEntity | undefined> {
    return this
      .knex<UserEntity>(UserEntity.Table)
      .select('*')
      .where('username', username)
      .first()
  }

  public async persist(user: Partial<UserEntity>): Promise<UserEntity> {
    // todo: persist a record to events.users
    // todo: run them in a transaction
    const [newUserRecord] = await this
      .knex<UserEntity>(UserEntity.Table)
      .insert(JSON.parse(JSON.stringify(user)))
      .returning<UserEntity[]>('*')

    if (!newUserRecord) {
      throw new Error( 'no record been created')
    }

    return newUserRecord
  }

  public async updatePassword(username, updatedCredential: CryptoEncryptedValue): Promise<UserEntity | undefined> {
    const [updatedUser] = await this
      .knex<UserEntity>('users')
      .update({
        credential: updatedCredential,
        updated_at: new Date(),
      })
      .where('users.username', username)
      .returning<UserEntity[]>('*')

    if (!updatedUser) {
      throw new Error( 'no record been updated')
    }

    return updatedUser
  }
}
