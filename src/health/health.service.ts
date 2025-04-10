import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Health } from './entities/health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly repository: Repository<Health>,
  ) { }
  create(createHealthDto: CreateHealthDto) {
    var response = this.repository.save(createHealthDto);
    return 'This action adds a new health';
  }

  findAll() {
    return `This action returns all health`;
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
      step_count: item.step_count,
      weight: item.weight,
      heart_rate: item.heart_rate,
      calorie_intake: item.calories_intake,
      date: item.date,
      userId: item.user.id,
    }));

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} health`;
  }

  update(id: number, updateHealthDto: UpdateHealthDto) {
    return `This action updates a #${id} health`;
  }

  remove(id: number) {
    return `This action removes a #${id} health`;
  }
}
