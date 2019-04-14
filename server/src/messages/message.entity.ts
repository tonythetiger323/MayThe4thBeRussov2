import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsUUID, IsAlpha, IsNotEmpty, IsEmail, IsAlphanumeric } from 'class-validator';

@Entity()
export class Message {

  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string;

  @Column('varchar', { length: 255 })
  @IsAlpha()
  @IsNotEmpty()
  name: string;

  @Column('varchar', { length: 255 })
  @IsAlphanumeric()
  @IsNotEmpty()
  message: string

}
