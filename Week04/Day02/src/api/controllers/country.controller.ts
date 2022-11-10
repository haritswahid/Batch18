import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CountryService } from '../services/country.service';

@Controller('api/country')
export class CountryController {
  constructor(private countriesService: CountryService) {}
  @Get()
  public async getAll() {
    return await this.countriesService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.countriesService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([]))
  public async create(@Body() fields: any) {
    return this.countriesService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.countriesService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.countriesService.delete(id);
  }
}
