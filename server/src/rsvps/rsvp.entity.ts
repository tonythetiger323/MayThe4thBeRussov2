import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsInt, MaxLength, IsAlpha, IsEmail, IsNotEmpty, Max, Min} from 'class-validator'

@Entity()
export class Rsvp {

  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;

  @Column('varchar', {length: 255})
  @IsAlpha()
  @IsNotEmpty()
  firstName: string;

  @Column('varchar', {length: 255})
  @IsAlpha()
  @IsNotEmpty()
  lastName: string;

  @Column('varchar', {length: 255})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column('varchar', {length: 3})
  @MaxLength(3)
  @IsNotEmpty()
  rsvp: string;

  @Column({type: 'int'})
  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(6)
  guests: number;

  @Column({ type: 'int' })
  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(2)
  cars: number;

 }