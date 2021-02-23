import { UpdateSongUseCase } from './UpdateSongUseCase'
import { Request, Response } from 'express'

export class UpdateSongController {
  constructor(private updateSongUseCase: UpdateSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, newArtistId, newTrackId } = request.body

    try {
      let updateAlbumResponse = await this.updateSongUseCase.execute({
        id,
        newArtistId,
        newTrackId
      })

      return response.status(200).send(updateAlbumResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
