import { z } from 'zod'
import { createZodDto } from 'nestjs-zod'

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

const authTokenRequestSchema = z.object({
  grant_type: z.nativeEnum(AuthTokenGrantType),
  username: z.string().min(3).max(8),
  password: z.string().min(6).max(32),
})

export class AuthTokenRequestDTO extends createZodDto(authTokenRequestSchema) {}
