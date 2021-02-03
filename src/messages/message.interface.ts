import { Timestamp } from "typeorm";

export interface Message {
  id: number;
  content: string;
  user_id: number;
  created_at: string;
}

export default Message;