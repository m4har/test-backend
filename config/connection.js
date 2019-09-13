const Sequelize = require('sequelize')
const pool = {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true
  }
}
const connect = new Sequelize('postgres://mahardicka:developer@127.0.0.1:5432/mahar', pool)

module.exports = connect
