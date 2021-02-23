import { CreateSongController } from './CreateSongController'
import { CreateSongUseCase } from './CreateSongUseCase'

import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'
import { MongoDbSongRepository } from '@repositories/implementations/MongoDbSongRepository'

const createSongRepository = new MongoDbSongRepository()
const createArtistRepository = new MongoDbArtistRepository()
const createAlbumRepository = new MongoDbAlbumRepository()

const createSongUseCase = new CreateSongUseCase(
  createSongRepository,
  createArtistRepository,
  createAlbumRepository
)

const createSongController = new CreateSongController(createSongUseCase)

export { createSongUseCase, createSongController }
