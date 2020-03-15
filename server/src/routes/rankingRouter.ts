import { Router } from "express"

import { getCurrentRankings } from '../services/rankingService'

const router = Router()

router.get('/', async (req, res, next) => {
  const ranking = await getCurrentRankings()
  res.status(200).send({ ranking })
})

export default router

