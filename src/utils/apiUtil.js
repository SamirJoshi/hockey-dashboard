import moment from 'moment'
const axios = require('axios')

export const fetchTeamStats = async (teamId) => {
  const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`)
  return response.data.teams[0].teamStats[0].splits
}

export const fetchPreviousFiveGames = async (teamId) => {
  const endDate = moment().subtract(1, 'days').format('YYYY-MM-DD')
  const startDate = moment().subtract(1, 'months').format('YYYY-MM-DD')
  const previousGamesUrl = `https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}&startDate=${startDate}&endDate=${endDate}`
  const schedule  = await axios.get(previousGamesUrl)
  const lastFiveGameIds = schedule.data.dates.slice(-5).map(game => game.games[0].gamePk)
  const gameDataPromises = lastFiveGameIds.map(gameId => axios.get(`https://statsapi.web.nhl.com/api/v1/game/${gameId}/boxscore`))
  const lastFiveGames = await Promise.all(gameDataPromises)
  return lastFiveGames.map(gameData => {
    const teams = gameData.data.teams
    if (teams.away.team.id === teamId) {
      return teams.away.teamStats.teamSkaterStats
    }
    return teams.home.teamStats.teamSkaterStats
  })
}