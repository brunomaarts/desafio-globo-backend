import { DeleteAlbumController } from './DeleteAlbumController'
import { DeleteAlbumUseCase } from './DeleteAlbumUseCase'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'

const deleteAlbumRepository = new MongoDbAlbumRepository()
const deleteAlbumUseCase = new DeleteAlbumUseCase(deleteAlbumRepository)
const deleteAlbumController = new DeleteAlbumController(deleteAlbumUseCase)

export { deleteAlbumUseCase, deleteAlbumController }
