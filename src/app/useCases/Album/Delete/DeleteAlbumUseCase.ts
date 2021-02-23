import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { IDeleteAlbumDTO } from './DeleteAlbumDTO'

export class DeleteAlbumUseCase {
  constructor(private albumRepository: IAlbumRepository) {}

  async execute({ id }: IDeleteAlbumDTO) {
    const albumExists = await this.albumRepository.findById(id)
    if (!albumExists) throw new Error('Album to be deleted does not exist.')
    return await this.albumRepository.delete(id)
  }
}
