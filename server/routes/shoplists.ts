import express from 'express'

const router = express.Router()
import * as db from '../db/shoplists'

router.patch('/', async (req, res) => {
  try {
    const newShopListItem = req.body.items
    await db.addItem(newShopListItem)
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

router.delete('/', async (req, res) => {
  try {
    const deleteItem = req.body.item
    console.log(req.body)
    await db.deleteItem(deleteItem)
  } catch (e) {
    res.sendStatus(500)
    console.log(e)
  }
})

export default router