import { Module } from '@nestjs/common'
import { HealthModule } from './health/health.module'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { CryptoModule } from './crypto/crypto.module'
import { CacheModule } from './cache/cache.module'
import { KnexModule } from 'nestjs-knex'

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'pg',
        useNullAsDefault: true,
        connection: {
          port: 5432,
          host: process.env.POSTGRES_HOST,
          database: process.env.POSTGRES_DB,
          user: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          ssl: {
            rejectUnauthorized: false,
          }
        },
      },
    }),
    HealthModule,
    AuthModule,
    UserModule,
    CryptoModule,
    CacheModule,
  ],
})
export class AppModule {}
