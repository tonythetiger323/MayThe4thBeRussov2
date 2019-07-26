import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Res() res: Response, @Body() userData: User): Promise<any> {
    if(!(userData && userData.username && userData.password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email and password are required!'});
    };

    let user = await this.usersService.findOne(userData.username);

    if (user) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username exists!'});
    } else {
      user = await this.usersService.createUser(userData);
      return res.status(HttpStatus.OK).json(user);
    }
  }
}
