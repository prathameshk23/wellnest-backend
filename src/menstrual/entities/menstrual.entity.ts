import { Mood } from 'src/mood/entities/mood.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menstrual {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { array: true })
    dates: string[];

    @Column()
    month: string;

    @Column()
    year: string;

    @ManyToOne(() => User, (user) => user.menstrual, { eager: true })
    user: User;
}

