import { OtherTracking } from 'src/other_tracking/entities/other_tracking.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserOtherTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('date')
  date: Date;

  @Column('varchar', { length: 200 })
  value: string;

  @ManyToOne(
    () => OtherTracking,
    (otherTracking) => otherTracking.userOtherTrackings,
    { eager: true, nullable: true },
  )
  otherTracking: OtherTracking;

  @ManyToOne(() => User, (user) => user.userOtherTrackings, { eager: true })
  user: User;
}
