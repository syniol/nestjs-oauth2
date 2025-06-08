import { Injectable, NotImplementedException } from '@nestjs/common'
import { User } from './user.model'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
  // todo: inject db connection
  public constructor() {}

  public async persist(user: User): Promise<UserEntity> {
    throw new NotImplementedException()
  }

  public async find(username: string): Promise<UserEntity | undefined> {
    throw new NotImplementedException()
  }
}
