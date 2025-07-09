import { Module } from '@nestjs/common'
import { UserRepository } from './user.repository'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { CryptoModule } from '../crypto/crypto.module'
import { DatabaseModule } from '../infrastructure/db/db.module'

@Module({
  imports: [CryptoModule, DatabaseModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
