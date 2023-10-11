import { Controller, Get,Post,Body, Delete, Param } from '@nestjs/common';
import { FeedBackService } from './feed-back.service';
import { dtoFeedback } from './dto/dtoreview';


@Controller('feed-back')
export class FeedBackController {
    constructor(private FeedbackService :FeedBackService){}

@Post("add")
AddReview(@Body()feedback : dtoFeedback){
   return this.FeedbackService.addReview(feedback)
}

@Delete("/:id")
DeleteFeedback(@Param("id") id:string){
    return this.FeedbackService.Delete(id)

}


}
