import { Injectable } from '@nestjs/common';
import { CreateUserSymptomDto } from './dto/create-user_symptom.dto';
import { UpdateUserSymptomDto } from './dto/update-user_symptom.dto';

@Injectable()
export class UserSymptomsService {
  create(createUserSymptomDto: CreateUserSymptomDto) {
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
