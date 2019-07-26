import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { cryptPassword } from '../utils/crypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async createUser(user: User): Promise<User> {
    user.password = await cryptPassword(user.password);
    return await this.userRepository.save(user);
  }

  async findOne(username: string): Promise<User | null> {
    return await this.userRepository.findOne({where: {username}});
  }
}
