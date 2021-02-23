import { ReadSongController } from './ReadSongController'
import { ReadSongUseCase } from './ReadSongUseCase'
import { MongoDbSongRepository } from '@repositories/implementations/MongoDbSongRepository'

const readSongRepository = new MongoDbSongRepository()
const readSongUseCase = new ReadSongUseCase(readSongRepository)
const readSongController = new ReadSongController(readSongUseCase)

export { readSongUseCase, readSongController }
