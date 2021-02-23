import { CreateArtistUseCase } from './CreateArtistUseCase'
import { Request, Response } from 'express'

export class CreateArtistController {
  constructor(private createArtistUseCase: CreateArtistUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { artistId } = request.body

    try {
      let createArtistResponse = await this.createArtistUseCase.execute({
        artistId
      })
      return response.status(201).send(createArtistResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
