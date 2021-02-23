import { Artist } from '@app/entities/Artist'
import { ObjectID } from 'typeorm'

export interface IArtistRepository {
  findAll(): Promise<Artist[]>
  findById(id: ObjectID): Promise<Artist>
  findByArtistId(artistId: number): Promise<Artist>
  findByName(artistName: string): Promise<Artist>
  save(artist: Artist): Promise<void>
  update({ id, artistId, artistName }: Artist): Promise<void>
  delete(id: ObjectID): Promise<void>
}
