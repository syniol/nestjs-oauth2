import { Controller, Get } from '@nestjs/common'

@Controller()
export class HealthController {
  public constructor() {}

  @Get('/healthz')
  public getHealth(): object {
    return {
      healthy: true,
    }
  }
}
