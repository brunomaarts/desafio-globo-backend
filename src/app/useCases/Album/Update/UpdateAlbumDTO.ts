import { ObjectID } from 'typeorm'

export interface IUpdateAlbumDTO {
  id: ObjectID
  newArtistId: number
  newCollectionId: number
}
