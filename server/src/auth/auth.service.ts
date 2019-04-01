import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'
import { comparePassword, cryptPassword } from '../utils/crypt'
import { User } from '../users/user.entity'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password) {
      const user = await this.usersService.getUserByEmail(email)
      if (!user || (!(await comparePassword(password, user.password)))) {throw new Error('Incorrect Password'); }
      delete user.password;
      return user;
  }

  async saveUser(user: User) {
    user.password = await cryptPassword(user.password);
    this.usersService.create(user)
  }
}
