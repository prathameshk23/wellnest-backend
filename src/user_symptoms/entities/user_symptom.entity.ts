import { Symptom } from 'src/symptoms/entities/symptom.entity';
import { SymptomsTracking } from 'src/symptoms_tracking/entities/symptoms_tracking.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, ManyToOne, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class UserSymptom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.userSymptoms, { eager: true })
  user: User;

  @ManyToOne(() => Symptom, (symptom) => symptom.userSymptoms, { eager: true })
  symptom: Symptom;

  @OneToMany(
    () => SymptomsTracking,
    (symptomsTracking) => symptomsTracking.userSymptom,
  )
  symptomsTrackings: SymptomsTracking[];


  // @Column()
  // user: string;

  // @Column()
  // symptom: string;
}
