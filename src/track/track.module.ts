import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { trackProviders } from './track.providers';

@Module({
  controllers: [TrackController],
  imports: [],
  providers: [TrackService, ...trackProviders],
  exports: []
})
export class TrackModule {}
