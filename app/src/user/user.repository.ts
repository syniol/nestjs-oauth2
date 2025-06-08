import { Injectable } from '@nestjs/common'
import { User } from './user.model'
import { UserEntity } from './user.entity'

@Injectable()
export class UserRepository {
  // todo: inject db connection
  public constructor() {}

  public async persist(user: User): Promise<void> {}

  public async find(username: string): Promise<void> {}
}
