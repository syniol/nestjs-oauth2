import { Module } from '@nestjs/common'
import { CacheModule } from './cache/cache.module'
import { DatabaseModule } from './db/db.module'

@Module({
  imports: [CacheModule, DatabaseModule],
  exports: [CacheModule, DatabaseModule],
})
export class InfrastructureModule {}
