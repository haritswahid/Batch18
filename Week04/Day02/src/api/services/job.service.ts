import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Jobs } from '../../models/Jobs';
import { Repository } from 'typeorm';

@Injectable()
export class JobService {
  constructor(@InjectRepository(Jobs) private jobsRepo: Repository<Jobs>) {}
  public async findAll() {
    return await this.jobsRepo.find();
  }

  public async findOne(id) {
    const job = await this.jobsRepo.findOne({
      where: { jobId: id },
    });
    if (!job) throw new NotFoundException(`Job with id: '${id}' not found`);
    return job;
  }
  public async create(fields) {
    try {
      const job = await this.jobsRepo.save({
        jobId: fields.jobId,
        jobTitle: fields.jobTitle,
        minSalary: fields.minSalary,
        maxSalary: fields.maxSalary,
      });
      return job;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, fields) {
    try {
      const result = await this.jobsRepo.update(id, {
        jobTitle: fields.jobTitle,
        minSalary: fields.minSalary,
        maxSalary: fields.maxSalary,
      });
      if (result.affected === 0)
        throw new NotFoundException(`Job with id: '${id}' not found`);
      const job = this.findOne(id);
      return job;
    } catch (error) {
      return error.message;
    }
  }
  async delete(id) {
    try {
      const result = await this.jobsRepo.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Job with id: '${id}' not found`);
      return 'Delete ' + result.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
