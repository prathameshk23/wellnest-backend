import { PartialType } from '@nestjs/swagger';
import { CreateMenstrualDto } from './create-menstrual.dto';

export class UpdateMenstrualDto extends PartialType(CreateMenstrualDto) {}
