const router = require('express').Router()
const movie = require('./controllers/movie')

router.get('/Movies', movie.index)
router.get('/Movies/:id', movie.show)
router.post('/Movies', movie.create)
router.patch('/Movies/:id', movie.update)
router.delete('/Movies/:id', movie.delete)

module.exports = router