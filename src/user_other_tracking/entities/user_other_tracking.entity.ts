import { OtherTracking } from 'src/other_tracking/entities/other_tracking.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserOtherTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('timestamp with time zone')
  date: Date;

  @Column('varchar', { length: 200 })
  value: string;

  @ManyToOne(
    () => OtherTracking,
    (otherTracking) => otherTracking.userOtherTrackings,
  )
  otherTracking: OtherTracking;

  @ManyToOne(() => User, (user) => user.userOtherTrackings)
  user: User;
}
