import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SymptomsTrackingService } from './symptoms_tracking.service';
import { CreateSymptomsTrackingDto } from './dto/create-symptoms_tracking.dto';
import { UpdateSymptomsTrackingDto } from './dto/update-symptoms_tracking.dto';

@Controller('symptoms-tracking')
export class SymptomsTrackingController {
  constructor(private readonly symptomsTrackingService: SymptomsTrackingService) { }

  @Post()
  create(@Body() createSymptomsTrackingDto: CreateSymptomsTrackingDto) {
    return this.symptomsTrackingService.create(createSymptomsTrackingDto);
  }

  // @Get()
  // findAll() {
  //   return this.symptomsTrackingService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.symptomsTrackingService.findOne(id);
  }

  @Get()
  findFromDate(
    @Query('userId') userId: string,
    @Query('date') date: string,
  ) {
    return this.symptomsTrackingService.findFromDate({ userId, date });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSymptomsTrackingDto: UpdateSymptomsTrackingDto) {
    return this.symptomsTrackingService.update(+id, updateSymptomsTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.symptomsTrackingService.remove(+id);
  }
}
