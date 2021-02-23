import { ISongRepository } from '@repositories/ISongRepository'
import { IDeleteSongDTO } from './DeleteSongDTO'

export class DeleteSongUseCase {
  constructor(private songRepository: ISongRepository) {}

  async execute({ id }: IDeleteSongDTO) {
    const songExists = await this.songRepository.findById(id)
    if (!songExists) throw new Error('Song to be deleted does not exist.')
    return await this.songRepository.delete(id)
  }
}
