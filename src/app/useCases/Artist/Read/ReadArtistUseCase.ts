import { ObjectID } from 'mongodb'
import { IReadArtistDTO } from './ReadArtistDTO'
import { Artist } from '@entities/Artist'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { IAlbumRepository } from '@repositories/IAlbumRepository'
import { ISongRepository } from '@repositories/ISongRepository'

export class ReadArtistUseCase {
  constructor(
    private artistRepository: IArtistRepository,
    private albumRepository: IAlbumRepository,
    private songRepository: ISongRepository
  ) {}

  private async loadArtistInfo(artist: Artist) {
    let newArtist = Object.assign({}, artist)

    newArtist['albums'] = await this.albumRepository.findByArtistId(
      artist.artistId
    )
    newArtist['tracks'] = await this.songRepository.findByArtistId(
      artist.artistId
    )

    return newArtist
  }

  async execute({ id, artistName, artistId }: IReadArtistDTO) {
    if (id) {
      if (!ObjectID.isValid(id)) throw new Error('Id is not valid')
      const artist = await this.artistRepository.findById(id)
      return await this.loadArtistInfo(artist)
    }

    if (artistId) {
      const artist = await this.artistRepository.findByName(artistName)
      return await this.loadArtistInfo(artist)
    }

    if (artistName) {
      const artist = await this.artistRepository.findByName(artistName)
      return await this.loadArtistInfo(artist)
    }

    const artists = await this.artistRepository.findAll()
    const resultArtist = []

    for (let objArtist of artists) {
      const artist = await this.artistRepository.findById(objArtist.id)
      resultArtist.push(await this.loadArtistInfo(artist))
    }

    return resultArtist
  }
}
