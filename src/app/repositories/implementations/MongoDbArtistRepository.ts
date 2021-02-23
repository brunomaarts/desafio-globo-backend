import { getConnection, ObjectID } from 'typeorm'
import { Artist } from '@entities/Artist'
import { IArtistRepository } from './../IArtistRepository'

export class MongoDbArtistRepository implements IArtistRepository {
  async findAll(): Promise<Artist[]> {
    const response = await getConnection().getMongoRepository(Artist).find()

    return response
  }

  async findById(id: ObjectID): Promise<Artist> {
    const response = await getConnection()
      .getMongoRepository(Artist)
      .findOne(id)
    return response
  }

  async findByArtistId(artistId: number): Promise<Artist> {
    const response = await getConnection()
      .getMongoRepository(Artist)
      .findOne({ artistId })

    return response
  }

  async findByName(artistName: string): Promise<Artist> {
    const response = await getConnection()
      .getMongoRepository(Artist)
      .findOne({
        where: {
          artistName: { $eq: artistName }
        }
      })

    return response
  }

  async save(artist: Artist): Promise<void> {
    await getConnection().getMongoRepository(Artist).insert(artist)
  }

  async update({ id, artistId, artistName }: Artist): Promise<void> {
    await getConnection().getMongoRepository(Artist).update(id, {
      artistId,
      artistName
    })
  }

  async delete(id: ObjectID): Promise<void> {
    await getConnection().getMongoRepository(Artist).delete(id)
  }
}
