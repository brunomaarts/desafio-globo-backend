import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Artist {
  @ObjectIdColumn()
  public readonly id: ObjectID

  @Column('text', { nullable: false })
  public artistName: string

  @Column('number', { nullable: false })
  public artistId: number

  constructor(props: Omit<Artist, 'id'>) {
    Object.assign(this, props)
  }
}
