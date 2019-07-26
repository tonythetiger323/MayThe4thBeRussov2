import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsInt, IsAlpha, IsNotEmpty, IsEmail, IsAlphanumeric, IsIP } from 'class-validator';

@Entity()
export class Message {

  @PrimaryGeneratedColumn()
  @IsInt()
  id: number;

  @Column('varchar', { length: 255 })
  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @Column('varchar', { length: 255 })
  @IsAlphanumeric()
  @IsNotEmpty()
  message: string

}
