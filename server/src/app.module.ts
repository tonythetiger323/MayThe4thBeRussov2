import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { MessagesModule } from './messages/messages.module'
import { RsvpsModule } from './rsvps/rsvps.module'
require('dotenv').config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: 3306,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'Production' ? false : true
    }),
    UsersModule,
    AuthModule,
    MessagesModule,
    RsvpsModule
  ],
  controllers: [AppController]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
