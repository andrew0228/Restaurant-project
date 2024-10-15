import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { OrderCreateDto } from './dto/order.create.dto';
import { OrderResponseDto } from './dto/order.response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class OrderService {
  @InjectRepository(OrderEntity)
  private orderRepository: Repository<OrderEntity>;

  async getAll(): Promise<OrderResponseDto[]> {
    const orders = await this.orderRepository.find();
    return plainToInstance(OrderResponseDto, orders);
  }

  async create(payload: OrderCreateDto): Promise<OrderResponseDto> {
    const newOrder = this.orderRepository.create(payload);
    await this.orderRepository.save(newOrder);
    return plainToInstance(OrderResponseDto, newOrder);
  }
}
