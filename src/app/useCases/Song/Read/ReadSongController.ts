import { ReadSongUseCase } from './ReadSongUseCase'
import { Request, Response } from 'express'

export class ReadSongController {
  constructor(private readSongUseCase: ReadSongUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const query = request.query
      let readSongResponse = await this.readSongUseCase.execute(query)
      return response.status(201).send(readSongResponse)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
