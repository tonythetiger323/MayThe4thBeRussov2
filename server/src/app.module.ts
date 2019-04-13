require('dotenv').config()
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'
import { UsersService } from './users/users.service'
import { Connection } from 'typeorm'
import { RsvpsModule } from './rsvps/rsvps.module';
import { RsvpsService } from './rsvps/rsvps.service';
import { AuthModule } from './auth/auth.module'
import { AuthService } from './auth/auth.service'
import { MessagesModule } from './messages/messages.module'
import { MessagesService } from './messages/messages.service'

@Module({
  imports: [UsersModule, RsvpsModule, MessagesModule, AuthModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    port: 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [UsersService, RsvpsService, MessagesService, AuthService]
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
