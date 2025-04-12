import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SymptomsModule } from './symptoms/symptoms.module';
import { MoodModule } from './mood/mood.module';
import { OtherTrackingModule } from './other_tracking/other_tracking.module';
import { SleepTrackingModule } from './sleep_tracking/sleep_tracking.module';
import { MoodTrackingModule } from './mood_tracking/mood_tracking.module';
import { SymptomsTrackingModule } from './symptoms_tracking/symptoms_tracking.module';
import { UserSymptomsModule } from './user_symptoms/user_symptoms.module';
import { UserOtherTrackingModule } from './user_other_tracking/user_other_tracking.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './health/health.module';
import { MedicineModule } from './medicine/medicine.module';
import { MenstrualModule } from './menstrual/menstrual.module';

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    SymptomsModule,
    MoodModule,
    OtherTrackingModule,
    SleepTrackingModule,
    MoodTrackingModule,
    SymptomsTrackingModule,
    UserSymptomsModule,
    UserOtherTrackingModule,
    HealthModule,
    MedicineModule,
    MenstrualModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
