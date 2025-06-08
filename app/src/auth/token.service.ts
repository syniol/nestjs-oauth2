import { randomBytes } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import { AuthTokenResponse, AuthTokenType } from './dto/auth-token-response.dto'

@Injectable()
export class TokenService {
  private static readonly DefaultTokenByteSize = 64
  private static readonly SecondsInMinute = 60
  private static readonly MinutesInHour = 60

  public createToken(): AuthTokenResponse {
    // todo: store this in a cache
    return {
      access_token: randomBytes(TokenService.DefaultTokenByteSize).toString('base64'),
      expires_in: TokenService.MinutesInHour * TokenService.SecondsInMinute,
      refresh_token: randomBytes(TokenService.DefaultTokenByteSize).toString('base64'),
      scope: 'portal.readonly',
      token_type: AuthTokenType.Bearer
    }
  }
}
