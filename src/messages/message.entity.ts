import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
class Message {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public content: string;

  @Column()
  public user_id: number;

  @Column()
  public created_at: string;
}

export default Message;