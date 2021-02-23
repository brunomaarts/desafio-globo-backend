import { ReadAlbumController } from './ReadAlbumController'
import { ReadAlbumUseCase } from './ReadAlbumUseCase'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'

const readAlbumRepository = new MongoDbAlbumRepository()
const readAlbumUseCase = new ReadAlbumUseCase(readAlbumRepository)
const readAlbumController = new ReadAlbumController(readAlbumUseCase)

export { readAlbumUseCase, readAlbumController }
