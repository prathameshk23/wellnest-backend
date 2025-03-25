import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSymptomsService } from './user_symptoms.service';
import { CreateUserSymptomDto } from './dto/create-user_symptom.dto';
import { UpdateUserSymptomDto } from './dto/update-user_symptom.dto';

@Controller('user-symptoms')
export class UserSymptomsController {
  constructor(private readonly userSymptomsService: UserSymptomsService) {}

  @Post()
  create(@Body() createUserSymptomDto: CreateUserSymptomDto) {
    return this.userSymptomsService.create(createUserSymptomDto);
  }

  @Get()
  findAll() {
    return this.userSymptomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSymptomsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSymptomDto: UpdateUserSymptomDto) {
    return this.userSymptomsService.update(+id, updateUserSymptomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSymptomsService.remove(+id);
  }
}
