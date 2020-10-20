import { Inject, Injectable } from '@nestjs/common';
import { CreateFeedBackDto } from 'src/feedBack/dto/createFeedBackDto';
import { FeedBack } from 'src/feedBack/FeedBack';
import { IFeedBackRepository } from '../../feedBack/IFeedBackRepository';
import { FeedBackEntity } from '../../model/feedBack.entity';

@Injectable()
export class FeedBackRepository implements IFeedBackRepository {
    constructor(
        @Inject('FEEDBACK_ENTITY') private readonly feedBackModel: typeof FeedBackEntity
    ){}

    async createFeedBack(createFeedBackDto: CreateFeedBackDto): Promise<FeedBack> {
        createFeedBackDto.date = new Date();
        return this.feedBackModel.create(createFeedBackDto);
    }

    
}
