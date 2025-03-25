import { Module } from '@nestjs/common';
import { SymptomsTrackingService } from './symptoms_tracking.service';
import { SymptomsTrackingController } from './symptoms_tracking.controller';

@Module({
  controllers: [SymptomsTrackingController],
  providers: [SymptomsTrackingService],
})
export class SymptomsTrackingModule {}
