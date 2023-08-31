import express from 'express'

const router = express.Router()
import * as db from '../db/shoplists'

router.get('/', async (req, res) => {
  try {
    const shoplist = await db.getShopList()
    // res.json('hi')
    res.json(shoplist)
  } catch {
    res.sendStatus(500)
  }
})

router.patch('/', async (req, res) => {
  try {
    const newShopList = req.body
    await db.updateShopList(newShopList)
  } catch {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newList = req.body
    await db.addShopList(newList)
  } catch {
    res.sendStatus(500)
  }
})
export default router