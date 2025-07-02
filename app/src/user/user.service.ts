import { Injectable } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserEntity } from './user.entity'
import { CryptoService } from '../crypto/crypto.service'

@Injectable()
export class UserService {
  public constructor(
    private readonly userRepository: UserRepository,
    private readonly cryptoService: CryptoService,
  ) {
  }

  public async handleUsernameLookup(username: string): Promise<UserEntity> {
    return this.userRepository.findByUsername(username)
  }

  public async handleUserCredentialVerification(
    userEntity: UserEntity,
    plainPassword: string,
  ): Promise<boolean> {
    return await this.cryptoService.decrypt(userEntity.credential) === plainPassword
  }

  public async handleUserCreation(username, password: string, scopes: string[]) {
    await this.userRepository.persist(
      new UserEntity(
        username,
        await this.cryptoService.encrypt(password),
        scopes,
      ),
    )
  }

  public async handleUserPasswordChange(username, password: string) {
    await this.userRepository.updatePassword(
      username,
      await this.cryptoService.encrypt(password),
    )
  }
}
