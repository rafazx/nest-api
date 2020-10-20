import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../user/decorator/get-user.decorator';
import { CreateFeedBackDto } from './dto/createFeedBackDto';
import { FeedBackService } from './feed-back.service';

@Controller('feedback')
@UseGuards(JwtAuthGuard)
export class FeedBackController {
    constructor(
        private readonly feedBackService: FeedBackService
    ){}    

    @Post()
    sendFeedBack(
        @GetUser() user,
        @Body() body: CreateFeedBackDto 
    ){
        return this.feedBackService.sendFeedBack(user, body);
    }

}
