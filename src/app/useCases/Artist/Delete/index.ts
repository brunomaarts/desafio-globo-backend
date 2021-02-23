import { DeleteArtistController } from './DeleteArtistController'
import { DeleteArtistUseCase } from './DeleteArtistUseCase'
import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'
import { MongoDbSongRepository } from '@repositories/implementations/MongoDbSongRepository'

const deleteArtistRepository = new MongoDbArtistRepository()
const deleteAlbumRepository = new MongoDbAlbumRepository()
const deleteSongRepository = new MongoDbSongRepository()

const deleteArtistUseCase = new DeleteArtistUseCase(
  deleteArtistRepository,
  deleteAlbumRepository,
  deleteSongRepository
)
const deleteArtistController = new DeleteArtistController(deleteArtistUseCase)

export { deleteArtistUseCase, deleteArtistController }
