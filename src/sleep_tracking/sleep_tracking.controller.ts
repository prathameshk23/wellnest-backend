import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SleepTrackingService } from './sleep_tracking.service';
import { CreateSleepTrackingDto } from './dto/create-sleep_tracking.dto';
import { UpdateSleepTrackingDto } from './dto/update-sleep_tracking.dto';

@Controller('sleep-tracking')
export class SleepTrackingController {
  constructor(private readonly sleepTrackingService: SleepTrackingService) {}

  @Post()
  create(@Body() createSleepTrackingDto: CreateSleepTrackingDto) {
    return this.sleepTrackingService.create(createSleepTrackingDto);
  }

  @Get()
  findAll() {
    return this.sleepTrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sleepTrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSleepTrackingDto: UpdateSleepTrackingDto) {
    return this.sleepTrackingService.update(+id, updateSleepTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sleepTrackingService.remove(+id);
  }
}
