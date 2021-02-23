import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { ISongRepository } from '@repositories/ISongRepository'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { IDeleteArtistDTO } from './DeleteArtistDTO'

export class DeleteArtistUseCase {
  constructor(
    private artistRepository: IArtistRepository,
    private albumRepository: IAlbumRepository,
    private songRepository: ISongRepository
  ) {}

  async execute({ id }: IDeleteArtistDTO) {
    const artistExists = await this.artistRepository.findById(id)
    if (!artistExists) throw new Error('Artist to be deleted does not exist.')
    await this.songRepository.deleteAllByArtist(artistExists.artistId)
    await this.albumRepository.deleteAllByArtist(artistExists.artistId)
    return await this.artistRepository.delete(id)
  }
}
