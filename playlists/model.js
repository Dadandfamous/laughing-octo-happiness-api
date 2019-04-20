const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')

const Playlist = sequelize.define('playlists', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false,
  tableName: 'playlists'
})

Playlist.belongsTo(User)

module.exports = Playlist