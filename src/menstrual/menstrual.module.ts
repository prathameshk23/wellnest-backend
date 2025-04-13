import { Module } from '@nestjs/common';
import { MenstrualService } from './menstrual.service';
import { MenstrualController } from './menstrual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menstrual } from './entities/menstrual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Menstrual])],
  controllers: [MenstrualController],
  providers: [MenstrualService],
})
export class MenstrualModule {}
