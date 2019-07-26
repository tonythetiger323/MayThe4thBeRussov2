import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>
  ) {}
    
  async create(message: Message): Promise<Message> {
    const newMessage = await this.messageRepository.save(message);
    return newMessage;
  }
    
  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find()
  }
}
