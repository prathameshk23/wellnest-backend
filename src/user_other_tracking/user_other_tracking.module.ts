import { Module } from '@nestjs/common';
import { UserOtherTrackingService } from './user_other_tracking.service';
import { UserOtherTrackingController } from './user_other_tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOtherTracking } from './entities/user_other_tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserOtherTracking])],
  controllers: [UserOtherTrackingController],
  providers: [UserOtherTrackingService],
})
export class UserOtherTrackingModule { }
