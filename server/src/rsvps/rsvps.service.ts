import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rsvp } from './rsvp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RsvpsService {
  constructor(
    @InjectRepository(Rsvp)
    private rsvpRepository: Repository<Rsvp>
  ) {}
    
  async create(rsvp: Rsvp): Promise<Rsvp> {
    const newRsvp = await this.rsvpRepository.save(rsvp);
    return newRsvp;
  }
    
  async findAll(): Promise<Rsvp[]> {
    return await this.rsvpRepository.find()
  }
}
