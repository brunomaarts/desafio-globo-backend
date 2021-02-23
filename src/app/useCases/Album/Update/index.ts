import { UpdateAlbumController } from './UpdateAlbumController'
import { UpdateAlbumUseCase } from './UpdateAlbumUseCase'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'
import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'

const updateAlbumRepository = new MongoDbAlbumRepository()
const updateArtistRepository = new MongoDbArtistRepository()

const updateAlbumUseCase = new UpdateAlbumUseCase(
  updateAlbumRepository,
  updateArtistRepository
)
const updateAlbumController = new UpdateAlbumController(updateAlbumUseCase)

export { updateAlbumUseCase, updateAlbumController }
