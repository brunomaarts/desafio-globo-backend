import { ReadAlbumUseCase } from './ReadAlbumUseCase'
import { Request, Response } from 'express'

export class ReadAlbumController {
  constructor(private readAlbumUseCase: ReadAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const query = request.query

    try {
      let readAlbumResponse = await this.readAlbumUseCase.execute(query)
      return response.status(201).send(readAlbumResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
