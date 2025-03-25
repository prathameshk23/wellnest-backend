import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSymptomDto } from './create-user_symptom.dto';

export class UpdateUserSymptomDto extends PartialType(CreateUserSymptomDto) {}
