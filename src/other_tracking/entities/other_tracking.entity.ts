import { UserOtherTracking } from 'src/user_other_tracking/entities/user_other_tracking.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OtherTracking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 200 })
  name: string;

  @Column('varchar', { length: 200 })
  description: string;

  @OneToMany(
    () => UserOtherTracking,
    (userOtherTracking) => userOtherTracking.otherTracking,
  )
  userOtherTrackings: UserOtherTracking[];
}
