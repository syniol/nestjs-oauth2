import { BadRequestException, Injectable, Logger } from '@nestjs/common'
import { AuthTokenResponse, authTokenResponseFromToken } from './dto/auth-token-response.dto'
import { AuthToken } from './auth.token'
import { AuthTokenRequestDTO } from './dto/auth-token-request.dto'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  private readonly logger: Logger = new Logger(AuthService.name)

  public constructor(
    private readonly userService: UserService,
  ) {
  }

  public async handleTokenRequest({ username, password }: AuthTokenRequestDTO): Promise<AuthTokenResponse> {
    // todo: Check if user exists and verify the username & password
    // todo: Store this in a cache e.g. await this.cacheManager.set(username, JSON.stringify(token))
    // todo: Install the @nestjs/cache-manager package along with the cache-manager package.
    // todo: Create a redis container for Docker
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
        return authTokenResponseFromToken(new AuthToken())
      }
    }

    throw new BadRequestException('username or password is invalid')
  }
}
