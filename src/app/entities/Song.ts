import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Song {
  @ObjectIdColumn()
  public readonly id: ObjectID

  @Column('text', { nullable: false })
  public trackName: string

  @Column('number', { nullable: false })
  public artistId: number

  @Column('number', { nullable: false })
  public trackId: number

  @Column('number', { nullable: false })
  public collectionId: number

  constructor(props: Omit<Song, 'id'>) {
    Object.assign(this, props)
  }
}
