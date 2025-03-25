import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SymptomsTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  value: string;

  @Column('timestamp with time zone')
  date: Date;

  @ManyToOne(() => User, (user) => user.symptomsTrackings)
  user: User;
}
