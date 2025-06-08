import { Module } from '@nestjs/common'
import { HealthController } from './health.controller'

@Module({
  controllers: [HealthController],
  imports: [],
  providers: [],
})
export class HealthModule {}
