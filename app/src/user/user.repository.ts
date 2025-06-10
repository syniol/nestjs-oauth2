import { Injectable } from '@nestjs/common'
import { InjectConnection, Knex } from 'nestjs-knex'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
  public constructor(@InjectConnection() private readonly knex: Knex) {}

  public async persist(user: Partial<UserEntity>): Promise<UserEntity> {
    const [newUserRecord] = await this
      .knex<UserEntity>(UserEntity.Table)
      .insert(JSON.parse(JSON.stringify(user)))
      .returning<UserEntity[]>('*')

    if (!newUserRecord) {
      throw new Error( 'no record been created')
    }

    return newUserRecord
  }

  public async updatePassword(username, encryptedPassword: string): Promise<UserEntity | undefined> {
    const [updatedUser] = await this
      .knex<UserEntity>('users')
      .update({
        encrypted_password: encryptedPassword,
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
