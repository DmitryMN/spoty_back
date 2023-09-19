import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { trackProviders } from './track.providers';
import { commentProviders } from 'src/comments/comment.providers';
import { FileService } from 'src/file/file.service';

@Module({
  controllers: [TrackController],
  imports: [],
  providers: [TrackService, ...trackProviders, ...commentProviders, FileService],
  exports: []
})
export class TrackModule {}
