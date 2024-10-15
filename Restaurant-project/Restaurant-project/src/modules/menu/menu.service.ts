import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuEntity } from './menu.entity';
import { MenuCreateDto } from './dto/menu.create.dto';
import { MenuResponseDto } from './dto/menu.response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class MenuService {
  @InjectRepository(MenuEntity)
  private menuRepository: Repository<MenuEntity>;

  async getAll(): Promise<MenuResponseDto[]> {
    const items = await this.menuRepository.find();
    return plainToInstance(MenuResponseDto, items);
  }

  async create(payload: MenuCreateDto): Promise<MenuResponseDto> {
    const newItem = this.menuRepository.create(payload);
    await this.menuRepository.save(newItem);
    return plainToInstance(MenuResponseDto, newItem);
  }
}
