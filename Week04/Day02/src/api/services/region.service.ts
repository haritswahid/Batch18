import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regions } from '../../models/Regions';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Regions) private regionsRepo: Repository<Regions>,
  ) {}
  public async findAll() {
    return await this.regionsRepo.find();
  }

  public async findOne(id) {
    const region = await this.regionsRepo.findOne({ where: { regionId: id } });
    if (!region) throw new NotFoundException(`Region id ${id} not found`);
    return region;
  }
  public async create(file, fields) {
    try {
      if (file) {
        const region = await this.regionsRepo.save({
          regionName: fields.regionName,
          regionPhoto: file.file ? file.file[0].originalname : null,
          regionFile: file.foto ? file.foto[0].originalname : null,
        });
        return region;
      } else {
        const region = await this.regionsRepo.save({
          regionName: fields.regionName,
          regionPhoto: null,
          regionFile: null,
        });
        return region;
      }
    } catch (error) {
      return error.message;
    }
  }
  public async update(id, file, fields) {
    let payload = {};
    if (file) {
      payload = {
        regionName: fields.regionName,
        regionPhoto: file.file ? file.file[0].originalname : null,
        regionFile: file.foto ? file.foto[0].originalname : null,
      };
    } else {
      payload = {
        regionName: fields.regionName,
      };
    }
    const region = await this.regionsRepo.update(id, payload);
    if (!region) throw new NotFoundException(`Region id ${id} not found`);
    return await this.regionsRepo.findOne({ where: { regionId: id } });
  }
  async delete(id) {
    const region = await this.regionsRepo.delete(id);
    if (!region.affected)
      throw new NotFoundException(`Region id ${id} not found`);
    return 'Delete ' + region.affected + ' rows';
  }
}
