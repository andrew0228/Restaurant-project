import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuResponseDto } from './dto/menu.response.dto';
import { MenuCreateDto } from './dto/menu.create.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async getAll(): Promise<MenuResponseDto[]> {
    return this.menuService.getAll();
  }

  @Post()
  async create(@Body() payload: MenuCreateDto): Promise<MenuResponseDto> {
    return this.menuService.create(payload);
  }
}
