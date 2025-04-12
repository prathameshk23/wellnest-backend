import { Health } from 'src/health/entities/health.entity';
import { Medicine } from 'src/medicine/entities/medicine.entity';
import { Menstrual } from 'src/menstrual/entities/menstrual.entity';
import { MoodTracking } from 'src/mood_tracking/entities/mood_tracking.entity';
import { SleepTracking } from 'src/sleep_tracking/entities/sleep_tracking.entity';
import { SymptomsTracking } from 'src/symptoms_tracking/entities/symptoms_tracking.entity';
import { UserOtherTracking } from 'src/user_other_tracking/entities/user_other_tracking.entity';
import { UserSymptom } from 'src/user_symptoms/entities/user_symptom.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 200 })
  email: string;

  @Column()
  panda: string;

  @Column()
  username: string;

  @Column('varchar', { length: 100 })
  gender: string;

  @Column()
  age_group: string;

  @Column()
  motivation_level: string;

  @Column('text', { array: true })
  wellness_goals: string[]

  @Column()
  health_status: string;

  @Column()
  isMenstrual: boolean;

  @Column()
  authid: string;

  @OneToMany(() => UserSymptom, (userSymptom) => userSymptom.user)
  userSymptoms: UserSymptom[];

  @OneToMany(() => MoodTracking, (moodTracking) => moodTracking.user)
  moodTrackings: MoodTracking[];

  @OneToMany(
    () => UserOtherTracking,
    (userOtherTracking) => userOtherTracking.user,
  )
  userOtherTrackings: UserOtherTracking[];

  @OneToMany(
    () => SymptomsTracking,
    (symptomsTracking) => symptomsTracking.user,
  )
  symptomsTrackings: SymptomsTracking[];

  @OneToMany(() => SleepTracking, (sleepTracking) => sleepTracking.user)
  sleepTrackings: SleepTracking[];

  @OneToMany(() => Health, (health) => health.user)
  health: Health[];

  @OneToMany(() => Medicine, (medicine) => medicine.user)
  medicine: Medicine[];

  @OneToMany(() => Menstrual, (menstrual) => menstrual.user)
  menstrual: Menstrual[];
}
