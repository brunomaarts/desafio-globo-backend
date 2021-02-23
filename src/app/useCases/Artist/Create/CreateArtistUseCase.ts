import api from '@app/services/api'
import { Artist } from '@entities/Artist'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { ICreateArtistDTO } from './CreateArtistDTO'

export class CreateArtistUseCase {
  constructor(private artistRepository: IArtistRepository) {}

  async execute({ artistId }: ICreateArtistDTO) {
    const artistAlreadyExists = await this.artistRepository.findByArtistId(
      artistId
    )
    if (artistAlreadyExists) throw new Error('Artist already exists.')

    const artistRes = await api.get(`/lookup?id=${artistId}`)

    if (artistRes.data.results.length === 0)
      throw new Error('Artist not exists.')

    const artistName = artistRes.data.results[0].artistName
    const artist = new Artist({ artistId, artistName })
    return await this.artistRepository.save(artist)
  }
}
