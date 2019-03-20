import { ConfigService } from './../config/config.service'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { ConfigModule } from 'config/config.module'

@Module({
  imports: [ConfigModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
