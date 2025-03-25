import { UserSymptom } from 'src/user_symptoms/entities/user_symptom.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Symptom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 200 })
  description: string;

  @OneToMany(() => UserSymptom, (userSymptom) => userSymptom.symptom)
  userSymptoms: UserSymptom[];
}
