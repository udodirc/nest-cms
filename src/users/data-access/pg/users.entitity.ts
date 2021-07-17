import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column("varchar", { length: 100 })
  email: string;

  @Column("varchar", { length: 255 })
  password: string;

  @Column("timestamp")
  createdAt: Date;

  @Column("timestamp")
  updatedAt: Date;
}