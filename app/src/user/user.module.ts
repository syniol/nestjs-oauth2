import { Module } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { CryptoModule } from '../crypto/crypto.module'

@Module({
  imports: [CryptoModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
