import { DeleteSongController } from './DeleteSongController'
import { DeleteSongUseCase } from './DeleteSongUseCase'
import { MongoDbSongRepository } from '@repositories/implementations/MongoDbSongRepository'

const deleteSongRepository = new MongoDbSongRepository()
const deleteSongUseCase = new DeleteSongUseCase(deleteSongRepository)
const deleteSongController = new DeleteSongController(deleteSongUseCase)

export { deleteSongUseCase, deleteSongController }
