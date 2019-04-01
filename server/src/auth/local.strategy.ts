import { Strategy, IVerifyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { use } from 'passport';
import passport = require('passport');

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
    this.init()
  }

  private init(): void {
    passport.serializeUser((user, done) => {
      done(null, user);
    });

    passport.deserialUser((user, done) => {
      done(null, user);
    });

    use('local-signin', new Strategy({
      usernameField: 'email',
      passwordField: 'password',
    }, async (email: string, password: string, done: (error: any, user?: any, options?: IVerifyOptions) => void) => {
      try {
        const foundUser = await this.authService.validateUser(email, password);
        if (!foundUser) { throw new HttpException('User not found', 401); }
        done(null, foundUser);
      } catch (error) {
        done(error, false)
      }
    }));
  }
}
