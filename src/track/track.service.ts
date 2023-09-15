import { Injectable, Inject } from '@nestjs/common';
import { TRACK_REPOSITORY } from 'src/core/database/constants';
import { Track } from './track.entity';
import { CreateTrackDto } from './dto/create-track.dto';

@Injectable()
export class TrackService {

    constructor(@Inject(TRACK_REPOSITORY) private readonly trackRepository: typeof Track) {}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackRepository.create({...dto, listens: 0})
        console.log(track)
        return track;
    }

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({include: {all: true}});
        return tracks;
    }

    async getOne() {
        
    }
    
    async delete() {
        
    }
}
