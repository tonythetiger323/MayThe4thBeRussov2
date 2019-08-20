import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { IsUUID, IsAlpha, IsNotEmpty, Matches } from 'class-validator'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string

  @Column()
  @IsAlpha()
  @IsNotEmpty()
  username: string

  @Column()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)
  @IsNotEmpty()
  password: string
}
