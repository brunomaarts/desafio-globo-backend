import { UpdateArtistController } from './UpdateArtistController'
import { UpdateArtistUseCase } from './UpdateArtistUseCase'
import { MongoDbArtistRepository } from '@repositories/implementations/MongoDbArtistRepository'

const updateArtistRepository = new MongoDbArtistRepository()
const updateArtistUseCase = new UpdateArtistUseCase(updateArtistRepository)
const updateArtistController = new UpdateArtistController(updateArtistUseCase)

export { updateArtistUseCase, updateArtistController }
