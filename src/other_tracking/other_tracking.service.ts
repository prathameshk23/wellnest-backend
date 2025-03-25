import { Injectable } from '@nestjs/common';
import { CreateOtherTrackingDto } from './dto/create-other_tracking.dto';
import { UpdateOtherTrackingDto } from './dto/update-other_tracking.dto';

@Injectable()
export class OtherTrackingService {
  create(createOtherTrackingDto: CreateOtherTrackingDto) {
    return 'This action adds a new otherTracking';
  }

  findAll() {
    return `This action returns all otherTracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otherTracking`;
  }

  update(id: number, updateOtherTrackingDto: UpdateOtherTrackingDto) {
    return `This action updates a #${id} otherTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} otherTracking`;
  }
}
