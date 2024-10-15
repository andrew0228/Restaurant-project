import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OrderResponseDto {
  @Expose()
  @ApiProperty({ example: 'Pizza', description: 'Name of the ordered dish' })
  dishName: string;

  @Expose()
  @ApiProperty({ example: 2, description: 'Quantity' })
  quantity: number;

  @Expose()
  @ApiProperty({ example: 19.98, description: 'Total price' })
  totalPrice: number;
}
