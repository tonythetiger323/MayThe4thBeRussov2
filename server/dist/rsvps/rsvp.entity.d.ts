import { User } from '../users/user.entity';
export declare class Rsvp {
    id: string;
    rsvp: string;
    guests: number;
    cars: number;
    user: User;
}
