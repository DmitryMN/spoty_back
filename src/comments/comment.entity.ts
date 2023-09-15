import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Track } from 'src/track/track.entity';


@Table({
    tableName: 'comment'
})
export class Comment extends Model<Comment> {
    
    @Column({ type: DataType.STRING })
    username: string

    @Column({ type: DataType.STRING })
    text: string

    @ForeignKey(() => Track)
    @Column({type: DataType.INTEGER })
    trackId: number

    @BelongsTo(() => Track)
    track: Track
}