import { Rsvp } from './rsvp.entity';
import { Repository } from 'typeorm';
export declare class RsvpsService {
    private rsvpRepository;
    constructor(rsvpRepository: Repository<Rsvp>);
    create(rsvp: Rsvp): Promise<Rsvp>;
}
