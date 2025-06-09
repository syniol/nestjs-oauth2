import { Injectable, NotImplementedException } from '@nestjs/common'
import { InjectConnection, Knex } from 'nestjs-knex'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
  public constructor(@InjectConnection() private readonly knex: Knex) {}

  public async persist(user: Partial<UserEntity>): Promise<UserEntity> {
    throw new NotImplementedException()
  }

  public async find(username: string): Promise<UserEntity | undefined> {
    throw new NotImplementedException()
  }
}
