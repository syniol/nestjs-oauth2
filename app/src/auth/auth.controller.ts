import { Body, Controller, Header, Logger, Post } from '@nestjs/common'
import { AuthTokenResponse } from './dto/auth-token-response.dto'
import { TokenService } from './token.service'
import { AuthTokenRequestDTO } from './dto/auth-token-request.dto'

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger(AuthController.name)

  public constructor(private readonly tokenService: TokenService) {}

  @Post('/token')
  @Header('Cache-Control', 'no-store')
  public async token(
    @Body() request: AuthTokenRequestDTO,
  ): Promise<AuthTokenResponse> {
    this.logger.log(
      {
        username: request.username,
      },
      'requested a new token for authentication via: POST /auth/token',
    )

    return this.tokenService.createToken()
  }
}
