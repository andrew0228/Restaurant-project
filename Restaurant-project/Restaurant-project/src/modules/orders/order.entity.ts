import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dishName: string;

  @Column('int')
  quantity: number;

  @Column('decimal')
  totalPrice: number;
}
