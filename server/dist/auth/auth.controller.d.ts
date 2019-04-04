import { AuthService } from './auth.service';
import { Response } from 'express';
import { User } from '../users/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(res: Response, userData: User): Promise<import("express-serve-static-core").Response>;
}
