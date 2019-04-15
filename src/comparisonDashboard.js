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
const queryString = require('query-string');
const Spinner = require('react-spinkit');

class ComparisonDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamPanel1Data: {},
      teamPanel2Data: {},
      isLoading: false
    }
  }

  async componentDidMount() {
    const { location } = this.props
    const parsedSearch = queryString.parse(location.search)
    this.selectTeamsFromSearch(parsedSearch)
  }

  async componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location.search !== prevProps.location.search) {
      const parsedSearch = queryString.parse(location.search)
      await this.selectTeamsFromSearch(parsedSearch)
    }
  }

  selectTeamsFromSearch = async (parsedSearch) => {
    const searchKeys = Object.keys(parsedSearch)
    const teamKeys = Object.keys(teams)
    const selectTeamPromises = []

    if (searchKeys.includes('team1') || searchKeys.includes('team2')) {
      this.setState({ isLoading: true })
    }

    if (searchKeys.includes('team1') && teamKeys.includes(parsedSearch.team1)) {
      selectTeamPromises.push(this.selectTeam(parsedSearch.team1, 1))
    }
    if (searchKeys.includes('team2') && teamKeys.includes(parsedSearch.team2)) {
      selectTeamPromises.push(this.selectTeam(parsedSearch.team2, 2))
    }

    await Promise.all(selectTeamPromises)
    this.setState({ isLoading: false })
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

  renderChartsAndTrends = () => {
    const { teamPanel1Data, teamPanel2Data } = this.state
    return (
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
    )
  }

  renderWelcomeHeader = () => (
    <div className='welcome-header-container'>
      <div className='welcome-header'>
        <h1>HOCKEY DASHBOARDS</h1>
        <p>Choose two teams to see how they compare. Show that your team is going to win!</p>
      </div>
    </div>
  )

  renderLoadingHeader = () => (
    <div className='welcome-header-container'>
      <div className='welcome-header'>
        <h1>Loading ...</h1>
        <Spinner
          name='line-scale-pulse-out'
          fadeIn='none' />
      </div>
    </div>
  )

  render() {
    const { isLoading, teamPanel1Data, teamPanel2Data } = this.state
    const backgroundImagePath = 'https://samirjoshi.github.io/hockey-dashboard/background2.jpg'

    return (
      <div className="App" style={{
        marginBottom: 0,
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: 'cover'
      }} >
        { !isLoading && !(teamPanel1Data.selectedTeam || teamPanel2Data.selectedTeam) &&
          this.renderWelcomeHeader()
        }
        {
          isLoading &&
          this.renderLoadingHeader()
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
          this.renderChartsAndTrends()
        }
      </div>  
    )
  }
}

export default ComparisonDashboard
