import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column("varchar", { length: 100 })
  email: string;

  @Column("varchar", { length: 255 })
  password: string;

  @Column({ type: 'bigint', nullable: true })
  createdAt: Date;

  @Column({ type: 'bigint', nullable: true })
  updatedAt: Date;
}