import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { Comment } from 'src/comments/comment.entity';



@Table({
    tableName: 'track'
})
export class Track extends Model<Track> {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    name: string

    @Column({ type: DataType.STRING, allowNull: false })
    artist: string

    @Column({ type: DataType.STRING, defaultValue: false })
    track: string

    @Column({ type: DataType.NUMBER, allowNull: true })
    listens: number

    @Column({ type: DataType.STRING, allowNull: true })
    picture: string

    @Column({ type: DataType.STRING, allowNull: true })
    audio: string

    @HasMany(() => Comment)
    comments: Comment[]
}