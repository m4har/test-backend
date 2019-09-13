const databse = require('./config.json')

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
// const connect = new Sequelize('postgres://mahardicka:developer@127.0.0.1:5432/mahar', pool)
const connect = new Sequelize(`${databse.development.dialect}://${databse.development.username}:${databse.development.password}@${databse.development.host}:5432/${databse.development.database}`, pool)

module.exports = connect
