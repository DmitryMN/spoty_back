import { Controller, Get, Post } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('/tracks')
export class TrackController {

    constructor(private trackService: TrackService) { }

    @Post()
    create() {

    }

    @Get()
    getAll() {
        return "get all tracks"
    }

    @Get()
    getOne() {
        
    }
    
    delete() {
        
    }
}
