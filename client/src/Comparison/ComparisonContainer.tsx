import React, { FC, useState, useEffect } from 'react'
import { Segment, Grid, Divider } from "semantic-ui-react"
import axios from "axios"

import { TeamPanel } from "./TeamPanel"
import { TeamData } from '../types/TeamData'

interface ComparisonContainerProps {
  teamId1: string
  teamId2: string
}

export const ComparisonContainer: FC<ComparisonContainerProps> = ({ teamId1, teamId2 }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [teamData1, setTeamData1] = useState<TeamData | null>(null)
  const [teamData2, setTeamData2] = useState<TeamData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const { data } = await axios.get<{ team1: TeamData, team2: TeamData }>("/comparison/team", {
        params: {
          team1: teamId1,
          team2: teamId2
        }
      })
      setTeamData1(data.team1)
      setTeamData2(data.team2)
      setIsLoading(false)
    }

    fetchData()
  }, [teamId1, teamId2])

  const onChangeTeam1 = async (teamId: string) => {
    const { data } = await axios.get<{ team1: TeamData }>("/comparison/team", {
      params: {
        team1: teamId
      }
    })
    setTeamData1(data.team1)
  }

  const onChangeTeam2 = async (teamId: string) => {
    const { data } = await axios.get<{ team2: TeamData }>("/comparison/team", {
      params: {
        team2: teamId
      }
    })
    setTeamData2(data.team2)
  }

  return(
    <Segment loading={ isLoading }>
      {
        (!isLoading && !!teamData1 && !!teamData2) &&
        <Grid stackable columns={2} relaxed="very">
          <TeamPanel teamData={ teamData1 } onChange={ onChangeTeam1 }/>
          <TeamPanel teamData={ teamData2 } onChange={ onChangeTeam2 }/>
        </Grid>
      }
      <Divider vertical className="team-divider">VS</Divider>
    </Segment>
  )
}