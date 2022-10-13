import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobService } from '../services/job.service';

@Controller('api/job')
export class JobController {
  constructor(private jobsService: JobService) {}
  @Get()
  public async getAll() {
    return await this.jobsService.findAll();
  }

  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.jobsService.findOne(id);
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.jobsService.create(fields);
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Body() fields: any) {
    return this.jobsService.update(id, fields);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    return this.jobsService.delete(id);
  }
}
