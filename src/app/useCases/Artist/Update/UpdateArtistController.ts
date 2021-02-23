import { UpdateArtistUseCase } from './UpdateArtistUseCase'
import { Request, Response } from 'express'

export class UpdateArtistController {
  constructor(private updateArtistUseCase: UpdateArtistUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, newArtistId } = request.body

    try {
      let updateArtistResponse = await this.updateArtistUseCase.execute({
        id,
        newArtistId
      })

      return response.status(200).send(updateArtistResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
