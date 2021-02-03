import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateMessageDto from './dto/createMessage.dto';
import Message from './message.entity';
import UpdateMessageDto from './dto/updateMessage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>
  ) {}

  getAllMessages() {
    return this.messagesRepository.find();
  }

  async getMessageById(id: number) {
    const message = await this.messagesRepository.findOne(id);
    if (message) {
      return message;
    }
    throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
  }

  async createMessage(message: CreateMessageDto) {
    const newMessage = await this.messagesRepository.create(message);
    await this.messagesRepository.save(newMessage);
    return newMessage;
  }

  async updateMessage(id: number, message: UpdateMessageDto) {
    await this.messagesRepository.update(id, message);
    const updatedMessage = await this.messagesRepository.findOne(id);
    if (updatedMessage) {
      return updatedMessage
    }
    throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
  }

  async deleteMessage(id: number) {
    const deleteResponse = await this.messagesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
    }
  }
}
