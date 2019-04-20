const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router()

router.post('/users', (req, res, next) => {

  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }

  User
    .create(req.body)
    .then(user => {
      if (!user.email || !user.password) {
        return res.status(404).send({
          message: `user does not exist`
        })
      }
      return res.status(201).send(user)
    })
    .catch(error => next(error))
})

// Dont need this for the assignment, leave it here for now (delete later):

router.get('/users', (req, res, next) => {
  User
    .findAll()
    .then(users => {
      res.send({ users })
    })
    .catch(error => next(error))
})

// router.get('/users/:id', (req, res, next) => {
//   User
//     .findByPk(req.params.id, { include: [Playlist] })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({
//           message: `user does not exist`
//         })
//       }
//       return res.send(user)
//     })
//     .catch(error => next(error))
// })

// router.put('/users/:id', (req, res, next) => {
//   User
//   .findByPk(req.params.id, { include: [Playlist] })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({
//           message: `User does not exist`
//         })
//       }
//       return user.update(req.body).then(user => res.send(user))
//     })
//     .catch(error => next(error))
// })

// router.delete('/users/:id', (req, res, next) => {
//   User
//   .findByPk(req.params.id, { include: [Playlist] })
//     .then(user => {
//       if (!user) {
//         return res.status(404).send({
//           message: `user does not exist`
//         })
//       }
//       return user.destroy()
//         .then(() => res.send({
//           message: `user was deleted`
//         }))
//     })
//     .catch(error => next(error))
// })

module.exports = router