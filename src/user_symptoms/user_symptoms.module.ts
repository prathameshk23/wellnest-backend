import { Module } from '@nestjs/common';
import { UserSymptomsService } from './user_symptoms.service';
import { UserSymptomsController } from './user_symptoms.controller';

@Module({
  controllers: [UserSymptomsController],
  providers: [UserSymptomsService],
})
export class UserSymptomsModule {}
