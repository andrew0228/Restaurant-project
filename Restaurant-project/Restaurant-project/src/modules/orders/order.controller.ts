import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderResponseDto } from './dto/order.response.dto';
import { OrderCreateDto } from './dto/order.create.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAll(): Promise<OrderResponseDto[]> {
    return this.orderService.getAll();
  }

  @Post()
  async create(@Body() payload: OrderCreateDto): Promise<OrderResponseDto> {
    return this.orderService.create(payload);
  }
}
