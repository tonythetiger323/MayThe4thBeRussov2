require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import path = require('path');
import favicon = require('serve-favicon');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import passport = require('passport');
import express = require('express');
import session = require('express-session');

const { PORT, PUBLIC_DIR, NODE_ENV } = process.env
const PUBLIC_DIR_PATH = PUBLIC_DIR || 'client/public'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(
    favicon(
      path.join(
        __dirname, // /src
        '..', // /server
        '..', // ~/
        `${PUBLIC_DIR_PATH}/assets/favicon`,

        'favicon.ico',
      ),
    ),
  );
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(express.static(path.join(
    __dirname,
    '..',
    '..',
    PUBLIC_DIR_PATH)));
  app.use(session({
    secret: 'the force',
    resave: true,
    saveUnitialized: true,
    proxy: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT || 3001, '0.0.0.0')
  console.log(`Server started on ${PORT || 3001}`)
}
bootstrap()
