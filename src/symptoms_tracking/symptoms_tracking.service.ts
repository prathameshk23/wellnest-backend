import { Injectable } from '@nestjs/common';
import { CreateSymptomsTrackingDto } from './dto/create-symptoms_tracking.dto';
import { UpdateSymptomsTrackingDto } from './dto/update-symptoms_tracking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SymptomsTracking } from './entities/symptoms_tracking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SymptomsTrackingService {
  constructor(
    @InjectRepository(SymptomsTracking)
    private readonly repository: Repository<SymptomsTracking>,
  ) { }
  async create(createSymptomsTrackingDto: CreateSymptomsTrackingDto) {
    console.log('createSymptomsTrackingDto', createSymptomsTrackingDto);
    const symptomsTracking = this.repository.create(createSymptomsTrackingDto);
    return 'This action adds a new symptomsTracking';
  }

  findAll() {
    return `This action returns all symptomsTracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} symptomsTracking`;
  }

  update(id: number, updateSymptomsTrackingDto: UpdateSymptomsTrackingDto) {
    return `This action updates a #${id} symptomsTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptomsTracking`;
  }
}
