import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobHistoryService } from '../services/job_history.service';

@Controller('job-history')
export class JobHistoryController {
  constructor(private jobHistorysService: JobHistoryService) {}
  @Get()
  public async getAll() {
    return await this.jobHistorysService.findAll();
  }

  @Post()
  public async create(@Body() fields: any) {
    return this.jobHistorysService.create(fields);
  }
}
