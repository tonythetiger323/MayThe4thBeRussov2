import { Controller, Post, Param, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comment.entity'
import { Response } from 'express'

@Controller('api/comments')
export class CommentsController {
  constructor( private commentsService: CommentsService) {}

  @Post()
  async create(@Param() params, @Res() res: Response, @Body() commentData: Comment): Promise<any> {
    console.log(`Post request made to '/api/comments'`);
    if (!(commentData && commentData.name && commentData.email && commentData.comment)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Name, email, and comment are required'});
    };

    const comment = await this.commentsService.create(commentData);
    return res.status(HttpStatus.OK).json(comment)
  }

  @Get()
  async findAll(@Res() res: Response, @Body() commentData: Comment): Promise<any> {
    console.log(`Get request made to 'api/comments'`)
    const comments = await this.commentsService.findAll();
    return res.status(HttpStatus.OK).json(comments)
  }

}
