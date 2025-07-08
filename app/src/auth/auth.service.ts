import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { AuthTokenResponse, authTokenResponseFromToken } from './dto/auth-token-response.dto'
import { AuthToken } from './auth.token'
import { AuthTokenRequestDTO } from './dto/auth-token-request.dto'
import { UserService } from '../user/user.service'
import { CacheService } from '../infrastructure/cache/cache.service'

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name)

  public constructor(
    private readonly userService: UserService,
    private readonly cacheService: CacheService,
  ) {
  }

  public async handleTokenRequest({ username, password }: AuthTokenRequestDTO): Promise<AuthTokenResponse> {
    this.logger.log(
      {
        username: username,
      },
      'requested a new token for authentication via: POST /auth/token',
    )

    const foundUser = await this.userService.handleUsernameLookup(username)
    if (foundUser) {
      const isCredentialValid = await this.userService.handleUserCredentialVerification(
        foundUser,
        password,
      )
      if (isCredentialValid) {
        const tokenResponse = authTokenResponseFromToken(new AuthToken())
        await this.cacheService.set(tokenResponse.access_token, foundUser.username)

        return tokenResponse
      }
    }

    throw new BadRequestException('username or password is invalid')
  }
}
