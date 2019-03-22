import { Controller, Get, Res } from '@nestjs/common'
import * as path from 'path'

const { PUBLIC_DIR, NODE_ENV } = process.env
const PUBLIC_DIR_PATH = PUBLIC_DIR || 'client/public'
@Controller()
export class AppController {
  @Get()
  root(@Res() res) {
    res.sendFile(
      path.join(__dirname, '..', '..', `${PUBLIC_DIR_PATH}`, 'index.html')
    )
  }
}
