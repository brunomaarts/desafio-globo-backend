import { CreateArtistController } from './CreateArtistController'
import { CreateArtistUseCase } from './CreateArtistUseCase'
import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'

const createArtistRepository = new MongoDbArtistRepository()
const createArtistUseCase = new CreateArtistUseCase(createArtistRepository)
const createArtistController = new CreateArtistController(createArtistUseCase)

export { createArtistUseCase, createArtistController }
