import { Module } from '@nestjs/common';
import { MoodTrackingService } from './mood_tracking.service';
import { MoodTrackingController } from './mood_tracking.controller';

@Module({
  controllers: [MoodTrackingController],
  providers: [MoodTrackingService],
})
export class MoodTrackingModule {}
