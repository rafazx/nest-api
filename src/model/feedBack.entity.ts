
import { Table, Column, Model, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.entity';

@Table
export class FeedBack extends Model<FeedBack> {
    
    @Column({
        primaryKey:true,
        autoIncrement: true
    })
    fB_id: string;

    @ForeignKey(() => User)
    @Column
    user_id: number;

    @BelongsTo(() => User, 'user_id')
    user: User;

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