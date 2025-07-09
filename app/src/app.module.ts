import { Module } from '@nestjs/common'
import { KnexModule } from 'nestjs-knex'
import { HealthModule } from './health/health.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CryptoModule } from './crypto/crypto.module'
import { InfrastructureModule } from './infrastructure/infrastructure.module'

@Module({
  imports: [
    HealthModule,
    AuthModule,
    UserModule,
    CryptoModule,
    InfrastructureModule,
  ],
})
export class AppModule {}
