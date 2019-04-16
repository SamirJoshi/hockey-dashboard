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

  getRankingsData = () => {
    const {
      goalsPerGame,
      goalsAgainstPerGame,
      powerPlayPercentage,
      penaltyKillPercentage,
      faceOffWinPercentage
    } = this.props.data

    const goalsPerRank = parseInt(goalsPerGame)
    const goalsAgainstRank = parseInt(goalsAgainstPerGame)
    const ppRank = parseInt(powerPlayPercentage)
    const pkRank = parseInt(penaltyKillPercentage)
    const faceOffRank = parseInt(faceOffWinPercentage)

    const data = []
    data.push({
      x: 31 - goalsPerRank,
      y: 'Goals For',
      label: `${ goalsPerRank }${ getRankingsSuffix(goalsPerRank) }`
    })
    data.push({
      x: 31 - goalsAgainstRank,
      y: 'Goals Against',
      label: `${ goalsAgainstRank }${ getRankingsSuffix(goalsAgainstRank) }`
    })
    data.push({
      x: 31 - ppRank,
      y: 'Power Play',
      label: `${ ppRank }${ getRankingsSuffix(ppRank) }`
    })
    data.push({
      x: 31 - pkRank,
      y: 'Penalty Kill',
      label: `${ pkRank }${ getRankingsSuffix(pkRank) }`
    })
    data.push({
      x: 31 - faceOffRank,
      y: 'Face Off %',
      label: `${ faceOffRank }${ getRankingsSuffix(faceOffRank) }`
    })

    return data
  }

  render () {
    const { colors } = this.props
    const { rankingValue } = this.state
    const formattedData = this.getRankingsData()

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
          data={ formattedData } />
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