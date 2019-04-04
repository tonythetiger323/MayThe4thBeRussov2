import { RsvpsService } from './rsvps.service';
import { Rsvp } from './rsvp.entity';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
export declare class RsvpsController {
    private rsvpsService;
    private usersService;
    constructor(rsvpsService: RsvpsService, usersService: UsersService);
    create(params: any, res: Response, rsvpData: Rsvp): Promise<any>;
}
