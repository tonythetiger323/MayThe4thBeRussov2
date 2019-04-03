import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { comparePassword } from '../utils/crypt'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email, password) {
    const user = await this.usersService.getUserByEmail(email);
    if(!user || (!(await comparePassword(password, user.password)))) { throw new Error ('Incorrect Password'); }
    delete user.password;
    return user;
  }
}
