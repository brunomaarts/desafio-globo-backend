import { Album } from '@app/entities/Album'
import { ObjectID } from 'typeorm'

export interface IAlbumRepository {
  findAll(): Promise<Album[]>
  findById(id: ObjectID): Promise<Album>
  findByCollectionId(collectionId: number): Promise<Album>
  findByArtistId(artistId: number): Promise<Album[]>
  findByName(collectionName: string): Promise<Album>
  save(album: Album): Promise<void>
  update({ id, collectionId, collectionName, artistId }: Album): Promise<void>
  delete(id: ObjectID): Promise<void>
  deleteAllByArtist(artistId: number): Promise<void>
}
