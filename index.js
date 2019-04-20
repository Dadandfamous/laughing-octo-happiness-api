const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./users/routes')
const playlistsRouter = require('./playlists/routes')
const songsRouter = require('./songs/routes')
const authRouter = require('./auth/routes')

const app = express()
const port = process.env.PORT || 4001

app
  .use(bodyParser.json())
  .use(usersRouter)
  .use(playlistsRouter)
  .use(songsRouter)
  .use(authRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))