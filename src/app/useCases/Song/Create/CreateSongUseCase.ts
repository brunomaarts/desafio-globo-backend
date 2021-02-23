import api from '@app/services/api'
import { ICreateSongDTO } from './CreateSongDTO'

import { ISongRepository } from '@repositories/ISongRepository'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { IAlbumRepository } from '@repositories/IAlbumRepository'

import { Song } from '@entities/Song'
import { Artist } from '@entities/Artist'
import { Album } from '@entities/Album'

export class CreateSongUseCase {
  constructor(
    private songRepository: ISongRepository,
    private artistRepository: IArtistRepository,
    private albumRepository: IAlbumRepository
  ) {}

  async execute({ artistId, trackId }: ICreateSongDTO) {
    const songAlreadyExists = await this.songRepository.findByTrackId(trackId)
    if (songAlreadyExists) throw new Error('Song already exists.')

    const songRes = await api.get(`/lookup?id=${artistId}&entity=song`)

    if (songRes.data.results.length === 0) throw new Error('Artist not exists.')

    for (const val of songRes.data.results) {
      if (val.wrapperType === 'track' && val.trackId === trackId) {
        const artistName: string = val.artistName
        const trackName: string = val.trackName
        const collectionId: number = val.collectionId
        const collectionName: string = val.collectionName

        if (!(await this.artistRepository.findByArtistId(artistId))) {
          const artist = new Artist({ artistId, artistName })
          await this.artistRepository.save(artist)
        }

        if (!(await this.albumRepository.findByCollectionId(collectionId))) {
          const album = new Album({ artistId, collectionId, collectionName })
          await this.albumRepository.save(album)
        }

        const song = new Song({ artistId, trackId, trackName, collectionId })
        return await this.songRepository.save(song)
      }
    }

    throw new Error('Song not exists.')
  }
}
