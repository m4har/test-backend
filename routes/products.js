var express = require('express')
var router = express.Router()
const produk = require('../models/produk')

router.get('/', async (req, res, next) => {
  try {
    const allProduct = await produk.findAll()
    res.send(allProduct)
  } catch (error) {
    console.log(error)
    res.send(error)
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
