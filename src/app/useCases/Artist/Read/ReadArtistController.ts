import { ReadArtistUseCase } from './ReadArtistUseCase'
import { Request, Response } from 'express'

export class ReadArtistController {
  constructor(private readArtistUseCase: ReadArtistUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const query = request.query

    try {
      let readArtistResponse = await this.readArtistUseCase.execute(query)
      return response.status(201).send(readArtistResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
