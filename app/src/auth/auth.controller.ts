import { Body, Controller, Header, HttpCode, HttpStatus, Logger, Post } from '@nestjs/common'
import { AuthTokenResponse } from './dto/auth-token-response.dto'
import { TokenService } from './token.service'
import { AuthTokenRequest } from './dto/auth-token-request.dto'

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger(AuthController.name)

  public constructor(private readonly tokeService: TokenService) {}

  @Post('/token')
  @Header('Cache-Control', 'no-store')
  public async token(
    @Body() request: AuthTokenRequest,
  ): Promise<AuthTokenResponse> {
    this.logger.log(
      {
        username: request.username,
      },
      'requested a new token for authentication via: POST /auth/token',
    )

    return this.tokeService.handleGetToken()
  }
}
