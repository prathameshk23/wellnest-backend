import { PartialType } from '@nestjs/mapped-types';
import { CreateOtherTrackingDto } from './create-other_tracking.dto';

export class UpdateOtherTrackingDto extends PartialType(CreateOtherTrackingDto) {}
