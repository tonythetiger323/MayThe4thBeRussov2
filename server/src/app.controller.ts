import { Controller, Get, Res } from '@nestjs/common'
import * as path from 'path'

@Controller()
export class AppController {
  @Get()
  root(@Res() res) {
    res.sendFile(
      path.resolve(process.env.NODE_ENV === 'deveopment' ? '../../client/public' : process.env.NODE_ENV === 'production' ? '../../client/build' : '../../client/build')

    );

  }
}
