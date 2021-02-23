import { Song } from '@app/entities/Song'
import { ObjectID } from 'typeorm'

export interface ISongRepository {
  findAll(): Promise<Song[]>
  findById(id: ObjectID): Promise<Song>
  findByTrackId(trackId: number): Promise<Song>
  findByName(trackName: string): Promise<Song>
  findByArtistId(artistId: number): Promise<Song[]>
  findByCollectionId(collectionId: number): Promise<Song[]>
  save(song: Song): Promise<void>
  update({
    id,
    artistId,
    trackId,
    trackName,
    collectionId
  }: Song): Promise<void>
  delete(id: ObjectID): Promise<void>
  deleteAllByArtist(artistId: number): Promise<void>
}
