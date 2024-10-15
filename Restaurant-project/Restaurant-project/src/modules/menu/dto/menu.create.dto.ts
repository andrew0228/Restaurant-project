import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MenuCreateDto {
  @Expose()
  @ApiProperty({ example: 'Pizza', description: 'Dish name' })
  name: string;

  @Expose()
  @ApiProperty({
    example: 'Delicious pizza with cheese',
    description: 'Description',
  })
  description: string;

  @Expose()
  @ApiProperty({ example: 9.99, description: 'Price' })
  price: number;
}
