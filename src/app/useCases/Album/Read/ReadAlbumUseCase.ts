import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { ObjectID } from 'mongodb'
import { IReadAlbumDTO } from './ReadAlbumDTO'

export class ReadAlbumUseCase {
  constructor(private albumRepository: IAlbumRepository) {}

  async execute({ id, name }: IReadAlbumDTO) {
    if (id) {
      if (!ObjectID.isValid(id)) throw new Error('Id is not valid')
      return await this.albumRepository.findById(id)
    }

    if (name) {
      return await this.albumRepository.findByName(name)
    }

    return await this.albumRepository.findAll()
  }
}
