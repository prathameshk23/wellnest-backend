import { Module } from '@nestjs/common';
import { SleepTrackingService } from './sleep_tracking.service';
import { SleepTrackingController } from './sleep_tracking.controller';

@Module({
  controllers: [SleepTrackingController],
  providers: [SleepTrackingService],
})
export class SleepTrackingModule {}
