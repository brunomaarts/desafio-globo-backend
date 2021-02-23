import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Artist {
  @ObjectIdColumn()
  public readonly id: ObjectID

  @Column()
  public artistName: string

  @Column()
  public artistId: number

  constructor(props: Omit<Artist, 'id'>) {
    Object.assign(this, props)
  }
}
