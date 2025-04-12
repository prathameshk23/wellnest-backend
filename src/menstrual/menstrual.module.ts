import { Module } from '@nestjs/common';
import { MenstrualService } from './menstrual.service';
import { MenstrualController } from './menstrual.controller';

@Module({
  controllers: [MenstrualController],
  providers: [MenstrualService],
})
export class MenstrualModule {}
