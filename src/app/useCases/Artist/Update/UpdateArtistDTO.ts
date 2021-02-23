import { ObjectID } from 'typeorm'

export interface IUpdateArtistDTO {
  id: ObjectID
  newArtistId: number
}
