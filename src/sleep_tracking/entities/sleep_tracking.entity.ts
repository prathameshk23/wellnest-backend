import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SleepTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  sleep_quality: string;

  @Column('date')
  date: Date;

  @Column()
  sleep_time: string;

  @Column('varchar', { length: 200 })
  sleep_factor: string;

  @ManyToOne(() => User, (user) => user.sleepTrackings, { eager: true })
  user: User;
}
