import React, { FC } from 'react'
import { Dropdown, Grid, Divider } from "semantic-ui-react"
import { PieChart, Pie, ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"

import { generateOptions } from "./ComparisonPage"
import { getPrimaryColor, getSecondaryColor, getTertiaryColor, getTeamName } from "../utils/teamMapUtils"
import { TeamData } from '../types/TeamData'

interface TeamPanelProps {
  teamData: TeamData,
  onChange: Function
}

export const TeamPanel: FC<TeamPanelProps> = ({ teamData, onChange }) => {
  const renderTeamPoints = () => (
    <div className='points-text'>
      { `${teamData.points} pts`}
    </div>
  )

  const renderLabel = (entry: any) => {
    return `${entry.name}: ${entry.value}`
  }

  const renderTeamRecord = () => (
    <div className="team-record">
      <ResponsiveContainer width="100%" height={ 250 }>
        <PieChart>
          <Pie
            data={[
              { name: 'Wins', value: teamData.record.wins, fill: getPrimaryColor(teamData.id) },
              { name: 'Losses', value: teamData.record.losses, fill: getSecondaryColor(teamData.id) },
              { name: 'OT Losses', value: teamData.record.otl, fill: getTertiaryColor(teamData.id) }
            ]}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            label={ renderLabel }
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

  const rankingChartData = [
  {
    "name": "Goals For",
    "value": 32 - teamData.rankings.goalsFor
  },
  {
    "name": "Goals Against",
    "value": 32 - teamData.rankings.goalsAgainst
  },
  {
    "name": "Power Play",
    "value": 32 - teamData.rankings.powerPlay
  },
  {
    "name": "Penalty Kill",
    "value": 32 - teamData.rankings.penaltyKill
  },
  {
    "name": "Faceoff %",
    "value": 32 - teamData.rankings.faceoffPerc
  }
]

  const getRankingsSuffix = (rank: number) => {
    if ([11, 12, 13].includes(rank)) {
      return 'th'
    } 
    
    const remainder = rank % 10
    if (remainder === 1) {
      return 'st'
    } else if (remainder === 2) {
      return 'nd'
    } else if (remainder === 3) {
      return 'rd'
    } else {
      return 'th'
    }
  }

  const renderRankingsChart = (data: any[]) => (
    <ResponsiveContainer width="100%" height={ 250 }>
      <BarChart data={rankingChartData} layout="vertical">
        <CartesianGrid />
        <XAxis
          type="number"
          domain={ [1, 31] }
          tickFormatter={ (val) => `${32 - val}${getRankingsSuffix(32 - val)}` }
        />
        <YAxis type="category" dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill={ getPrimaryColor(teamData.id) } />
      </BarChart>
    </ResponsiveContainer>
  )

  return (
    <Grid.Column className='team-panel-column'>
      <div className="team-panel">
        <div className='header'>
          <div className='header-text'>
            { getTeamName(teamData.id) }
          </div>
          <Dropdown
            className="select-team-action"
            placeholder="Change team"
            selection
            options={ generateOptions() } 
            onChange={ (_, { value }) => onChange(value as string) }
          />
        </div>
        <Divider clearing />
        <div className='stats-container'>
          { renderTeamPoints() }
          { renderTeamRecord() }
        </div>
        <Divider clearing />
        <div className='rankings-container'>
          <div className='rankings-header'>
            Rankings
          </div>
          { renderRankingsChart([
            { name: 'Wins', value: 44, fill: '#006D75' },
            { name: 'Losses', value: 14, fill: '#EA7200' },
            { name: 'OT Losses', value: 12, fill: '#000000' }
          ]) }
        </div>
      </div>
    </Grid.Column>
  )
}