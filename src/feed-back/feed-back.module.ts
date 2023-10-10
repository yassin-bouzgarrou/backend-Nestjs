import { Module } from '@nestjs/common';
import { FeedBackService } from './feed-back.service';
import { FeedBackController } from './feed-back.controller';

@Module({
  providers: [FeedBackService],
  controllers:[FeedBackController]
})
export class FeedBackModule {}
