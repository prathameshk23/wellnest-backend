import { Module } from '@nestjs/common';
import { SleepTrackingService } from './sleep_tracking.service';
import { SleepTrackingController } from './sleep_tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SleepTracking } from './entities/sleep_tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SleepTracking])], // Add your entities here if needed
  controllers: [SleepTrackingController],
  providers: [SleepTrackingService],
})
export class SleepTrackingModule { }
