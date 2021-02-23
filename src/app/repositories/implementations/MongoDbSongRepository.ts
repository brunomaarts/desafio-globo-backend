import { getConnection, ObjectID } from 'typeorm'
import { Song } from '@entities/Song'
import { ISongRepository } from './../ISongRepository'

export class MongoDbSongRepository implements ISongRepository {
  async findAll(): Promise<Song[]> {
    return await getConnection().getMongoRepository(Song).find()
  }

  async findById(id: ObjectID): Promise<Song> {
    return await getConnection().getMongoRepository(Song).findOne(id)
  }

  async findByTrackId(trackId: number): Promise<Song> {
    return await getConnection().getMongoRepository(Song).findOne({ trackId })
  }

  async findByArtistId(artistId: number): Promise<Song[]> {
    return await getConnection().getMongoRepository(Song).find({ artistId })
  }

  async findByCollectionId(collectionId: number): Promise<Song[]> {
    return await getConnection().getMongoRepository(Song).find({ collectionId })
  }

  async findByName(trackName: string): Promise<Song> {
    return await getConnection()
      .getMongoRepository(Song)
      .findOne({
        where: {
          trackName: { $eq: trackName }
        }
      })
  }

  async save(song: Song): Promise<void> {
    await getConnection().getMongoRepository(Song).insert(song)
  }

  async update({
    id,
    artistId,
    trackId,
    trackName,
    collectionId
  }: Song): Promise<void> {
    await getConnection().getMongoRepository(Song).update(id, {
      artistId,
      trackId,
      trackName,
      collectionId
    })
  }

  async delete(id: ObjectID): Promise<void> {
    await getConnection().getMongoRepository(Song).delete(id)
  }

  async deleteAllByArtist(artistId: number): Promise<void> {
    await getConnection().getMongoRepository(Song).deleteMany({ artistId })
  }
}
