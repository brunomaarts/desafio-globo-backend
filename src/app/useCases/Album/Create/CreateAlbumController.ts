import { CreateAlbumUseCase } from './CreateAlbumUseCase'
import { Request, Response } from 'express'

export class CreateAlbumController {
  constructor(private createAlbumUseCase: CreateAlbumUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { artistId, collectionId } = request.body

    try {
      let createAlbumResponse = await this.createAlbumUseCase.execute({
        artistId,
        collectionId
      })
      return response.status(201).send(createAlbumResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
