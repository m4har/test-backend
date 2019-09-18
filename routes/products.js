var express = require('express')
var router = express.Router()
const produk = require('../models/produk')

router.get('/', async (req, res, next) => {
  try {
    let allProduct = ''
    const { kategori, merk, nama } = req.query
    switch  (true) {
      case (kategori === undefined && merk === undefined && nama === undefined):
        allProduct = await produk.findAll()
        return res.send(allProduct)
      case (kategori !== undefined && merk === undefined && nama === undefined):
        allProduct = await produk.findAll({ where: { kategori } })
        return res.send(allProduct)
      case (kategori === undefined && merk !== undefined && nama === undefined):
        allProduct = await produk.findAll({ where: { merk } })
        return res.send(allProduct)
      case (kategori === undefined && merk === undefined && nama !== undefined):
        allProduct = await produk.findAll({ where: { nama } })
        return res.send(allProduct)
      case (kategori !== undefined && merk !== undefined && nama === undefined):
        allProduct = await produk.findAll({ where: { merk, nama } })
        return res.send(allProduct)
      case (kategori !== undefined && merk !== undefined && nama !== undefined):
        allProduct = await produk.findAll({ where: { merk, nama, kategori } })
        return res.send(allProduct)
      default:
        break
    }
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const idProduct = await produk.findOne({ where: { id } })
    idProduct !== null ? res.send(idProduct) : res.send({ msg: 'Data Tidak Ditemukan' })
  } catch (error) {
    res.send({ error: '404' })
    console.log(error)
  }
})
router.post('/', async (req, res) => {
  try {
    const { nama, kategori, merk } = req.body
    await produk.create({ nama, kategori, merk })
    res.send('produk ditambah')
  } catch (error) {
    res.send(error)
  }
})
router.put('/:id', async (req, res) => {
  try {
    const { nama, kategori, merk } = req.body
    const { id } = req.params
    await produk.update({ nama, kategori, merk, updatedAt: produk.sequelize.fn('NOW') }, { where: { id } })
    res.send('data updated')
  } catch (error) {
    res.send(error)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await produk.destroy({ where: { id } })
    res.send('berhasil di hapus')
  } catch (error) {
    res.send(error)
  }
})
module.exports = router
