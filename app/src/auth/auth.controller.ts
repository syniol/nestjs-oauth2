import {
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common'
import { AuthTokenResponse, AuthTokenType } from './dto/auth-token-response.dto'

@Controller('auth')
export class AuthController {
  @Post('/token')
  @Header('Content-Type', 'application/json')
  @Header('Cache-Control', 'no-store')
  @HttpCode(HttpStatus.OK)
  public async token(
    @Query('username') user: string,
    @Query('password') password: string,
    @Query('grant_type') grantType: AuthTokenType,
  ): Promise<AuthTokenResponse | void> {
    // todo: Validate the input with Zod or create a value object or a combination of both
    // todo: Produce and return a dummy response for now and remove `void` as a return type
    // todo: Create a new module "Cache" and later link it to redis container
    // todo: create a new module "Users" and create a database container
    // todo: finalise ORM/ODM to use for Database Access Abstraction layer
  }
}
