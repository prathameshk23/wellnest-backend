import { Module } from '@nestjs/common';
import { SymptomsTrackingService } from './symptoms_tracking.service';
import { SymptomsTrackingController } from './symptoms_tracking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SymptomsTracking } from './entities/symptoms_tracking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SymptomsTracking])], // Add your entities here
  controllers: [SymptomsTrackingController],
  providers: [SymptomsTrackingService],
})
export class SymptomsTrackingModule { }
