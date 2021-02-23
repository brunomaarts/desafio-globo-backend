import { DeleteArtistUseCase } from './DeleteArtistUseCase'
import { Request, Response } from 'express'

export class DeleteArtistController {
  constructor(private deleteArtistUseCase: DeleteArtistUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    try {
      let deleteArtistResponse = await this.deleteArtistUseCase.execute({ id })
      return response.status(200).send(deleteArtistResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
