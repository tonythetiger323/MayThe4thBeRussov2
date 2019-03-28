import { Module } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './database/users/users.module'
import { AppController } from './app.controller'
import { UsersService } from './database/users/users.service'
import { Connection } from 'typeorm'

@Module({
  imports: [ConfigModule, UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [UsersService]
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
