import api from '@app/services/api'
import { Album } from '@entities/Album'
import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { ICreateAlbumDTO } from './CreateAlbumDTO'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { Artist } from '@entities/Artist'

export class CreateAlbumUseCase {
  constructor(
    private albumRepository: IAlbumRepository,
    private artistRepository: IArtistRepository
  ) {}

  async execute({ artistId, collectionId }: ICreateAlbumDTO) {
    const albumAlreadyExists = await this.albumRepository.findByCollectionId(
      collectionId
    )
    if (albumAlreadyExists) throw new Error('Album already exists.')

    const albumRes = await api.get(`/lookup?id=${artistId}&entity=album`)

    if (albumRes.data.results.length === 0)
      throw new Error('Artist not exists.')

    for (const val of albumRes.data.results) {
      if (
        val.wrapperType === 'collection' &&
        val.collectionId === collectionId
      ) {
        const collectionName: string = val.collectionName

        if (!(await this.artistRepository.findByArtistId(artistId))) {
          const artistName = val.artistName
          const artist = new Artist({ artistId, artistName })
          await this.artistRepository.save(artist)
        }

        const album = new Album({ collectionId, collectionName, artistId })
        return await this.albumRepository.save(album)
      }
    }

    throw new Error('Album does not exist for this artist.')
  }
}
