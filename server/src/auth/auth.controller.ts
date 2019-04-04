import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express'
import { User } from '../users/user.entity'
import passport from 'passport'

@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService) {}

  @Post('login')
  async loginUser(@Res() res: Response, @Body() userData: User) {
    console.log(`Request made to '/api/auth/login'`);
    if (!(userData && userData.email && userData.password)) {
      return await res.status(HttpStatus.FORBIDDEN).json({ message: 'Email and password are required!'})
    }

    const user = await this.authService.validateUser(userData.email, userData.password)

    if (user) {
        return await res.status(HttpStatus.OK).json(user);
    }

    return await res.status(HttpStatus.FORBIDDEN).json({ message: 'Email or password is incorrect'});
  }
}
