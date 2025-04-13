export class CreateMenstrualDto {
  dates: string[]; // should match the entity field name
  month: string;
  year: string;
  userId: string; // This will be used to link the user in your controller/service
}
