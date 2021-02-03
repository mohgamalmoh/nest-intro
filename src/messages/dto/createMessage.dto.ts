import { Timestamp } from "typeorm";

export class CreateMessageDto {
  content: string;
  user_id: number;
  created_at: string;
}

export default CreateMessageDto;