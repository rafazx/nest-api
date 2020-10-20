import { Module } from '@nestjs/common';
import { feedBackEntityProviders } from '../../model/feedBack.entity.provider';
import { FeedBackRepoProvider } from './feedBack.repository.provider';


@Module({
    providers: [
        FeedBackRepoProvider,
        ...feedBackEntityProviders
    ],
    exports: [
        FeedBackRepoProvider
    ]
})
export class FeedBackRepositoryModule {}
