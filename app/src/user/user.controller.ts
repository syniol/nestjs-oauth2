import { Body, Controller, HttpCode, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Patch('/:username/password')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseGuards(AuthGuard)
  public async changePassword(
    @Param('username') username: string,
    @Body() password: any,
  ) {
    await this.userService.handleUserPasswordChangeRequest(username, password)
  }
}
