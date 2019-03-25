import { Module } from '@nestjs/common'
import { ConfigModule } from './config/config.module'
import { AppController } from './app.controller'

@Module({
  imports: [ConfigModule],
  controllers: [AppController]
})

export class AppModule {}
