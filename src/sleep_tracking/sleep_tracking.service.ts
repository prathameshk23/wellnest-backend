import { Injectable } from '@nestjs/common';
import { CreateSleepTrackingDto } from './dto/create-sleep_tracking.dto';
import { UpdateSleepTrackingDto } from './dto/update-sleep_tracking.dto';

@Injectable()
export class SleepTrackingService {
  create(createSleepTrackingDto: CreateSleepTrackingDto) {
    return 'This action adds a new sleepTracking';
  }

  findAll() {
    return `This action returns all sleepTracking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sleepTracking`;
  }

  update(id: number, updateSleepTrackingDto: UpdateSleepTrackingDto) {
    return `This action updates a #${id} sleepTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} sleepTracking`;
  }
}
