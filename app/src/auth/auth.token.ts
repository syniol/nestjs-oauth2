import { randomBytes } from 'node:crypto'
import { AuthTokenType } from './dto/auth-token-response.dto'

export class AuthToken {
  private static readonly DefaultTokenByteSize = 64
  private static readonly SecondsInMinute = 60
  private static readonly MinutesInHour = 60

  public readonly accessToken: string
  public readonly tokenExpirationInSeconds: number
  public readonly refreshToken: string
  public readonly scope: string
  public readonly tokenType: AuthTokenType

  public static TokenExpiryTimeInSeconds =
    AuthToken.MinutesInHour * AuthToken.SecondsInMinute

  public constructor() {
    this.accessToken = randomBytes(AuthToken.DefaultTokenByteSize).toString(
      'base64',
    )
    this.tokenExpirationInSeconds = AuthToken.TokenExpiryTimeInSeconds
    this.refreshToken = randomBytes(AuthToken.DefaultTokenByteSize).toString(
      'base64',
    )
    this.scope = 'portal.readonly'
    this.tokenType = AuthTokenType.Bearer
  }
}
