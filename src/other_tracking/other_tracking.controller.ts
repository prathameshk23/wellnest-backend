import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OtherTrackingService } from './other_tracking.service';
import { CreateOtherTrackingDto } from './dto/create-other_tracking.dto';
import { UpdateOtherTrackingDto } from './dto/update-other_tracking.dto';

@Controller('other-tracking')
export class OtherTrackingController {
  constructor(private readonly otherTrackingService: OtherTrackingService) {}

  @Post()
  create(@Body() createOtherTrackingDto: CreateOtherTrackingDto) {
    return this.otherTrackingService.create(createOtherTrackingDto);
  }

  @Get()
  findAll() {
    return this.otherTrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otherTrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOtherTrackingDto: UpdateOtherTrackingDto) {
    return this.otherTrackingService.update(+id, updateOtherTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.otherTrackingService.remove(+id);
  }
}
