import { Body, Controller, Header, Logger, Post } from '@nestjs/common'
import { AuthTokenResponse } from './dto/auth-token-response.dto'
import { AuthService } from './auth.service'
import { AuthTokenRequestDTO } from './dto/auth-token-request.dto'

@Controller('auth')
export class AuthController {
  public constructor(private readonly tokenService: AuthService) {}

  @Post('/token')
  @Header('Cache-Control', 'no-store')
  public async token(
    @Body() request: AuthTokenRequestDTO,
  ): Promise<AuthTokenResponse> {
    return this.tokenService.handleTokenRequest(request.username)
  }
}
