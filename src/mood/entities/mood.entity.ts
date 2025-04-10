import { MoodTracking } from 'src/mood_tracking/entities/mood_tracking.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mood {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 200 })
  description: string;

  // @OneToMany(() => MoodTracking, (moodTracking) => moodTracking.mood)
  // moodTrackings: MoodTracking[];
}
