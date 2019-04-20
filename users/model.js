const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
  email: {
    type: Sequelize.STRING,
    field: 'first_name',
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    field: 'last_name',
    allowNull: false
  },
  passwordConfirmation: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'users'
})

module.exports = User