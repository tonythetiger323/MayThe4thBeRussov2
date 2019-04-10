import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import path = require('path')
import favicon = require('serve-favicon')
import bodyParser = require('body-parser')
import cookieParser = require('cookie-parser')
import passport = require('passport')
import express = require('express')
import session = require('express-session')

const { PORT, PUBLIC_DIR, NODE_ENV } = process.env

const PUBLIC_DIR_PATH = PUBLIC_DIR || 'client/public'

const isProd = NODE_ENV === 'production'
let publicDirPath = path.join(__dirname, 'public')
let publicFaviconPath = path.join(
  __dirname,
  'public/assets/favicon',
  'favicon.ico'
)

// If we are not production, load the .env file and change the public directory to the client/build folder
if (!isProd) {
  require('dotenv').config()
  publicDirPath = path.join(__dirname, '..', '..', PUBLIC_DIR_PATH)
  publicFaviconPath = path.join(
    __dirname, // /src
    '..', // /server
    '..', // ~/
    `${PUBLIC_DIR_PATH}/assets/favicon`,
    'favicon.ico'
  )
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(favicon(publicFaviconPath))
  app.use(express.static(publicDirPath))
  app.use(
    session({
      secret: 'the force',
      resave: true,
      saveUnitialized: true,
      proxy: true
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

  await app.listen(PORT || 3001, '0.0.0.0')
  console.log(`Server started on ${PORT || 3001}`)
}
bootstrap()
