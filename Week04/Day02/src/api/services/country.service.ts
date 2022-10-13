import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Countries } from '../../models/Countries';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Countries) private countriesRepo: Repository<Countries>,
  ) {}
  public async findAll() {
    return await this.countriesRepo.find();
  }

  public async findOne(id) {
    const country = await this.countriesRepo.findOne({
      where: { countryId: id },
    });
    if (!country)
      throw new NotFoundException(`Country with id: '${id}' not found`);
    return country;
  }
  public async create(fields) {
    try {
      const country = await this.countriesRepo.save({
        countryId: fields.countryId,
        countryName: fields.countryName,
        region: fields.regionId,
      });
      return country;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, fields) {
    try {
      const result = await this.countriesRepo.update(id, {
        countryName: fields.countryName,
      });
      if (result.affected === 0)
        throw new NotFoundException(`Country with id: '${id}' not found`);
      const country = this.findOne(id);
      return country;
    } catch (error) {
      return error.message;
    }
  }
  async delete(id) {
    try {
      const result = await this.countriesRepo.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Country with id: '${id}' not found`);
      return 'Delete ' + result.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
