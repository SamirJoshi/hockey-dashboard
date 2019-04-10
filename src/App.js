import React, { Component } from 'react'
import './App.css'
import TeamPanel from './teamPanel'
import ShotComparisonChart from './charts/lineComparisonChart'
import HitComparisonChart from './charts/hitComparisonChart'
import TakeawayComparisonChart from './charts/takeawayComparisonChart'
import teams from './constants/teams'
import { getTeamColors } from './utils/colorUtil'
import { fetchPreviousFiveGames } from './utils/apiUtil'

const axios = require('axios')

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamPanel1Data: {},
      teamPanel2Data: {}
    }
  }

  selectTeam = async (teamKey, panelNumber) => {
    try {
      const teamId = teams[teamKey].id
      const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`)
      const stats = response.data.teams[0].teamStats[0].splits
      const lastFive = await fetchPreviousFiveGames(teamId)
      this.setState({
        [`teamPanel${panelNumber}Data`]: {
          selectedTeam: teamKey,
          colors: getTeamColors(teamKey),
          teamStats: {
            stats: stats[0],
            rankings: stats[1]
          },
          lastFive
        } 
      })
    } catch (error) {
      this.setState({
        [`teamPanel${panelNumber}Data`]: {
          selectedTeam: null,
          colors: {},
          teamStats: null,
          lastFive: []
        } 
      })
    }
  }

  render() {
    const { teamPanel1Data, teamPanel2Data } = this.state
    const backgroundImagePath = 'https://samirjoshi.github.io/hockey-dashboard/background2.jpg'

    return (
      <div>
        <div className="App"style={{
          marginBottom: 0,
          backgroundImage: `url(${backgroundImagePath})`,
          backgroundSize: 'cover'
        }} >
          { !(teamPanel1Data.selectedTeam || teamPanel2Data.selectedTeam) &&
            <div className='welcome-header-container'>
              <div className='welcome-header'>
                <h1>Hockey Dashboards</h1>
                <p>Choose two teams to see how they compare. Show that your team is going to win!</p>
              </div>
            </div>
          }
          <div className='team-comparison'>
            <TeamPanel
              panel={ 1 }
              selectTeam={ this.selectTeam }
              selectedTeam={ teamPanel1Data.selectedTeam }
              colors={ teamPanel1Data.colors }
              lastFive={ teamPanel1Data.lastFive }
              teamStats={ teamPanel1Data.teamStats }/>
            <TeamPanel
              panel={ 2 }
              selectTeam={ this.selectTeam }
              selectedTeam={ teamPanel2Data.selectedTeam }
              colors={ teamPanel2Data.colors }
              lastFive={ teamPanel2Data.lastFive }
              teamStats={ teamPanel2Data.teamStats }/>
          </div>
          { !!(teamPanel1Data.selectedTeam && teamPanel2Data.selectedTeam) &&
            <div className='charts-and-trends-container'>
              <ShotComparisonChart
                teamPanel1Data={ teamPanel1Data }
                teamPanel2Data={ teamPanel2Data } />
              <HitComparisonChart
                teamPanel1Data={ teamPanel1Data }
                teamPanel2Data={ teamPanel2Data } />
              <TakeawayComparisonChart
                teamPanel1Data={ teamPanel1Data }
                teamPanel2Data={ teamPanel2Data } />
            </div>
          }
        </div>  
        <div className='credits-and-info-container'>
          Credits to the NHL and their stats API for the data used to construct the dashboards. Made with <span>🦈</span> by it me sj.
        </div>  
      </div>
    )
  }
}

export default App
