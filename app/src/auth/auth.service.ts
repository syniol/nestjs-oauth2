import { Injectable, Logger } from '@nestjs/common'
import { AuthTokenResponse, authTokenResponseFromToken, AuthTokenType } from './dto/auth-token-response.dto'
import { AuthToken } from './auth.token'

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name)

  public async handleTokenRequest(username: string): Promise<AuthTokenResponse> {
    this.logger.log(
      {
        username: username,
      },
      'requested a new token for authentication via: POST /auth/token',
    )

    // todo: Check if user exists and verify username & password

    // todo: Store this in a cache e.g. await this.cacheManager.set(username, JSON.stringify(token))
    // todo: Install the @nestjs/cache-manager package along with the cache-manager package.
    // todo: Create a redis container for Docker

    return authTokenResponseFromToken(new AuthToken())
  }
}
