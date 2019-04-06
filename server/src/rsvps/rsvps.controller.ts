import { Controller, Post, Res, Body, HttpStatus, Param } from '@nestjs/common';
import { RsvpsService } from './rsvps.service'
import { Rsvp } from './rsvp.entity'
import { Response } from 'express'
import { UsersService } from '../users/users.service'

@Controller('api/rsvps')
export class RsvpsController {
  constructor( private rsvpsService: RsvpsService, private usersService: UsersService) {}

  @Post(':id')
  async create(@Param() params, @Res() res: Response, @Body() rsvpData: Rsvp): Promise<any> {
    console.log(`Request made to '/api/rsvps'`);
    if (!(rsvpData && rsvpData.rsvp && rsvpData.guests && rsvpData.cars)) { return res.status(HttpStatus.FORBIDDEN).json({ message: 'RSVP, number of guests, and number of cars is required'});
    };
    const user: any = await this.usersService.findById(params.id)
    rsvpData.user = user.id;
    const rsvp = await this.rsvpsService.create(rsvpData);
    return res.status(HttpStatus.OK).json(rsvp)
  }
}
