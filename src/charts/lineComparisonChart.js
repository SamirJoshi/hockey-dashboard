import React, { Component } from 'react';
import '../App.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries
} from 'react-vis'

class ShotComparisonChart extends Component {

  formatShotsData = () => {
    const { teamPanel1Data, teamPanel2Data } = this.props
    if (!teamPanel1Data.selectedTeam || !teamPanel2Data.selectedTeam ) {
      return { dataTeamOne: [], dataTeamTwo: [] }
    }

    const dataTeamOne = teamPanel1Data.lastFive.map((game, index) => ({
      x: index + 1,
      y: game.shots
    }))

    const dataTeamTwo = teamPanel2Data.lastFive.map((game, index) => ({
      x: index + 1,
      y: game.shots
    }))

    return { dataTeamOne, dataTeamTwo }
  }

  shotsComparison = () => {
    const { teamPanel1Data, teamPanel2Data } = this.props
    const { dataTeamOne, dataTeamTwo } = this.formatShotsData()
    const maxShots = [...dataTeamOne, ...dataTeamTwo].reduce((maxShots, game) =>
      game.y > maxShots ? game.y : maxShots, 0)


    if (!teamPanel1Data.selectedTeam || !teamPanel2Data.selectedTeam ) {
      return <div>No data</div>
    }
    
    const teamOneColor = teamPanel1Data.colors.primaryColor
    const teamTwoColor = teamPanel2Data.colors.primaryColor
    
    return (
      <XYPlot
        yDomain={ [0, maxShots + 5] }
        width={400} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineMarkSeries
          className="linemark-series-example" 
          style={{ strokeWidth: '3px' }}
          lineStyle={{ stroke: teamOneColor }}
          markStyle={{ stroke: teamOneColor, fill: teamOneColor }}
          data={ dataTeamOne }
        />
        <LineMarkSeries
          className="linemark-series-example" 
          style={{ strokeWidth: '3px' }}
          lineStyle={{ stroke: teamTwoColor }}
          markStyle={{ stroke: teamTwoColor, fill: teamTwoColor }}
          data={ dataTeamTwo }
        />
      </XYPlot>
    )
  }
  
  render() {
    return (
      <div className='comparison-stat-container'>
          <h5>Shots</h5>
          { this.shotsComparison() }
      </div>
    )
  }
}

export default ShotComparisonChart