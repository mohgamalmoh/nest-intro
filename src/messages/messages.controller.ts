import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import CreateMessageDto from './dto/createMessage.dto';
import MessagesService from './mesages.service';

@Controller('messages')
export default class MessagesController {
  constructor(
    private readonly messagesService: MessagesService
  ) {}

  @Get()
  getAllMessages() {
    return this.messagesService.getAllMessages();
  }


}
