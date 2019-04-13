import React, { Component } from 'react';
import '../App.css';
import TrendComparisonChart from './trendComparisonChart';

class HitComparisonChart extends Component {

  render() {
    const { teamPanel1Data, teamPanel2Data } = this.props
    const teamOneColor = teamPanel1Data.colors.primaryColor
    const teamTwoColor = teamPanel2Data.colors.primaryColor

    return (
      <TrendComparisonChart
        name={ 'Hits' }
        statKey={ 'hits' }
        teamPanel1Data={ teamPanel1Data }
        teamPanel2Data={ teamPanel2Data }
        teamColors={ { teamOneColor, teamTwoColor } }/>
    )
  }
}

export default HitComparisonChart