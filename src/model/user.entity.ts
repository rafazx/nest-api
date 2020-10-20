
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { FeedBackEntity } from './feedBack.entity';

@Table({tableName: 'User'})
export class UserEntity extends Model<UserEntity> {
    @Column({
        primaryKey:true,
        autoIncrement:true
    })
    user_id: number;

    @Column
    login: string;

    @Column
    password: string;

    @HasMany(() => FeedBackEntity, 'userReceived_id')
    feedBackRecived: FeedBackEntity[];
    
    @HasMany(() => FeedBackEntity, 'userSender_id')
    feedBackSend: FeedBackEntity[];
}