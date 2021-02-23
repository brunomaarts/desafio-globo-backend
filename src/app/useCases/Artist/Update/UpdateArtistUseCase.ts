import { Artist } from '@app/entities/Artist'
import api from '@app/services/api'
import { IArtistRepository } from '@repositories/IArtistRepository'
import { IUpdateArtistDTO } from './UpdateArtistDTO'

export class UpdateArtistUseCase {
  constructor(private artistRepository: IArtistRepository) {}

  async execute({ id, newArtistId }: IUpdateArtistDTO) {
    const artistAlreadyExists = await this.artistRepository.findByArtistId(
      newArtistId
    )
    if (artistAlreadyExists) throw new Error('Artist already exists.')

    const artist = await this.artistRepository.findById(id)
    const artistRes = await api.get(`/lookup?id=${newArtistId}`)

    if (artistRes.data.results.length === 0)
      throw new Error('Artist not exists.')

    const artistName: string = artistRes.data.results.artistName

    return await this.artistRepository.update({
      id: artist.id,
      artistId: newArtistId,
      artistName
    })
  }
}
