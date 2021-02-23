import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Album {
  @ObjectIdColumn()
  public readonly id: ObjectID

  @Column()
  public collectionName: string

  @Column()
  public artistId: number

  @Column()
  public collectionId: number

  constructor(props: Omit<Album, 'id'>) {
    Object.assign(this, props)
  }
}
