import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Health } from './entities/health.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Health])], // Add your imports here if needed
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule { }
