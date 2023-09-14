import express from 'express'

const router = express.Router()
import * as db from '../db/shoplists'

router.patch('/', async (req, res) => {
  try {
    const newShopList = req.body
    await db.updateShopList(newShopList)
  } catch {
    res.sendStatus(500)
  }
})

router.get('/', async (req, res) => {
  try {
    const currentList = await db.getShopList()
    res.send(currentList)
  } catch {
    res.sendStatus(500)
  }
})

export default router