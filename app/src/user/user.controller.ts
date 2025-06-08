import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'

@Controller()
export class UserController {

  @Post('/register')
  @HttpCode(HttpStatus.ACCEPTED)
  public async signUp(@Body() userSignUpRequest) {
    // todo: create DTO
    // todo: insert the user and encrypt the password
  }
}
