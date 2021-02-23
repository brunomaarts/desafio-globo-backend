import { ObjectID } from 'typeorm'

export interface IReadArtistDTO {
  id?: ObjectID
  artistName?: string
  artistId?: string
}
