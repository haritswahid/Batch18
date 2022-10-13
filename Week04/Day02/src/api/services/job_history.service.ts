import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobHistory } from '../../models/JobHistory';
import { Repository } from 'typeorm';

@Injectable()
export class JobHistoryService {
  constructor(
    @InjectRepository(JobHistory)
    private jobHistorysRepo: Repository<JobHistory>,
  ) {}
  public async findAll() {
    return await this.jobHistorysRepo.find();
  }
  public async create(fields) {
    try {
      const jobHistory = await this.jobHistorysRepo.save({
        employeeId: fields.employeeId,
        department: fields.department,
        startDate: fields.startDate,
        endDate: fields.endDate,
        job: fields.job,
      });
      return jobHistory;
    } catch (error) {
      return error.message;
    }
  }
}
