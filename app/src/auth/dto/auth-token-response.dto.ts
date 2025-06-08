// RFC Oauth 2.1 standard example response
/**
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

export interface AuthTokenResponse {
  access_token: string
  token_type: AuthTokenType
  expires_in: number,
  refresh_token: string
  scope: string
}
