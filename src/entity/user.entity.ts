import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: "text" })
  email: string;
  @Column({ type: "text" })
  password: string;
}
