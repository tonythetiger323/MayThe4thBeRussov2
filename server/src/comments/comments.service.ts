import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comment.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>
  ) {}

  async create(comment: Comment): Promise<Comment> {
    const newComment = await this.commentRepository.save(comment);
    return newComment;
  }

  async findAll(): Promise<Comment[]> {
    return await this.commentRepository.find()
  }
}
