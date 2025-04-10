import { Module } from '@nestjs/common';
import { MoodTrackingService } from './mood_tracking.service';
import { MoodTrackingController } from './mood_tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoodTracking } from './entities/mood_tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoodTracking])],
  controllers: [MoodTrackingController],
  providers: [MoodTrackingService],
})
export class MoodTrackingModule { }
