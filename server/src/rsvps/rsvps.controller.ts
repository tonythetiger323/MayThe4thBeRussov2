import { Controller, Post, Res, Body, HttpStatus, Param } from '@nestjs/common';
import { RsvpsService } from './rsvps.service'
import { Rsvp } from './rsvp.entity'
import { Response } from 'express'

@Controller('api/rsvps')
export class RsvpsController {
  constructor( private rsvpsService: RsvpsService) {}

  @Post()
  async create(@Param() params, @Res() res: Response, @Body() rsvpData: Rsvp): Promise<any> {
    console.log(`Request made to '/api/rsvps'`);
    if (!(rsvpData && rsvpData.firstName && rsvpData.lastName && rsvpData.email && rsvpData.rsvp && rsvpData.guests) && rsvpData.cars >= 0) { return res.status(HttpStatus.FORBIDDEN).json({ message: 'RSVP, number of guests, and number of cars is required'});
    };
    const rsvp = await this.rsvpsService.create(rsvpData);
    return res.status(HttpStatus.OK).json(rsvp)
  }
}
