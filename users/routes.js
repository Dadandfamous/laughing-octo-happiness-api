const { Router } = require('express')
const User = require('./model')

const router = new Router()

router.get('/users', (req, res, next) => {
  User
    .findAll()
    .then(users => {
      res.send({ users })
    })
    .catch(error => next(error))
})

router.get('/users/:id', (req, res, next) => {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `user does not exist`
        })
      }
      return res.send(user)
    })
    .catch(error => next(error))
})

router.post('/users', (req, res, next) => {
  User
    .create(req.body)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `user does not exist`
        })
      }
      return res.status(201).send(user)
    })
    .catch(error => next(error))
})

router.put('/users/:id', (req, res, next) => {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User does not exist`
        })
      }
      return user.update(req.body).then(user => res.send(user))
    })
    .catch(error => next(error))
})

router.delete('/users/:id', (req, res, next) => {
  User
    .findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `user does not exist`
        })
      }
      return user.destroy()
        .then(() => res.send({
          message: `user was deleted`
        }))
    })
    .catch(error => next(error))
})

module.exports = router