import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from '../users/users.module'
import { Rsvp } from './rsvp.entity'
import { RsvpsController } from './rsvps.controller';
import { RsvpsService } from './rsvps.service';
import { UsersService } from '../users/users.service'

@Module({
  imports: [TypeOrmModule.forFeature([Rsvp]), UsersModule],
  controllers: [RsvpsController],
  providers: [RsvpsService, UsersService]
})
export class RsvpsModule {}
