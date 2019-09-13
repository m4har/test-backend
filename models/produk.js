const connection = require('../config/connection')
const Sequelize = require('sequelize')

const produk = connection.define('produk', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: Sequelize.STRING,
  merk: Sequelize.STRING,
  kategori: Sequelize.STRING
})

module.exports = produk
