import { Module } from '@nestjs/common'
import { AuthGuard } from './auth.guard'
import { AuthController } from './auth.controller'
import { TokenService } from './token.service'

@Module({
  controllers: [AuthController],
  providers: [AuthGuard, TokenService],
  exports: [AuthGuard],
})
export class AuthModule {}
