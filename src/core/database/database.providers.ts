import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from './constants';
import { Track } from 'src/track/track.entity';
import { Comment } from 'src/comments/comment.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        const sequelize = new Sequelize({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'root',
            database: 'spoty',
        });
        sequelize.addModels([Track, Comment]);
        await sequelize.sync();
        return sequelize;
    },
}];