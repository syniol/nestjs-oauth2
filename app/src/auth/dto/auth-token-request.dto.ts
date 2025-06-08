// RFC Oauth 2.1 standard example request
/**
 * POST /oauth/token HTTP/1.1
 * Host: authorization-server.com
 *
 * grant_type=password
 * &username=user@example.com
 * &password=1234luggage
 * &client_id=xxxxxxxxxx
 * &client_secret=xxxxxxxxxx
 */

export enum AuthTokenGrantType {
  Password = 'password',
}

export interface AuthTokenRequest {
  grant_type: AuthTokenGrantType
  username: string
  password: string
}
