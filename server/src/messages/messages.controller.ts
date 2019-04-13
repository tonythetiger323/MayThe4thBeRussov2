import { Controller, Post, Param, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity'
import { Response } from 'express'

@Controller('api/messages')
export class MessagesController {
  constructor( private messagesService: MessagesService) {}

  @Post()
  async create(@Param() params, @Res() res: Response, @Body() messageData: Message): Promise<any> {
    console.log(`Post request made to '/api/messages'`);
    if (!(messageData && messageData.name && messageData.email && messageData.message)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Name, email, and message are required'});
    };

    const message = await this.messagesService.create(messageData);
    return res.status(HttpStatus.OK).json(message)
  }

  @Get()
  async findAll(@Res() res: Response, @Body() messageData: Message): Promise<any> {
    console.log(`Get request made to 'api/messages'`)
    const messages = await this.messagesService.findAll();
    return res.status(HttpStatus.OK).json(messages)
  }

}
