import { DeleteSongUseCase } from './DeleteSongUseCase'
import { Request, Response } from 'express'

export class DeleteSongController {
  constructor(private deleteSongUseCase: DeleteSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    try {
      let deleteSongResponse = await this.deleteSongUseCase.execute({ id })
      return response.status(200).send(deleteSongResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
