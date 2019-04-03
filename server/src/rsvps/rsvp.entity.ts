import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from 'typeorm';
import { User } from '../users/user.entity'
import { IsUUID, MaxLength, IsInt} from 'class-validator'

@Entity()
export class Rsvp {

  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column('varchar', {length: 3})
  @MaxLength(3)
  rsvp: string;

  @Column({type: 'int'})
  @IsInt()
  guests: number;

  @Column({ type: 'int' })
  @IsInt()
  cars: number;

  @OneToOne(type => User, user => user.rsvp )
  @JoinColumn()
  user: User;
}
