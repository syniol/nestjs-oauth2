import { Module } from '@nestjs/common'
import { AuthGuard } from './auth.guard'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { CryptoModule } from '../crypto/crypto.module'

@Module({
  imports: [CryptoModule],
  controllers: [AuthController],
  providers: [AuthGuard, AuthService],
  exports: [AuthGuard],
})
export class AuthModule {}
