import React, { Component } from 'react';
import '../App.css';
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  HorizontalBarSeries,
  Hint
} from 'react-vis'
import { getRankingsSuffix } from '../utils/formattingUtil';

class RankingsChart extends Component {

  constructor(props) {
    super(props)
    this.state = { rankingsValue: false }
  }

  render () {
    const { data, colors } = this.props
    const { rankingValue } = this.state

    return (
      <FlexibleWidthXYPlot
        yType="ordinal"
        margin={{ left: 100 }}
        height={ 250 }
        xDomain={ [0, 32] }
        color={ colors.primaryColor }>
        <HorizontalGridLines />
        <XAxis tickFormat={v => `${ 31 - v }${ getRankingsSuffix(31 - v) }`}/>
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
      </FlexibleWidthXYPlot>
    )
  }
}

export default RankingsChart