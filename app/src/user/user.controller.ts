import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { UserService } from './user.service'

@Controller()
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post('/register')
  @HttpCode(HttpStatus.ACCEPTED)
  public async signUp(@Body() userSignUpRequest: any) {
    // todo: create DTO for userSignUpRequest

    await this.userService.handleUserSignUp(userSignUpRequest)
  }
}
