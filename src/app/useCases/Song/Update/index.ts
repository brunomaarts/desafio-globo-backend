import { UpdateSongController } from './UpdateSongController'
import { UpdateSongUseCase } from './UpdateSongUseCase'

import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'
import { MongoDbSongRepository } from '@repositories/implementations/MongoDbSongRepository'

const updateSongRepository = new MongoDbSongRepository()
const updateArtistRepository = new MongoDbArtistRepository()
const updateAlbumRepository = new MongoDbAlbumRepository()

const updateSongUseCase = new UpdateSongUseCase(
  updateSongRepository,
  updateArtistRepository,
  updateAlbumRepository
)
const updateSongController = new UpdateSongController(updateSongUseCase)

export { updateSongUseCase, updateSongController }
