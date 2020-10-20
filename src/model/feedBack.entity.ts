
import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserEntity } from './user.entity';

@Table({tableName: 'FeedBack'})
export class FeedBackEntity extends Model<FeedBackEntity> {

    @Column({
        primaryKey:true,
        autoIncrement: true
    })
    fb_id: number;

    @ForeignKey(() => UserEntity)
    @Column
    userReceived_id: number;

    @ForeignKey(() => UserEntity)
    @Column
    userSender_id: number;

    @BelongsTo(() => UserEntity, 'userReceived_id')
    userReceived: UserEntity;

    @BelongsTo(() => UserEntity, 'userSender_id')
    userSender: UserEntity;

    @Column
    data: Date;

    @Column
    pointsToImprove: string;

    @Column   
    pointsToKeep: string;

    @Column
    suggestions: string;

    @Column
    finalFeedBack: string;
}