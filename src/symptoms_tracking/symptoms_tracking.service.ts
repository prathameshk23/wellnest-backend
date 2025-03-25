import { Injectable } from '@nestjs/common';
import { CreateSymptomsTrackingDto } from './dto/create-symptoms_tracking.dto';
import { UpdateSymptomsTrackingDto } from './dto/update-symptoms_tracking.dto';

@Injectable()
export class SymptomsTrackingService {
  create(createSymptomsTrackingDto: CreateSymptomsTrackingDto) {
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
