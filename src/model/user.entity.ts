
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { FeedBack } from './feedBack.entity';

@Table
export class User extends Model<User> {
    
    @Column({
        primaryKey:true,
        autoIncrement:true
    })
    user_id: string;

    @Column
    login: string;

    @Column
    password: number;

    @HasMany(() => FeedBack, 'user_id')
    feedBack: FeedBack[];
}