import { Controller, Get, Post, Body, Put, Param, Delete, HttpStatus, Response } from '@nestjs/common';
import { UsersService } from './users.service'
import { User } from './user.entity'

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Post('register')
  async create(@Response() res: any, @Body() userData: User): Promise<any> {
    console.log(`Request made to '/api/auth/register'`);
    if (!(userData && userData.email && userData.password)) {
      return await res.status(HttpStatus.FORBIDDEN);
    };

    const user = await this.usersService.create(userData);

    return await res.status(HttpStatus.OK)
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
