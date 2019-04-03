import { Entity, Column, PrimaryGeneratedColumn, OneToOne} from 'typeorm';
import { IsEmail, Matches, IsUUID } from 'class-validator';
import { Rsvp } from '../rsvps/rsvp.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string

  @Column('varchar', {length: 255})
  @IsEmail()
  email: string

  @Column('varchar', {length: 255})
  @Matches((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/))
  password: string

  @OneToOne(type => Rsvp, rsvp  => rsvp.user)
  rsvp: Rsvp

}
