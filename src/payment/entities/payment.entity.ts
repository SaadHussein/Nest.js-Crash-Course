import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  currency: string;

  @Column()
  amount: string;

  @Column({ default: true })
  isActive: boolean;
}
