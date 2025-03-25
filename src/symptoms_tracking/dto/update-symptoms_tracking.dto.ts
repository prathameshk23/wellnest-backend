import { PartialType } from '@nestjs/mapped-types';
import { CreateSymptomsTrackingDto } from './create-symptoms_tracking.dto';

export class UpdateSymptomsTrackingDto extends PartialType(CreateSymptomsTrackingDto) {}
