import { PartialType } from '@nestjs/mapped-types';
import { CreateSleepTrackingDto } from './create-sleep_tracking.dto';

export class UpdateSleepTrackingDto extends PartialType(CreateSleepTrackingDto) {}
