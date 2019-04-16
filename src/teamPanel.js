import React, { Component } from 'react';
import { RadialChart, Hint } from 'react-vis'
import './App.css';
import { Link } from 'react-router-dom'

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

  renderRankingsChart = () => {
    const { teamStats, colors } = this.props

    return (
      <RankingsChart
        data={ teamStats.rankings.stat }
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
            <div className='team-title-container'>
              <h3>{ this.getTeamTitle() }</h3>
              { !!selectedTeam &&
                <Link
                  className='team-details-link'
                  to={ `/team?team=${selectedTeam}` }>
                  View Details
                </Link>
              }
            </div>
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