import { PartialType } from '@nestjs/mapped-types';
import { CreateMoodTrackingDto } from './create-mood_tracking.dto';

export class UpdateMoodTrackingDto extends PartialType(CreateMoodTrackingDto) {}
