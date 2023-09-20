import { Injectable, Inject } from '@nestjs/common';
import { TRACK_REPOSITORY } from 'src/core/database/constants';
import { COMMENT_REPOSITORY } from 'src/core/database/constants';
import { Track } from './track.entity';
import { CreateTrackDto } from './dto/create-track.dto';
import { Comment } from 'src/comments/comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService } from 'src/file/file.service';
import { FileType } from 'src/file/file.service';

@Injectable()
export class TrackService {

    constructor(
        @Inject(TRACK_REPOSITORY) private readonly trackRepository: typeof Track,
        @Inject(COMMENT_REPOSITORY) private readonly commentRepository: typeof Comment,
        private fileService: FileService
    ) { }


    async create(dto: CreateTrackDto, picture: Express.Multer.File, audio: Express.Multer.File): Promise<Track> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const track = await this.trackRepository.create({ ...dto, listens: 0, picture: picturePath, audio: audioPath });
        return track;
    }

    async getAll(count: number, offset: number): Promise<Track[]> {
        const tracks = await this.trackRepository.findAll({ include: { all: true } });
        return tracks;
    }

    async getOne(id: string): Promise<Track> {
        const track = await this.trackRepository.findOne({ where: { id } });
        return track;
    }

    async delete(id: string) {
        const removeTrackId = await this.trackRepository.destroy({
            where: { id }
        })
        return removeTrackId;
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackRepository.findByPk(dto.trackId)
        const comment = await this.commentRepository.create(dto);
        await track.$add('comments', comment.id);
        console.log(comment);
        return comment;
    }

    async listen(id: string): Promise<string> {
        const track = await this.trackRepository.findByPk(id);
        await track.increment('listens');
        await track.save();
        return 'add listense';
    }
}
