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
    const symptomsTracking = this.repository.save(createSymptomsTrackingDto);
    return 'This action adds a new symptomsTracking';
  }

  findAll() {
    return `This action returns all symptomsTracking`;
  }

  async findOne(id: string) {
    var response = await this.repository.find({ where: { user: { id: id } } });
    const result = response.map((item) => ({
      id: item.id,
      value: item.value,
      date: item.date,
      userSymptomId: item.userSymptom.id,
      userId: item.user.id,
    }));
    return result;
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
      userSymptomId: item.userSymptom.id,
      userId: item.user.id,
    }));

    return result;
  }

  update(id: number, updateSymptomsTrackingDto: UpdateSymptomsTrackingDto) {
    return `This action updates a #${id} symptomsTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} symptomsTracking`;
  }
}
