import { Module } from '@nestjs/common';
import { FeedBackRepositoryModule } from '../repository/feedBack/feedBack.repository.module';
import { FeedBackController } from './feed-back.controller';
import { FeedBackService } from './feed-back.service';

@Module({
  imports:[ FeedBackRepositoryModule ],
  controllers: [FeedBackController],
  providers:[FeedBackService]
})
export class FeedBackModule {}
