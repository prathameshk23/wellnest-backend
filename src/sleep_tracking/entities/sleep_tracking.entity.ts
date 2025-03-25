import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SleepTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  sleep_quality: string;

  @Column('timestamp with time zone')
  date: Date;

  @Column('timestamp with time zone')
  sleep_time: Date;

  @Column('varchar', { length: 200 })
  sleep_factor: string;

  @ManyToOne(() => User, (user) => user.sleepTrackings)
  user: User;
}
