import { Injectable } from '@nestjs/common';
import { CreateMoodTrackingDto } from './dto/create-mood_tracking.dto';
import { UpdateMoodTrackingDto } from './dto/update-mood_tracking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MoodTracking } from './entities/mood_tracking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoodTrackingService {
  constructor(
    @InjectRepository(MoodTracking)
    private readonly repository: Repository<MoodTracking>,
  ) { }
  create(createMoodTrackingDto: CreateMoodTrackingDto) {
    console.log('createMoodTrackingDto', createMoodTrackingDto);
    const moodTracking = this.repository.save(createMoodTrackingDto);
    return 'This action adds a new moodTracking';
  }

  findAll() {
    return `This action returns all moodTracking`;
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
      value: item.value,
      date: item.date,
      moods: item.moods,
      userId: item.user.id,
    }));

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} moodTracking`;
  }

  update(id: number, updateMoodTrackingDto: UpdateMoodTrackingDto) {
    return `This action updates a #${id} moodTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} moodTracking`;
  }
}
