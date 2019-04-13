import React, { Component } from 'react';
import '../App.css';

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  HorizontalBarSeries,
  Hint
} from 'react-vis'

class RankingsChart extends Component {

  constructor(props) {
    super(props)
    this.state = { rankingsValue: false }
  }

  render () {
    const { data, colors } = this.props
    const { rankingValue } = this.state

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
          onValueMouseOver={ v => this.setState({ rankingValue: v })}
          onSeriesMouseOut={ () => this.setState({ rankingValue: false })}
          data={ data } />
        { rankingValue &&
          <Hint value={ rankingValue }>
            <div className='radial-chart-tooltip'>
              <div className='radial-chart-tooltip-name'>{ rankingValue.y }</div>
              <div className='radial-chart-tooltip-value'>{ rankingValue.label }</div>
            </div>
          </Hint>
        }
      </XYPlot>
    )
  }
}

export default RankingsChart