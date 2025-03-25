import { Module } from '@nestjs/common';
import { OtherTrackingService } from './other_tracking.service';
import { OtherTrackingController } from './other_tracking.controller';

@Module({
  controllers: [OtherTrackingController],
  providers: [OtherTrackingService],
})
export class OtherTrackingModule {}
