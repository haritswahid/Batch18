import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from '../../models/Locations';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Locations) private locationsRepo: Repository<Locations>,
  ) {}
  public async findAll() {
    return await this.locationsRepo.find();
  }

  public async findOne(id) {
    const location = await this.locationsRepo.findOne({
      where: { locationId: id },
    });
    if (!location)
      throw new NotFoundException(`Location with id: '${id}' not found`);
    return location;
  }
  public async create(fields) {
    try {
      const location = await this.locationsRepo.save({
        locationId: parseInt(fields.locationId),
        streetAddress: fields.streetAddress,
        postalCode: fields.postalCode,
        city: fields.city,
        stateProvince: fields.stateProvince,
        country: fields.country,
      });
      return location;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, fields) {
    try {
      const result = await this.locationsRepo.update(id, {
        streetAddress: fields.streetAddress,
        postalCode: fields.postalCode,
        city: fields.city,
        stateProvince: fields.stateProvince,
      });
      if (result.affected === 0)
        throw new NotFoundException(`Location with id: '${id}' not found`);
      const location = this.findOne(id);
      return location;
    } catch (error) {
      return error.message;
    }
  }
  async delete(id) {
    try {
      const result = await this.locationsRepo.delete(id);
      if (result.affected === 0)
        throw new NotFoundException(`Location with id: '${id}' not found`);
      return 'Delete ' + result.affected + ' rows';
    } catch (error) {
      return error.message;
    }
  }
}
