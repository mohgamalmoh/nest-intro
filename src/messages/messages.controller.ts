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

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    return this.messagesService.getMessageById(Number(id));
  }

  @Post()
  async createMessage(@Body() message: CreateMessageDto) {
    return this.messagesService.createMessage(message);
  }
/*
  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }*/

  @Delete(':id')
  async deleteMessage(@Param('id') id: string) {
    this.messagesService.deleteMessage(Number(id));
  }
}
