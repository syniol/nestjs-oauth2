import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  public async handleUserCreationRequestedEvent(user: Partial<UserEntity>) {
    await this.userRepository.persist(user)
    // todo: persist a record to events.users
    // todo: run them in a transaction
  }

  public async handleUserPasswordChangeRequest(username, password: string) {
    // todo: encrypt the password
    await this.userRepository.updatePassword(username, password)
  }
}
