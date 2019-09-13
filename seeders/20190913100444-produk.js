'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('produk', [{
      nama: 'buku tulis',
      merk: 'sidu',
      kategori: 'atk',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'buku gambar',
      merk: 'sidu',
      kategori: 'atk',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nama: 'pensil warna',
      merk: 'faberkastel',
      kategori: 'atk',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produk', null, {})
  }
}
