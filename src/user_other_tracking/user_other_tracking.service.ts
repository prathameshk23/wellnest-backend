import { Injectable } from '@nestjs/common';
import { CreateUserOtherTrackingDto } from './dto/create-user_other_tracking.dto';
import { UpdateUserOtherTrackingDto } from './dto/update-user_other_tracking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserOtherTracking } from './entities/user_other_tracking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserOtherTrackingService {
  constructor(
    @InjectRepository(UserOtherTracking)
    private readonly repository: Repository<UserOtherTracking>,
  ) { }
  create(createUserOtherTrackingDto: CreateUserOtherTrackingDto) {
    console.log('createUserOtherTrackingDto', createUserOtherTrackingDto);
    const userOtherTracking = this.repository.save(createUserOtherTrackingDto);
    return 'This action adds a new userOtherTracking';
  }

  findAll() {
    return `This action returns all userOtherTracking`;
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
      otherfactor: item.otherTracking.id,
      otherFactorName: item.otherTracking.name,
      userId: item.user.id,
    }));

    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} userOtherTracking`;
  }

  update(id: number, updateUserOtherTrackingDto: UpdateUserOtherTrackingDto) {
    return `This action updates a #${id} userOtherTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} userOtherTracking`;
  }
}
