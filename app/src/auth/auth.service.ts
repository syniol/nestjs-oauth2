import { Injectable, Logger } from '@nestjs/common'
import { AuthTokenResponse, authTokenResponseFromToken } from './dto/auth-token-response.dto'
import { AuthToken } from './auth.token'
import { CryptoService } from '../crypto/crypto.service'
import { AuthTokenRequestDTO } from './dto/auth-token-request.dto'

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name)
  constructor(private readonly cryptoService: CryptoService) {}

  public async handleTokenRequest({ username, password }: AuthTokenRequestDTO): Promise<AuthTokenResponse> {
    this.logger.log(
      {
        username: username,
      },
      'requested a new token for authentication via: POST /auth/token',
    )

    this.logger.log('ssssssss', await this.cryptoService.encrypt(password))
    // todo: Check if user exists and verify the username & password
    // todo: Store this in a cache e.g. await this.cacheManager.set(username, JSON.stringify(token))
    // todo: Install the @nestjs/cache-manager package along with the cache-manager package.
    // todo: Create a redis container for Docker
    return authTokenResponseFromToken(new AuthToken())
  }
}
