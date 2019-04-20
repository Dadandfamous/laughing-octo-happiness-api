const { Router } = require('express')
const Song = require('./model')
const auth = require("../auth/middleware")

const router = new Router()

// Only left in the post method. Put can update the song, which is not desired.

router.post('/songs', auth, (req, res, next) => {
  Song
    .create(req.body)
    .then(song => {
      if (!song) {
        return res.status(404).send({
          message: `song does not exist`
        })
      }
      return res.status(201).send(song)
    })
    .catch(error => next(error))
})

module.exports = router