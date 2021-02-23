import { UpdateAlbumUseCase } from './UpdateAlbumUseCase'
import { Request, Response } from 'express'

export class UpdateAlbumController {
  constructor(private updateAlbumUseCase: UpdateAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, newArtistId, newCollectionId } = request.body

    try {
      let updateAlbumResponse = await this.updateAlbumUseCase.execute({
        id,
        newArtistId,
        newCollectionId
      })

      return response.status(200).send(updateAlbumResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
