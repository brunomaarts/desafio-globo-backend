import { ISongRepository } from '@repositories/ISongRepository'
import { ObjectID } from 'mongodb'
import { IReadSongDTO } from './ReadSongDTO'

export class ReadSongUseCase {
  constructor(private songRepository: ISongRepository) {}

  async execute({ id, name, artistId, collectionId }: IReadSongDTO) {
    if (id) {
      if (!ObjectID.isValid(id)) throw new Error('Id is not valid')
      return await this.songRepository.findById(id)
    }

    if (name) {
      return await this.songRepository.findByName(name)
    }

    if (artistId) {
      return await this.songRepository.findByArtistId(Number(artistId))
    }

    if (collectionId) {
      return await this.songRepository.findByCollectionId(Number(collectionId))
    }

    return await this.songRepository.findAll()
  }
}
