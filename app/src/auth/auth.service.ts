import { randomBytes } from 'node:crypto'
import { Injectable, Logger } from '@nestjs/common'
import { AuthTokenResponse, AuthTokenType } from './dto/auth-token-response.dto'

@Injectable()
export class AuthService {
  private static readonly DefaultTokenByteSize = 64
  private static readonly SecondsInMinute = 60
  private static readonly MinutesInHour = 60

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

    return {
      access_token: randomBytes(AuthService.DefaultTokenByteSize).toString('base64'),
      expires_in: AuthService.MinutesInHour * AuthService.SecondsInMinute,
      refresh_token: randomBytes(AuthService.DefaultTokenByteSize).toString('base64'),
      scope: 'portal.readonly',
      token_type: AuthTokenType.Bearer,
    }
  }
}
