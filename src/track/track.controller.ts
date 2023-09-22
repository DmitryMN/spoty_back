import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Get('/search')
    getUser(@Query('query') query: string) {
        return this.trackService.search(query);
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
      ]))
    create(@UploadedFiles() files: {picture?: Express.Multer.File[], audio?: Express.Multer.File[]}, @Body() dto: CreateTrackDto) {
        const {picture, audio} = files;
        return this.trackService.create(dto, picture[0], audio[0]);
    }

    @Get()
    getAll(@Query('count') count: number, @Query('offset') offset: number) {
        return this.trackService.getAll(count, offset);
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.trackService.getOne(id);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.trackService.delete(id);
    }

    @Post('/comment')
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto)
    }

    @Post('/listen/:id')
    listen(@Param('id') id: string) {
        return this.trackService.listen(id);
    }
}
