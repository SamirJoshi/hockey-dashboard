import React, { FC, useState, useEffect } from 'react'
import { Loader, List, ListItem } from "semantic-ui-react"
import axios from "axios"

import { teamMap } from '../constants/teams'

interface TeamWithRank {
  id: string
  rank: string
  points: string
}

const getTeamNameById = (id: string) => {
  for (const team of Object.values(teamMap)) {
    if (team.id.toString() === id) {
      return team.name
    }
  }
  return ""
}

export const RankingPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [rankedTeams, setRankedTeams] = useState<TeamWithRank[]>([])

  useEffect(() => {
    const fetchRanking = async () => {
      setIsLoading(true)
      const { data } = await axios.get<{ ranking: TeamWithRank[] }>("/rankings")
      setRankedTeams(data.ranking)
      setIsLoading(false)
    }

    fetchRanking()
  }, [])

  const renderListItem = (team: TeamWithRank, index: number) => (
    <ListItem key={ `team-${index}`}>
      <div className="ranking-list-item">
        <div className="item-left">
          <div className="rank-display">
            { `#${team.rank}` }
          </div>
          <div className="team-display">
            <div>
              { getTeamNameById(team.id) }
            </div>
          </div>
        </div>
        <div className="item-right">
          { `${team.points} pts` }
        </div>
      </div>
    </ListItem>
  )

  if (isLoading) {
    return (
      <div className="ranking-page">
        <div className="ranking-header">
          Rankings
        </div>
          <Loader active />
      </div>
    )
}

  return (
    <div className="ranking-page">
      <div className="ranking-header">
        Rankings
      </div>
      <List divided>
        {
          rankedTeams.map(renderListItem)
        }
      </List>
    </div>
  )
}