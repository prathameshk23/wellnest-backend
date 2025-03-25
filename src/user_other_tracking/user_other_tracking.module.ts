import { Module } from '@nestjs/common';
import { UserOtherTrackingService } from './user_other_tracking.service';
import { UserOtherTrackingController } from './user_other_tracking.controller';

@Module({
  controllers: [UserOtherTrackingController],
  providers: [UserOtherTrackingService],
})
export class UserOtherTrackingModule {}
