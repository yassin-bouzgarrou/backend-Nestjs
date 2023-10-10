import { Controller, Get,Post,Body } from '@nestjs/common';
import { FeedBackService } from './feed-back.service';
import { dtoFeedback } from './dto/dtoreview';

@Controller('feed-back')
export class FeedBackController {
    constructor(private FeedbackService :FeedBackService){}

@Post("add")
AddReview(@Body()feedback : dtoFeedback){
   return this.FeedbackService.addReview(feedback)
}

}
