import { SymptomsTracking } from 'src/symptoms_tracking/entities/symptoms_tracking.entity';
import { UserSymptom } from 'src/user_symptoms/entities/user_symptom.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Symptom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 200, nullable: true, })
  description: string;

  @OneToMany(() => UserSymptom, (userSymptom) => userSymptom.symptom)
  userSymptoms: UserSymptom[];


}
