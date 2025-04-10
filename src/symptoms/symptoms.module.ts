import { Module } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';
import { SymptomsController } from './symptoms.controller';
import {Symptom} from "./entities/symptom.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports:[TypeOrmModule.forFeature([Symptom])],
  controllers: [SymptomsController],
  providers: [SymptomsService],
})
export class SymptomsModule {}
