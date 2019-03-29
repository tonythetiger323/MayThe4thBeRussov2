import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './database/users/users.module'
import { AppController } from './app.controller'
import { UsersService } from './database/users/users.service'
import { Connection } from 'typeorm'

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [UsersService]
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
