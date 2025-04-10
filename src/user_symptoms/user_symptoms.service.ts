import { Injectable } from '@nestjs/common';
import { CreateUserSymptomDto } from './dto/create-user_symptom.dto';
import { UpdateUserSymptomDto } from './dto/update-user_symptom.dto';
import { UserSymptom } from './entities/user_symptom.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserSymptomsService {
  constructor(
    @InjectRepository(UserSymptom)
    private readonly userSymptomRepository: Repository<UserSymptom>,
  ) { }
  async create(createUserSymptomDto: CreateUserSymptomDto) {
    console.log('createUserSymptomDto', createUserSymptomDto);
    const userSymptom = await this.userSymptomRepository.save(createUserSymptomDto);
    return 'This action adds a new userSymptom';
  }

  findAll() {
    return `This action returns all userSymptoms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSymptom`;
  }

  update(id: number, updateUserSymptomDto: UpdateUserSymptomDto) {
    return `This action updates a #${id} userSymptom`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSymptom`;
  }
}
