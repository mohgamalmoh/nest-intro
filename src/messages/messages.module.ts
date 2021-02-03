import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import MessagesService from './mesages.service';
import Message from './message.entity';
import { MessageGateway } from './message.gateway';
import MessagesController from './messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessageGateway, MessagesService],
})
export class MessagesModule {}
