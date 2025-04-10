import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Health {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    step_count: string;

    @Column()
    weight: string;

    @Column()
    heart_rate: string;

    @Column()
    calories_intake: string;

    @Column('date')
    date: Date;

    @ManyToOne(() => User, (user) => user.health, { eager: true })
    user: User;

}
