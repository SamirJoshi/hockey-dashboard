import { Router } from "express"

import { getTeamInfoForComparison, fetchPreviousFiveGames } from '../services/comparisonService'

const router = Router()


interface ComparisonQueryParams {
  team1?: string
  team2?: string
}

router.get('/team', async (req, res, next) => {
  const { team1, team2 } = req.query as ComparisonQueryParams
  if (!!team1 && !!team2) {
    const team1Data = await getTeamInfoForComparison(team1)
    const team2Data = await getTeamInfoForComparison(team2)
    return res.status(200).send({
      team1: team1Data,
      team2: team2Data
    })
  }
  
  if (!!team1) {
    const team1Data = await getTeamInfoForComparison(team1)
    return res.status(200).send({ team1: team1Data })
  }
  
  if (!!team2) {
    const team2Data = await getTeamInfoForComparison(team2)
    return res.status(200).send({ team2: team2Data })
  }

  return res.status(400).send()
})

router.get('/last-five', async (req, res, next) => {
  const { teamId } = req.query as { teamId: string }
  if (!!teamId) {
    const lastFive = await fetchPreviousFiveGames(teamId)
    return res.status(200).send(lastFive)
  }
  return res.status(400).send()
})

router.get('/details', async (req, res, next) => {
  const { teamId } = req.query as { teamId: string }
  if (!!teamId) {
    const teamData = await getTeamInfoForComparison(teamId)
    const lastFive = await fetchPreviousFiveGames(teamId)
    return res.status(200).send({
      teamData,
      lastFive
    })
  }
  return res.status(400).send()
})

export default router

