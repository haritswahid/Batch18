import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Departments } from '../../models/Departments';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Departments)
    private departmentsRepo: Repository<Departments>,
  ) {}
  public async findAll() {
    return await this.departmentsRepo.find();
  }

  public async findOne(id) {
    const department = await this.departmentsRepo.findOne({
      where: { departmentId: id },
    });
    if (!department)
      throw new NotFoundException(`Department with id: '${id}' not found`);
    return department;
  }
  public async create(fields) {
    try {
      const department = await this.departmentsRepo.save({
        departmentId: fields.departmentId,
        departmentName: fields.departmentName,
        manager: fields.manager,
        location: fields.location,
      });
      return department;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, fields) {
    try {
      const result = await this.departmentsRepo.update(id, {
        departmentName: fields.departmentName,
        location: fields.location,
      });
      if (result.affected === 0)
        throw new NotFoundException(`Department with id: '${id}' not found`);
      const department = this.findOne(id);
      return department;
    } catch (error) {
      return error.message;
    }
  }
  async delete(id) {
    try {
      const result = await this.departmentsRepo.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Department with id: '${id}' not found`);
      return 'Delete ' + result.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
