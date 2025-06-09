import { Body, Controller, HttpCode, HttpStatus, Patch, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Patch('/:username/password')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseGuards(AuthGuard)
  public async changePassword(@Body() password: any) {
    // todo: create DTO for userSignUpRequest

    await this.userService.handleUserSignUp(password)
  }
}
