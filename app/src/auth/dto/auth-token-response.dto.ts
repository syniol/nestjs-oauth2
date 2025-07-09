import { ApiProperty } from '@nestjs/swagger'
import { AuthToken } from '../auth.token'

/**
 * RFC Oauth 2.1 standard example response
 * HTTP/1.1 200 OK
 * Content-Type: application/json
 * Cache-Control: no-store
 *
 * {
 *   "access_token":"MTQ0NjJkZmQ5OTM2NDE1ZTZjNGZmZjI3",
 *   "token_type":"Bearer",
 *   "expires_in":3600,
 *   "refresh_token":"IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
 *   "scope":"create"
 * }
 */

export enum AuthTokenType {
  Bearer = 'Bearer',
}

export class AuthTokenResponse {
  @ApiProperty({
    description: 'Access token created and stored for authenticating users',
    format: 'base64',
  })
  public readonly access_token: string

  @ApiProperty({
    description: 'Bearer Access token type',
  })
  public readonly token_type: AuthTokenType

  @ApiProperty({
    description: 'expiry time in seconds',
  })
  public readonly expires_in: number

  @ApiProperty({
    description:
      'token to generate a new access token without re-authentication',
    format: 'base64',
  })
  public readonly refresh_token: string

  @ApiProperty({
    description: 'Access scope for authentication token',
  })
  public readonly scope: string
}

export function authTokenResponseFromToken(
  token: AuthToken,
): AuthTokenResponse {
  return {
    access_token: token.accessToken,
    expires_in: token.tokenExpirationInSeconds,
    refresh_token: token.refreshToken,
    scope: token.scope,
    token_type: token.tokenType,
  }
}
