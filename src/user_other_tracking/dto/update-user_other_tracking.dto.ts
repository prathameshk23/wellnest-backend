import { PartialType } from '@nestjs/mapped-types';
import { CreateUserOtherTrackingDto } from './create-user_other_tracking.dto';

export class UpdateUserOtherTrackingDto extends PartialType(CreateUserOtherTrackingDto) {}
