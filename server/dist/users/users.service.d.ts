import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(user: User): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
