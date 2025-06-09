import { randomBytes } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { AuthTokenResponse, AuthTokenType } from './dto/auth-token-response.dto'
import { UserService } from '../user/user.service'
import { UserEntity } from '../user/user.entity'

@Injectable()
export class AuthService {
  private static readonly DefaultTokenByteSize = 64
  private static readonly SecondsInMinute = 60
  private static readonly MinutesInHour = 60

  public constructor(private readonly userService: UserService) {
  }

  public async handleTokenRequest(): Promise<AuthTokenResponse> {
    // todo: check if user exists and verify username & password
    // todo: add event listener when user is not registered: `USER_REGISTRATION_REQUESTED`
    await this.userService.handleUserCreationRequestedEvent(
      new UserEntity(
        'hadi',
        'ssssdasdsa',
        ['api.read', 'auth.readWrite'],
      ),
    )

    // todo: store this in a cache
    return {
      access_token: randomBytes(AuthService.DefaultTokenByteSize).toString('base64'),
      expires_in: AuthService.MinutesInHour * AuthService.SecondsInMinute,
      refresh_token: randomBytes(AuthService.DefaultTokenByteSize).toString('base64'),
      scope: 'portal.readonly',
      token_type: AuthTokenType.Bearer,
    }
  }
}
