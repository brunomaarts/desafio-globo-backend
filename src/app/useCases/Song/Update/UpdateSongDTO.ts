import { ObjectID } from 'typeorm'

export interface IUpdateSongDTO {
  id: ObjectID
  newArtistId: number
  newTrackId: number
}
