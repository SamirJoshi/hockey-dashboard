import React, { FC, useState, useEffect } from 'react'
import { Segment, Header, Card, CardGroup, CardHeader, CardContent } from "semantic-ui-react"
import axios from "axios"
import './TeamPage.scss'

import { TeamData, LastFive } from '../types/TeamData'
import { getTeamName, getSecondaryColor, getPrimaryColor } from '../utils/teamMapUtils'

interface TeamContainerProps {
  teamId: string
}

export const TeamContainer: FC<TeamContainerProps> = ({ teamId }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [teamData, setTeamData] = useState<TeamData | null>(null)


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const { data } = await axios.get<{ teamData: TeamData, lastFive: LastFive }>("/comparison/details", {
        params: { teamId }
      })
      setTeamData(data.teamData)

      setIsLoading(false)
    }

    fetchData()
  }, [teamId])

  const generateBlurb = () => {
    let blurb = `The ${getTeamName(teamId)} have been playing since ${teamData!.info.firstYearOfPlay}. `
    blurb += `They are located in ${teamData!.info.city} and currently play in ${teamData!.info.venue}.`

    return blurb
  }

  return(
    <Segment loading={ isLoading } className="team-segment">
      {
        (!isLoading && !!teamData) &&
        <div>
          <div className="header-container" style={{ backgroundColor: getPrimaryColor(teamId) }}>
            <Header as="h1" style={{ backgroundColor: getPrimaryColor(teamId), color: getSecondaryColor(teamId) }}>
              { getTeamName(teamId) }
            </Header>
            <div className="team-info-container">
              <div className='team-info-component'>
                { generateBlurb() }
              </div>
              <div className='team-info-component'>
                { `Division: ${ teamData.info.division }`}
              </div>
              <div className='team-info-component'>
                { `Conference: ${ teamData.info.conference }`}
              </div>
            </div>
          </div>
          <CardGroup>
            <Card>
              <CardContent>
                <CardHeader>Points</CardHeader>
                <div className="text-card-content">
                  { `${ teamData.points } points` }
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardHeader>Record</CardHeader>
                <div className="text-card-content">
                  { `${ teamData.record.wins } - ${teamData.record.losses} - ${teamData.record.otl}` }
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardHeader>Goals For Rank</CardHeader>
                <div className="text-card-content">
                  { teamData.rankings.goalsFor }
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardHeader>Goals Against Rank</CardHeader>
                <div className="text-card-content">
                  { teamData.rankings.goalsAgainst }
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <CardHeader>Power Play Rank</CardHeader>
                <div className="text-card-content">
                  { teamData.rankings.powerPlay }
                </div>
              </CardContent>
            </Card>
          </CardGroup>
        </div>
      }
    </Segment>
  )
}