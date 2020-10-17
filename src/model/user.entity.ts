
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    
    @Column({
        primaryKey:true
    })
    user_id: string;

    @Column
    login: string;

    @Column
    password: number;

    @Column
    feedBack_id: number;
}