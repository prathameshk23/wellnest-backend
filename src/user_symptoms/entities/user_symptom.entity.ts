import { Symptom } from 'src/symptoms/entities/symptom.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserSymptom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userSymptoms)
  user: User;

  @ManyToOne(() => Symptom, (symptom) => symptom.userSymptoms)
  symptom: Symptom;
}
