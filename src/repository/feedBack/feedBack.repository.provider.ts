import { Provider } from "@nestjs/common";
import { FeedBackRepository } from "./feedBack.repository";

export const FeedBackRepoProvider: Provider = {
    provide: 'FeedBackRepository',
    useClass: FeedBackRepository
}