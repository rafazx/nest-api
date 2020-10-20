import { CreateFeedBackDto } from "./dto/createFeedBackDto";
import { FeedBack } from "./FeedBack";

export interface IFeedBackRepository {
    createFeedBack(createFeedBackDto: CreateFeedBackDto): Promise<FeedBack>;
}