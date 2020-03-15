import axios from "axios"

interface TeamRankingResponse {
  team: {
    id: number
    name: string
  }
  points: number
  leagueRank: string
}

interface RankingsByDivision {
  standingsType: string
  league: object
  division: object
  conference: object
  teamRecords: TeamRankingResponse[]
}

interface RankingsResponseData {
  records: RankingsByDivision[]
}

interface TeamWithRank {
  id: string
  rank: string
  points: string
}

export const getCurrentRankings = async (): Promise<TeamWithRank[]> => {
  const { data } = await axios.get<RankingsResponseData>('https://statsapi.web.nhl.com/api/v1/standings')
  const rankings: TeamWithRank[] = []
  data.records.forEach(division => {
    division.teamRecords.forEach(team => {
      rankings.push({
        id: team.team.id.toString(),
        rank: team.leagueRank,
        points: team.points.toString()
      })
    })
  })

  rankings.sort((team1, team2) => Number(team1.rank) - Number(team2.rank))

  return rankings
}
