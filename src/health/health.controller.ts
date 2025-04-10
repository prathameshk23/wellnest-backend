import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) { }

  @Post()
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get()
  findFromDate(
    @Query('userId') userId: string,
    @Query('date') date: string,
  ) {
    return this.healthService.findFromDate({ userId, date });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthDto: UpdateHealthDto) {
    return this.healthService.update(+id, updateHealthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthService.remove(+id);
  }
}
