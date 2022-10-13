import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from '../../models/Employees';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employees) private employeesRepo: Repository<Employees>,
  ) {}
  public async findAll() {
    return await this.employeesRepo.find();
  }

  public async findOne(id) {
    const employee = await this.employeesRepo.findOne({
      where: { employeeId: id },
    });
    if (!employee)
      throw new NotFoundException(`Employee with id: '${id}' not found`);
    return employee;
  }
  public async create(fields) {
    try {
      const employee = await this.employeesRepo.save({
        employeeId: fields.employeeId,
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
        hireDate: fields.hireDate,
        salary: fields.salary,
        job: fields.job,
        manager: fields.manager,
        department: fields.department,
        commissionPct: fields.commission_pct,
      });
      return employee;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, fields) {
    try {
      const result = await this.employeesRepo.update(id, {
        firstName: fields.firstName,
        lastName: fields.lastName,
        email: fields.email,
        phoneNumber: fields.phoneNumber,
        hireDate: fields.hireDate,
        salary: fields.salary,
      });
      if (result.affected === 0)
        throw new NotFoundException(`Employee with id: '${id}' not found`);
      const employee = this.findOne(id);
      return employee;
    } catch (error) {
      return error.message;
    }
  }
  async delete(id) {
    try {
      const result = await this.employeesRepo.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Employee with id: '${id}' not found`);
      return 'Delete ' + result.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
