import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Song {
  @ObjectIdColumn()
  public readonly id: ObjectID

  @Column()
  public trackName: string

  @Column()
  public artistId: number

  @Column()
  public trackId: number

  @Column()
  public collectionId: number

  constructor(props: Omit<Song, 'id'>) {
    Object.assign(this, props)
  }
}
