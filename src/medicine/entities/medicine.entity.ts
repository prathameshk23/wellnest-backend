import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Medicine {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 200 })
    name: string;

    @Column('varchar', { length: 200 })
    dosage: string;

    @Column('date')
    date: Date;

    @ManyToOne(() => User, (user) => user.health, { eager: true })
    user: User;

}
