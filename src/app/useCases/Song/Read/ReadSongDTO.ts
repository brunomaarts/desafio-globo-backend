import { ObjectID } from 'typeorm'

export interface IReadSongDTO {
  id?: ObjectID
  name?: string
  artistId?: number
  collectionId?: number
}
