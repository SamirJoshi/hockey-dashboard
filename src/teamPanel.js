import React, { Component } from 'react';
import { RadialChart, Hint } from 'react-vis'
import './App.css';

import teams from './constants/teams'
import TeamSelectDropdown from './teamSelectDropdown'
import RankingsChart from './charts/rankingsChart';

class TeamPanel extends Component {
  constructor(props) {
    super(props)
    this.state = { recordValue: false }
  }

  getTeamTitle = () => this.props.selectedTeam ?
    teams[this.props.selectedTeam].name : 'Select a team'

  renderTeamRecord = () => {
    const { teamStats, colors } = this.props
    const { recordValue } = this.state

    const wins = teamStats.stats.stat.wins
    const losses = teamStats.stats.stat.losses
    const otLosses = teamStats.stats.stat.ot
    const gamesPlayed = teamStats.stats.stat.gamesPlayed

    return (
      <div>
        <div className='record-text-in-chart'>{ wins }-{ losses }-{ otLosses }</div>
        <RadialChart
          innerRadius={ 65 }
          radius={ 95 }
          colorType="literal"
          onValueMouseOver={ v => this.setState({ recordValue: v })}
          onSeriesMouseOut={ () => this.setState({ recordValue: false })}
          data={[
            { angle: wins / gamesPlayed * 360, color: colors.primaryColor, label: { name: 'Wins', value: wins } },
            { angle: losses / gamesPlayed * 360, color: colors.secondaryColor, label: { name: 'Losses', value: losses } },
            { angle: otLosses / gamesPlayed * 360, color: colors.tertiaryColor, label: { name: 'OT Losses', value: otLosses } }
          ]}
          width={ 200 }
          height={ 200 }>
          { recordValue &&
            <Hint value={ recordValue }>
              <div className='radial-chart-tooltip'>
                <div className='radial-chart-tooltip-name'>{ recordValue.label.name }</div>
                <div className='radial-chart-tooltip-value'>{ recordValue.label.value }</div>
              </div>
            </Hint>
          }
          </RadialChart>
      </div>
    )
  }

  renderTeamPoints = () => (
    <div className='points-text'>
      {`${this.props.teamStats.stats.stat.pts} pts`}
    </div>
  )

  getRankingsSuffix = (rank) => {
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

  getRankingsData = (teamStats) => {
    const {
      goalsPerGame,
      goalsAgainstPerGame,
      powerPlayPercentage,
      penaltyKillPercentage,
      faceOffWinPercentage
    } = teamStats.rankings.stat

    const goalsPerRank = 31 - parseInt(goalsPerGame)
    const goalsAgainstRank = 31 - parseInt(goalsAgainstPerGame)
    const ppRank = 31 - parseInt(powerPlayPercentage)
    const pkRank = 31 - parseInt(penaltyKillPercentage)
    const faceOffRank = 31 - parseInt(faceOffWinPercentage)

    const data = []
    data.push({
      x: goalsPerRank,
      y: 'Goals For',
      label: `${ goalsPerRank }${ this.getRankingsSuffix(goalsPerRank) }`
    })
    data.push({
      x: goalsAgainstRank,
      y: 'Goals Against',
      label: `${ goalsAgainstRank }${ this.getRankingsSuffix(goalsAgainstRank) }`
    })
    data.push({
      x: ppRank,
      y: 'Power Play',
      label: `${ ppRank }${ this.getRankingsSuffix(ppRank) }`
    })
    data.push({
      x: pkRank,
      y: 'Penalty Kill',
      label: `${ pkRank }${ this.getRankingsSuffix(pkRank) }`
    })
    data.push({
      x: faceOffRank,
      y: 'Face Off %',
      label: `${ faceOffRank }${ this.getRankingsSuffix(faceOffRank) }`
    })

    return data
  }

  renderRankingsChart = () => {
    const { teamStats, colors } = this.props

    return (
      <RankingsChart
        data={ this.getRankingsData(teamStats) }
        colors={ colors }/>
    )
  }

  renderTeamStats = () => {
    const { selectedTeam } = this.props

    if (!selectedTeam) {
      return (
      <div className='no-team-selected-panel'>.</div>
      )
    }

    return (
      <div>
        <div className='stat-container split-view-stats'>
          <div className='split-view-stat'>
            <div className='stat-header'><h5>Points</h5></div>
            <div className='record-text'>
              { this.renderTeamPoints() }
            </div>
          </div>
          <div className='split-view-stat'>
            <div className='stat-header'><h5>Record</h5></div>
            <div className='record-text'>
              { this.renderTeamRecord() }
            </div>
          </div>
        </div>
        <div className='stat-container'>
            <h5>Rankings</h5>
            { this.renderRankingsChart() }
        </div>
      </div>
    )
  }

  render() {
    const { panel, selectTeam, selectedTeam } = this.props
    return (
      <div className='team-container'
        style={{ justifyContent: panel === 1 ? 'flex-end' : 'flex-start' }}>
        <div className='team-content-container'>
          <div className='team-header'>
            <h3>{ this.getTeamTitle() }</h3>
            <TeamSelectDropdown
                panel={ panel }
                selectedTeam={ selectedTeam }
                selectTeam={ selectTeam } />
          </div>
          { this.renderTeamStats() }
        </div>
      </div>
    )
  }
}

export default TeamPanel