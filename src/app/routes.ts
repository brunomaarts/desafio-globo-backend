import { request, response, Router } from 'express'

import { createAlbumController } from './useCases/Album/Create'
import { readAlbumController } from './useCases/Album/Read'
import { updateAlbumController } from './useCases/Album/Update'
import { deleteAlbumController } from './useCases/Album/Delete'

import { createArtistController } from './useCases/Artist/Create'
import { readArtistController } from './useCases/Artist/Read'
import { updateArtistController } from './useCases/Artist/Update'
import { deleteArtistController } from './useCases/Artist/Delete'

import { createSongController } from './useCases/Song/Create'
import { readSongController } from './useCases/Song/Read'
import { updateSongController } from './useCases/Song/Update'
import { deleteSongController } from './useCases/Song/Delete'

const router = Router()

/* ------------ Start Album crud */
router.post('/album', (request, response) => {
  return createAlbumController.handle(request, response)
})

router.get('/album', (request, response) => {
  return readAlbumController.handle(request, response)
})

router.put('/album', (request, response) => {
  return updateAlbumController.handle(request, response)
})

router.delete('/album', (request, response) => {
  return deleteAlbumController.handle(request, response)
})
/* ------------ End Album crud */

/* ------------ Start Artist crud */
router.post('/artist', (request, response) => {
  return createArtistController.handle(request, response)
})

router.get('/artist', (request, response) => {
  return readArtistController.handle(request, response)
})

router.put('/artist', (request, response) => {
  return updateArtistController.handle(request, response)
})

router.delete('/artist', (request, response) => {
  return deleteArtistController.handle(request, response)
})
/* ------------ End Artist crud */

/* ------------ Start Song crud */
router.post('/song', (request, response) => {
  return createSongController.handle(request, response)
})

router.get('/song', (request, response) => {
  return readSongController.handle(request, response)
})

router.put('/song', (request, response) => {
  return updateSongController.handle(request, response)
})

router.delete('/song', (request, response) => {
  return deleteSongController.handle(request, response)
})
/* ------------ End Song crud */

export { router }
