import { CreateSongUseCase } from './CreateSongUseCase'
import { Request, Response } from 'express'

export class CreateSongController {
  constructor(private createSongUseCase: CreateSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { artistId, trackId } = request.body

    try {
      let createAlbumResponse = await this.createSongUseCase.execute({
        artistId,
        trackId
      })
      return response.status(201).send(createAlbumResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
