import { Injectable } from '@nestjs/common';
import { CreateUserOtherTrackingDto } from './dto/create-user_other_tracking.dto';
import { UpdateUserOtherTrackingDto } from './dto/update-user_other_tracking.dto';

@Injectable()
export class UserOtherTrackingService {
  create(createUserOtherTrackingDto: CreateUserOtherTrackingDto) {
    return 'This action adds a new userOtherTracking';
  }

  findAll() {
    return `This action returns all userOtherTracking`;
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
