import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'
import * as path from 'path'
import * as favicon from 'serve-favicon'
import * as bodyParser from 'body-parser'
import * as express from 'express'

const { PORT, PUBLIC_DIR, NODE_ENV } = process.env;
const PUBLIC_DIR_PATH = PUBLIC_DIR || 'client/public';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  app.setGlobalPrefix('api');
  app.use(
    favicon(
      path.join(
        __dirname,
        '..',
        '..',
        `${PUBLIC_DIR_PATH}/assets/favicon`,
        'favicon.ico',
      ),
    ),
  );
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '..', PUBLIC_DIR_PATH)));

  await app.listen(PORT || 3001, '0.0.0.0');
  console.log(`Server started on ${PORT || 3001}`);
}
bootstrap();
