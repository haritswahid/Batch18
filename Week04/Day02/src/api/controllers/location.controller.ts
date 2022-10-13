import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LocationService } from '../services/location.service';

@Controller('api/location')
export class LocationController {
  constructor(private locationsService: LocationService) {}
  @Get()
  public async getAll() {
    return await this.locationsService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.locationsService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.locationsService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.locationsService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.locationsService.delete(id);
  }
}
