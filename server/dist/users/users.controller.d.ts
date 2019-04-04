import { UsersService } from './users.service';
import { User } from './user.entity';
import { Response } from 'express';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    index(): Promise<User[]>;
    create(res: Response, userData: User): Promise<any>;
    update(id: any, userData: User): Promise<any>;
    delete(id: any): Promise<any>;
}
