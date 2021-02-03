import { Timestamp } from "typeorm";

export class UpdateMessageDto {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
}

export default UpdateMessageDto;