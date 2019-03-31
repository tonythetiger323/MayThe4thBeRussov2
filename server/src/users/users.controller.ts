import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Response } from 'express';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Post()
  async create(@Res() res: Response, @Body() userData: User): Promise<any> {
    console.log(`Request made to '/api/user/'`);
    if (!(userData && userData.email && userData.password)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email and password are required' });
    };

    let user = await this.usersService.getUserByEmail(userData.email);

    if (user) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Email exists' });
    } else {
      user = await this.usersService.create(userData);
      return res.status(HttpStatus.OK).json(user);
    };
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() userData: User): Promise<any> {
    userData.id = String(id);
    console.log(`Update user with id ${userData.id}`);
    return this.usersService.update(userData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.usersService.delete(id);
  }
}
