import { Module } from '@nestjs/common';
import { UserSymptomsService } from './user_symptoms.service';
import { UserSymptomsController } from './user_symptoms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSymptom } from './entities/user_symptom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSymptom])], // Add your entities here
  controllers: [UserSymptomsController],
  providers: [UserSymptomsService],
})
export class UserSymptomsModule { }
