import { Module } from '@nestjs/common'
import { KnexModule } from 'nestjs-knex'
import { DatabaseService } from './db.service'
import { KnexAdapter } from './knex.adapter'

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
    })
  ],
  providers: [DatabaseService, KnexAdapter],
  exports: [DatabaseService],
})
export class DatabaseModule {}
