import api from '@app/services/api'
import { IUpdateSongDTO } from './UpdateSongDTO'

import { ISongRepository } from '@repositories/ISongRepository'
import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { IArtistRepository } from '@repositories/IArtistRepository'

import { Artist } from '@entities/Artist'
import { Album } from '@entities/Album'

export class UpdateSongUseCase {
  constructor(
    private songRepository: ISongRepository,
    private artistRepository: IArtistRepository,
    private albumRepository: IAlbumRepository
  ) {}

  async execute({ id, newArtistId, newTrackId }: IUpdateSongDTO) {
    const songAlreadyExists = await this.songRepository.findByTrackId(
      newTrackId
    )
    if (songAlreadyExists) throw new Error('Song already exists.')

    const song = await this.songRepository.findById(id)
    const songRes = await api.get(`/lookup?id=${newArtistId}&entity=song`)

    if (songRes.data.results.length === 0) throw new Error('Artist not exists.')

    for (const val of songRes.data.results) {
      if (val.wrapperType === 'track' && val.trackId === newTrackId) {
        const trackName: string = val.trackName
        const artistId: number = val.artistId
        const collectionId: number = val.collectionId

        if (!(await this.artistRepository.findByArtistId(newArtistId))) {
          const artistName: string = val.artistName
          const artist = new Artist({ artistId, artistName })
          await this.artistRepository.save(artist)
        }

        if (!(await this.albumRepository.findByCollectionId(collectionId))) {
          const collectionName: string = val.collectionName
          const album = new Album({ artistId, collectionId, collectionName })
          await this.albumRepository.save(album)
        }

        return await this.songRepository.update({
          id: song.id,
          artistId: newArtistId,
          trackId: newTrackId,
          trackName,
          collectionId
        })
      }
    }

    throw new Error('Song not exists.')
  }
}
