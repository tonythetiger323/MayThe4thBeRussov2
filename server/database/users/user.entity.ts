import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { IsEmail, Matches, IsUUID } from 'class-validator';
import { hashSync, genSaltSync } from 'bcrypt'
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

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password,
      genSaltSync(10),
      null);
  }

  }