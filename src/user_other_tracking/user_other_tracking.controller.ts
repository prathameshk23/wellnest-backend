import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserOtherTrackingService } from './user_other_tracking.service';
import { CreateUserOtherTrackingDto } from './dto/create-user_other_tracking.dto';
import { UpdateUserOtherTrackingDto } from './dto/update-user_other_tracking.dto';

@Controller('user-other-tracking')
export class UserOtherTrackingController {
  constructor(private readonly userOtherTrackingService: UserOtherTrackingService) {}

  @Post()
  create(@Body() createUserOtherTrackingDto: CreateUserOtherTrackingDto) {
    return this.userOtherTrackingService.create(createUserOtherTrackingDto);
  }

  @Get()
  findAll() {
    return this.userOtherTrackingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userOtherTrackingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserOtherTrackingDto: UpdateUserOtherTrackingDto) {
    return this.userOtherTrackingService.update(+id, updateUserOtherTrackingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userOtherTrackingService.remove(+id);
  }
}
