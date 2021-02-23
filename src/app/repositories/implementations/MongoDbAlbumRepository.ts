import { getConnection, ObjectID } from 'typeorm'
import { Album } from './../../entities/Album'
import { IAlbumRepository } from './../IAlbumRepository'

export class MongoDbAlbumRepository implements IAlbumRepository {
  async findAll(): Promise<Album[]> {
    return await getConnection().getMongoRepository(Album).find()
  }

  async findById(id: ObjectID): Promise<Album> {
    return await getConnection().getMongoRepository(Album).findOne(id)
  }

  async findByArtistId(artistId: number): Promise<Album[]> {
    return await getConnection().getMongoRepository(Album).find({ artistId })
  }

  async findByCollectionId(collectionId: number): Promise<Album> {
    return await getConnection()
      .getMongoRepository(Album)
      .findOne({ collectionId })
  }

  async findByName(collectionName: string): Promise<Album> {
    return await getConnection()
      .getMongoRepository(Album)
      .findOne({
        where: {
          collectionName: { $eq: collectionName }
        }
      })
  }

  async save(album: Album): Promise<void> {
    await getConnection().getMongoRepository(Album).insert(album)
  }

  async update({
    id,
    collectionId,
    collectionName,
    artistId
  }: Album): Promise<void> {
    await getConnection().getMongoRepository(Album).update(id, {
      collectionId,
      collectionName,
      artistId
    })
  }

  async delete(id: ObjectID): Promise<void> {
    await getConnection().getMongoRepository(Album).delete(id)
  }

  async deleteAllByArtist(artistId: number): Promise<void> {
    await getConnection().getMongoRepository(Album).deleteMany({ artistId })
  }
}
