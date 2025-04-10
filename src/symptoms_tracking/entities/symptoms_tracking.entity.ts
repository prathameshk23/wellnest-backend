import { User } from 'src/user/entities/user.entity';
import { UserSymptom } from 'src/user_symptoms/entities/user_symptom.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SymptomsTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  value: string;

  @Column('date')
  date: Date;

  @ManyToOne(() => UserSymptom, (userSymptom) => userSymptom.symptomsTrackings, { eager: true })
  userSymptom: UserSymptom;

  @ManyToOne(() => User, (userSymptom) => userSymptom.symptomsTrackings, { eager: true })
  user: User;
}
