import { ApiProperty } from '@nestjs/swagger'

export class HealthResponse {
  @ApiProperty({
    description: 'indicates the health of system',
  })
  public healthy: boolean
}
