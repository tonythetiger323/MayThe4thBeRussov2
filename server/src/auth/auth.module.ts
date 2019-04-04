import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service'

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'local' }),
    UsersModule
  ],
  providers: [AuthService, LocalStrategy, UsersService],
  exports: [PassportModule, AuthService],
  controllers: [AuthController]

})
export class AuthModule {}
