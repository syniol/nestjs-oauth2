import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserEntity } from './user.entity'

@Injectable()
export class UserService {
  public constructor(private readonly userRepository: UserRepository) {}

  public async handleUserSignUp(userSignUpRequest: any) {
    // todo: insert the user and encrypt the password

    await this.userRepository.persist(new UserEntity(
      userSignUpRequest.username,
      userSignUpRequest.password,
      userSignUpRequest.scopes,
    ))
  }
}
