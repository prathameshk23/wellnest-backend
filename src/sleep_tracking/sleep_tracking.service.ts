import { Injectable } from '@nestjs/common';
import { CreateSleepTrackingDto } from './dto/create-sleep_tracking.dto';
import { UpdateSleepTrackingDto } from './dto/update-sleep_tracking.dto';
import { SleepTracking } from './entities/sleep_tracking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SleepTrackingService {
  constructor(
    @InjectRepository(SleepTracking)
    private readonly repository: Repository<SleepTracking>,
  ) { }
  async create(createSleepTrackingDto: CreateSleepTrackingDto) {
    await this.repository.save(createSleepTrackingDto);
    return 'This action adds a new sleepTracking';
  }

  findAll() {
    return `This action returns all sleepTracking`;
  }
  async findFromDate(input: any) {
    const { userId, date } = input;

    const parsedDate = new Date(date);

    const response = await this.repository.find({
      where: {
        user: { id: userId },
        date: parsedDate,
      },
    });

    const result = response.map((item) => ({
      id: item.id,
      sleep_quality: item.sleep_quality,
      sleep_facrtor: item.sleep_factor,
      sleep_time: item.sleep_time,
      date: item.date,
      userId: item.user.id,
    }));

    return result;
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
