import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { dtoFeedback } from './dto/dtoreview';
import { Prisma } from '@prisma/client';
@Injectable()
export class FeedBackService {
  constructor(private prisma: PrismaService) {}

  async addReview(feedback: dtoFeedback) {
    try {
      const feedbacksaved = await this.prisma.review.create({
        data: {
          user_id: feedback.property_id,
          property_id: feedback.property_id,
          rating: feedback.rating,
          comment: feedback.comment,
          date_posted: new Date().toISOString(),
        },
      });
      return feedbacksaved;
    } catch (error) {
      console.log(error);
      
     if(error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === 'P2003'){
            throw new ForbiddenException(`user or  housse not found`);
        }
     }
    }
  }

async Delete(id:string){
  const deleted = await this.prisma.property.delete({
    where: {
      property_id: +id,
    },
  });

  return deleted;
}


}
