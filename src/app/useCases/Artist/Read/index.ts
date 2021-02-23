import { ReadArtistController } from './ReadArtistController'
import { ReadArtistUseCase } from './ReadArtistUseCase'
import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'
import { MongoDbAlbumRepository } from '@repositories/implementations/MongoDbAlbumRepository'
import { MongoDbSongRepository } from '@repositories/implementations/MongoDbSongRepository'

const readArtistRepository = new MongoDbArtistRepository()
const readAlbumRepository = new MongoDbAlbumRepository()
const readSongRepository = new MongoDbSongRepository()

const readArtistUseCase = new ReadArtistUseCase(
  readArtistRepository,
  readAlbumRepository,
  readSongRepository
)

const readArtistController = new ReadArtistController(readArtistUseCase)

export { readArtistUseCase, readArtistController }
