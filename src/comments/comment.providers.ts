import { COMMENT_REPOSITORY } from 'src/core/database/constants';
import { Comment } from './comment.entity';

export const commentProviders = [{
    provide: COMMENT_REPOSITORY,
    useValue: Comment,
}]