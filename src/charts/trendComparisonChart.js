import React, { Component } from 'react';
import '../App.css';

import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  Hint
} from 'react-vis'

class TrendComparisonChart extends Component {
  constructor(props) {
    super(props)
    this.state = { tooltipValue: false }
  }

  formatData = () => {
    const { statKey, teamPanel1Data, teamPanel2Data } = this.props
    const dataTeamOne = teamPanel1Data.lastFive.map((game, index) => ({
      x: index + 1,
      y: game[statKey]
    }))

    const dataTeamTwo = teamPanel2Data.lastFive.map((game, index) => ({
      x: index + 1,
      y: game[statKey]
    }))

    return { dataTeamOne, dataTeamTwo }
  }

  getUpperBound = (data) => data
    .reduce((maxValue, game) => Math.max(game.y, maxValue), 0)

  renderHint = () => {
    const { name } = this.props
    const { tooltipValue } = this.state

    return tooltipValue &&
      <Hint value={ tooltipValue }>
        <div className='radial-chart-tooltip'>
          <div className='radial-chart-tooltip-name'>{ name }</div>
          <div className='radial-chart-tooltip-value'>{ tooltipValue.y }</div>
        </div>
      </Hint>
  }

  renderLineMarkSeries = (data, color) => (
    <LineMarkSeries
      className="linemark-series-example" 
      style={{ strokeWidth: '3px' }}
      lineStyle={{ stroke: color }}
      markStyle={{ stroke: color, fill: color }}
      onValueMouseOver={ v => this.setState({ tooltipValue: v })}
      onSeriesMouseOut={ () => this.setState({ tooltipValue: false })}
      data={ data }
    />
  )

  render() {
    const { name, teamColors } = this.props
    const { teamOneColor, teamTwoColor } = teamColors
    const { dataTeamOne, dataTeamTwo } = this.formatData()
    const maxValue = this.getUpperBound([...dataTeamOne, ...dataTeamTwo])

    return (
      <div className='comparison-stat-container'>
        <h5>{ name }</h5>
        <FlexibleWidthXYPlot
          yDomain={ [0, maxValue + 5] }
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          { this.renderLineMarkSeries(dataTeamOne, teamOneColor) }
          { this.renderLineMarkSeries(dataTeamTwo, teamTwoColor) }
          { this.renderHint() }
        </FlexibleWidthXYPlot>
      </div>
    )
  }
}

export default TrendComparisonChart