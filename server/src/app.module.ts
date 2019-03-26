import { Module } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { Connection } from 'typeorm'

@Module({
  imports: [ConfigModule, TypeOrmModule.forRoot()],
  controllers: [AppController]
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
