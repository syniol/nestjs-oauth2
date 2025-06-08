import { Controller, Get, HttpStatus, HttpCode } from '@nestjs/common'

@Controller()
export class HealthController {
  public constructor() {}

  @Get('/healthz')
  @HttpCode(HttpStatus.OK)
  public getHealth(): object {
    return {
      healthy: true,
    }
  }

  async d() {
    console.log('sss')
  }
}
