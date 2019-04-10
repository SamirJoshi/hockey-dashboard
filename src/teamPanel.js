import React, { Component } from 'react';
import './App.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  HorizontalBarSeries,
  RadialChart,
  Hint
} from 'react-vis'
import teams from './constants/teams'
import TeamSelectDropdown from './teamSelectDropdown'


class TeamPanel extends Component {

  constructor(props) {
    super(props)

    this.state = {
      recordValue: false
    }
  }

  getTeamTitle = () => this.props.selectedTeam ?
    teams[this.props.selectedTeam].name : 'Select a team'

  renderTeamRecord = () => {
    const { selectedTeam, teamStats, colors } = this.props
    const { recordValue } = this.state
    const hintValue = {}
    if (recordValue) {
      hintValue[recordValue.label.name] = recordValue.label.value
    }

    if (!selectedTeam || !teamStats) {
      return <div></div>
    }
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
          onValueMouseOver={v => this.setState({ recordValue: v })}
          onSeriesMouseOut={v => this.setState({ recordValue: false })}
          data={[
            { angle: wins / gamesPlayed * 360, color: colors.primaryColor, label: wins },
            { angle: losses / gamesPlayed * 360, color: colors.secondaryColor, label: losses },
            { angle: otLosses / gamesPlayed * 360, color: colors.tertiaryColor, label: otLosses }
          ]}
          width={ 200 }
          height={ 200 }>
          { recordValue && <Hint value={ recordValue } />}
          </RadialChart>
      </div>
    )
  }

  renderTeamPoints = () => {
    const { selectedTeam, teamStats } = this.props
    if (!selectedTeam || !teamStats) {
      return ''
    }

    return <div className='points-text'>{`${teamStats.stats.stat.pts} pts`}</div>
  }

  getRankingsData = (teamStats) => {
    const data = []
    data.push({ x: 31 - parseInt(teamStats.rankings.stat.goalsPerGame), y: 'Goals For'})
    data.push({ x: 31 - parseInt(teamStats.rankings.stat.goalsAgainstPerGame), y: 'Goals Against'})
    data.push({ x: 31 - parseInt(teamStats.rankings.stat.powerPlayPercentage), y: 'Power Play'})
    data.push({ x: 31 - parseInt(teamStats.rankings.stat.penaltyKillPercentage), y: 'Penalty Kill'})
    data.push({ x: 31 - parseInt(teamStats.rankings.stat.faceOffWinPercentage), y: 'Face Off %'})

    return data
  }

  renderRankingsChart = () => {
    const { selectedTeam, teamStats, colors } = this.props
    if (!selectedTeam || !teamStats) {
      return ''
    }

    return (
      <XYPlot
        yType="ordinal"
        margin={{ left: 100 }}
        width={ 550 }
        height={ 250 }
        xDomain={ [0, 32] }
        color={ colors.primaryColor }>
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries
          data={ this.getRankingsData(teamStats) }/>
      </XYPlot>
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