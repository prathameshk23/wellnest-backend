import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MenstrualService } from './menstrual.service';
import { CreateMenstrualDto } from './dto/create-menstrual.dto';
import { UpdateMenstrualDto } from './dto/update-menstrual.dto';

@Controller('menstrual')
export class MenstrualController {
  constructor(private readonly menstrualService: MenstrualService) { }

  @Post()
  create(@Body() createMenstrualDto: CreateMenstrualDto) {
    return this.menstrualService.create(createMenstrualDto);
  }

  @Get()
  findFromDate(
    @Query('userId') userId: string,
    @Query('month') date: string,
    @Query('year') year: string,
  ) {
    return this.menstrualService.findFromDate({ userId, date });
  }

  // @Get()
  //   findFromDate(
  //     @Query('userId') userId: string,
  //     @Query('date') date: string,
  //   ) {
  //     return this.menstrualService.findFromDate({ userId, date });
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menstrualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenstrualDto: UpdateMenstrualDto) {
    return this.menstrualService.update(+id, updateMenstrualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menstrualService.remove(+id);
  }
}
