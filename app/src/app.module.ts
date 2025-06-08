import { Module } from '@nestjs/common'
import { HealthModule } from './health/health.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CryptoModule } from './crypto/crypto.module'

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UserModule,
    CryptoModule,
  ],
})
export class AppModule {}
