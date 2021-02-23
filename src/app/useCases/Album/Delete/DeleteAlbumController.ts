import { DeleteAlbumUseCase } from './DeleteAlbumUseCase'
import { Request, Response } from 'express'

export class DeleteAlbumController {
  constructor(private deleteAlbumUseCase: DeleteAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body

    try {
      let deleteAlbumResponse = await this.deleteAlbumUseCase.execute({ id })
      return response.status(200).send(deleteAlbumResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
