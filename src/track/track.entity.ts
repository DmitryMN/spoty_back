import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Comment } from 'src/comments/comment.entity';



@Table({
    tableName: 'track'
})
export class Track extends Model<Track> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING})
    name: string

    @Column({type: DataType.STRING})
    artist: string

    @Column({type: DataType.STRING})
    text: string

    @Column({type: DataType.INTEGER})
    listens: number

    @Column({type: DataType.STRING})
    picture: string

    @Column({type: DataType.STRING})
    audio: string

    @HasMany(() => Comment)
    comments: Comment[]
}