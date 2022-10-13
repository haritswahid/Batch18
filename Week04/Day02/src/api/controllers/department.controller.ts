import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from '../services/department.service';

@Controller('api/department')
export class DepartmentController {
  constructor(private departmentsService: DepartmentService) {}
  @Get()
  public async getAll() {
    return await this.departmentsService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.departmentsService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.departmentsService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.departmentsService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.departmentsService.delete(id);
  }
}
