import { Injectable } from '@nestjs/common';
import { CreateMenstrualDto } from './dto/create-menstrual.dto';
import { UpdateMenstrualDto } from './dto/update-menstrual.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menstrual } from './entities/menstrual.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenstrualService {
  constructor(
    @InjectRepository(Menstrual)
    private readonly menstrualRepository: Repository<Menstrual>,

  ) {

  }
  create(createMenstrualDto: CreateMenstrualDto) {
    console.log('createMenstrualDto', createMenstrualDto);
    const menstrual = this.menstrualRepository.save(createMenstrualDto);
    return 'This action adds a new menstrual';
  }

  findAll() {
    return `This action returns all menstrual`;
  }

  async findFromDate(input: any) {
    const { userId, month, year } = input;

    // const parsedDate = new Date(date);

    const response = await this.menstrualRepository.find({
      where: {
        user: { id: userId },
        month: month,
        year: year,
      },
    });

    const result = response.map((item) => ({
      id: item.id,
      date: item.dates,
      month: item.month,
      year: item.year,
      userId: item.user.id,
    }));

    return result;
  }



  findOne(id: number) {
    return `This action returns a #${id} menstrual`;
  }

  update(id: number, updateMenstrualDto: UpdateMenstrualDto) {
    return `This action updates a #${id} menstrual`;
  }

  remove(id: number) {
    return `This action removes a #${id} menstrual`;
  }
}
