import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoodTrackingService } from './mood_tracking.service';
import { CreateMoodTrackingDto } from './dto/create-mood_tracking.dto';
import { UpdateMoodTrackingDto } from './dto/update-mood_tracking.dto';

@Controller('mood-tracking')
export class MoodTrackingController {
  constructor(private readonly moodTrackingService: MoodTrackingService) {}

  @Post()
  create(@Body() createMoodTrackingDto: CreateMoodTrackingDto) {
    return this.moodTrackingService.create(createMoodTrackingDto);
  }

  @Get()
  findAll() {
    return this.moodTrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moodTrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoodTrackingDto: UpdateMoodTrackingDto) {
    return this.moodTrackingService.update(+id, updateMoodTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moodTrackingService.remove(+id);
  }
}
