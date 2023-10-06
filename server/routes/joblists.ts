import express from 'express'

const router = express.Router()
import * as db from '../db/joblists'

router.get('/', async (req, res) => {
  try {
    const jobList = await db.getJobList()
    res.send(jobList)
  } catch {
    res.sendStatus(500)
  }
})


export default router