import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rsvp } from './rsvp.entity';
import { RsvpsService } from './rsvps.service';
import { RsvpsController } from './rsvps.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rsvp])],
  providers: [RsvpsService],
  controllers: [RsvpsController]
})
export class RsvpsModule {}
