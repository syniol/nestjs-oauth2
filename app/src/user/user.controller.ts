import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common'
import { UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Post()
  public async createUser(@Body() payload: any): Promise<any> {
    // todo: complete a new endpoint to create user
    // await this.userService.handleUserCreation()
  }

  @Delete('/:username')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseGuards(AuthGuard)
  public async removeUser(): Promise<any> {
    // todo: complete a new endpoint to delete user
    // await this.userService.handleUserDeletion()
  }

  @Patch('/:username/password')
  @HttpCode(HttpStatus.ACCEPTED)
  @UseGuards(AuthGuard)
  public async changePassword(
    @Param('username') username: string,
    @Body() password: any,
  ) {
    await this.userService.handleUserPasswordChange(username, password)
  }
}
