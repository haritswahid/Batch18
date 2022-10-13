import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';

@Controller('api/employee')
export class EmployeeController {
  constructor(private employeesService: EmployeeService) {}
  @Get()
  public async getAll() {
    return await this.employeesService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.employeesService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.employeesService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.employeesService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.employeesService.delete(id);
  }
}
