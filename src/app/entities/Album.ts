import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Album {
  @ObjectIdColumn()
  public readonly id: ObjectID

  @Column('text', { nullable: false })
  public collectionName: string

  @Column('number', { nullable: false })
  public artistId: number

  @Column('number', { nullable: false })
  public collectionId: number

  constructor(props: Omit<Album, 'id'>) {
    Object.assign(this, props)
  }
}
