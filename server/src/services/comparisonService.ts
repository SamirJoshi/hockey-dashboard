import axios from "axios"
import * as moment from "moment"

type TeamStatsSplit = [
  {
    stat: {
      wins: number
      losses: number
      ot: number
      pts: number
    }
  },
  {
    stat: {
      goalsPerGame: string
      goalsAgainstPerGame: string
      powerPlayPercentage: string
      penaltyKillPercentage: string
      faceOffWinPercentage: string
    }
  }
]

interface SingleTeamResponseData {
  venue: {
    name: string
  }
  firstYearOfPlay: string
  locationName: string
  division: {
    name: string
  }
  conference: {
    name: string
  }
  teamStats: { splits: TeamStatsSplit }[]
}

interface TeamResponseData {
  teams: SingleTeamResponseData[]
}

interface FormattedTeamStats {
  id: string
  info: {
    firstYearOfPlay: string
    venue: string
    city: string
    division: string
    conference: string
  }
  points: number
  record: {
    wins: number
    losses: number
    otl: number
  }
  rankings: {
    goalsFor: number
    goalsAgainst: number
    powerPlay: number
    penaltyKill: number
    faceoffPerc: number
  }
}

export const getTeamInfoForComparison = async (teamId: string): Promise<FormattedTeamStats> => {
  const { data } = await axios.get<TeamResponseData>(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`)
  const splits = data.teams[0].teamStats[0].splits

  return {
    id: teamId,
    points: splits[0].stat.pts,
    info: {
      firstYearOfPlay: data.teams[0].firstYearOfPlay,
      venue: data.teams[0].venue.name,
      city: data.teams[0].locationName,
      division: data.teams[0].division.name,
      conference: data.teams[0].conference.name
    },
    record: {
      wins: splits[0].stat.wins,
      losses: splits[0].stat.losses,
      otl: splits[0].stat.ot
    },
    rankings: {
      goalsFor: parseInt(splits[1].stat.goalsPerGame),
      goalsAgainst: parseInt(splits[1].stat.goalsAgainstPerGame),
      powerPlay: parseInt(splits[1].stat.powerPlayPercentage),
      penaltyKill: parseInt(splits[1].stat.penaltyKillPercentage),
      faceoffPerc: parseInt(splits[1].stat.faceOffWinPercentage)
    }
  }
}

interface ScheduleResponseData {
  dates: {
    games: { gamePk: string }[]
  }[]
}

type LastFive = {
  against: string
  result: string
  goals: number
  pim: number
  shots: number
  powerPlayPercentage: number
  powerPlayGoals: number
  faceOffWinPercentage: number
  blocked: number
  takeaways: number
  giveaways: number
  hits: number
}[]

export const fetchPreviousFiveGames = async (teamId: string): Promise<LastFive> => {
  const endDate = moment().subtract(1, 'days').format('YYYY-MM-DD')
  const startDate = moment().subtract(2, 'months').format('YYYY-MM-DD')

  const { data: schedule }  = await axios.get<ScheduleResponseData>(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${teamId}&startDate=${startDate}&endDate=${endDate}`)
  const lastFiveGameIds: string[] = schedule.dates.slice(-5).map(game => game.games[0].gamePk)

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