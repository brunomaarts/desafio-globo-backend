import { CreateAlbumController } from './CreateAlbumController'
import { CreateAlbumUseCase } from './CreateAlbumUseCase'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'
import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'

const createAlbumRepository = new MongoDbAlbumRepository()
const createArtistRepository = new MongoDbArtistRepository()
const createAlbumUseCase = new CreateAlbumUseCase(
  createAlbumRepository,
  createArtistRepository
)
const createAlbumController = new CreateAlbumController(createAlbumUseCase)

export { createAlbumUseCase, createAlbumController }
