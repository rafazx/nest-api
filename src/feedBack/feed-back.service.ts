import { Inject, Injectable } from '@nestjs/common';
import { User } from '../user/User';
import { CreateFeedBackDto } from './dto/createFeedBackDto';
import { IFeedBackRepository } from './IFeedBackRepository';

const FeedBackRepo = () => Inject('FeedBackRepository');

@Injectable()
export class FeedBackService {
    constructor(
        @FeedBackRepo() private readonly feedBackRepository: IFeedBackRepository
    ) {}

    async sendFeedBack(user: User, body: CreateFeedBackDto) {
        body.userSender_id = user.user_id;
        return await this.feedBackRepository.createFeedBack(body);
    }
}
