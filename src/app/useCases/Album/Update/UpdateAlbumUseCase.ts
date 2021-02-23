import api from '@app/services/api'
import { Artist } from '@entities/Artist'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { IUpdateAlbumDTO } from './UpdateAlbumDTO'

export class UpdateAlbumUseCase {
  constructor(
    private albumRepository: IAlbumRepository,
    private artistRepository: IArtistRepository
  ) {}

  async execute({ id, newArtistId, newCollectionId }: IUpdateAlbumDTO) {
    const albumAlreadyExists = await this.albumRepository.findByCollectionId(
      newCollectionId
    )
    if (albumAlreadyExists) throw new Error('Album already exists.')

    const album = await this.albumRepository.findById(id)
    const albumRes = await api.get(`/lookup?id=${newArtistId}&entity=album`)

    if (albumRes.data.results.length === 0)
      throw new Error('Artist not exists.')

    for (const val of albumRes.data.results) {
      if (
        val.wrapperType === 'collection' &&
        val.collectionId === newCollectionId
      ) {
        const collectionName: string = val.collectionName
        const artistId = newArtistId
        const collectionId = newCollectionId

        if (!(await this.artistRepository.findByArtistId(newArtistId))) {
          const artistName = val.artistName
          const artist = new Artist({ artistId, artistName })
          await this.artistRepository.save(artist)
        }

        return await this.albumRepository.update({
          id: album.id,
          collectionName,
          artistId,
          collectionId
        })
      }
    }

    throw new Error('Album not exists.')
  }
}
