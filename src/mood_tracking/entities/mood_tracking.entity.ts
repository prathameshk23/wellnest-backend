import { Mood } from 'src/mood/entities/mood.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoodTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  value: string;

  @Column('date')
  date: Date;

  @ManyToOne(() => User, (user) => user.moodTrackings, { eager: true })
  user: User;

  @Column('text', { array: true })
  moods: string[];
}
