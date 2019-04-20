import React, { Component } from 'react'
import './teamDashboard.css'
import teams from './constants/teams'
import { getTeamColors } from './utils/colorUtil'
import { fetchPreviousFiveGames } from './utils/apiUtil'
import TrendComparisonChart from './charts/trendComparisonChart';
import RankingsChart from './charts/rankingsChart';

const axios = require('axios')
const queryString = require('query-string');
const Spinner = require('react-spinkit');

class TeamDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamData: null,
      isLoading: false
    }
  }

  async componentDidMount() {
    const { location } = this.props
    const parsedSearch = queryString.parse(location.search)
    this.selectTeamFromSearch(parsedSearch)
  }

  async componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location.search !== prevProps.location.search) {
      const parsedSearch = queryString.parse(location.search)
      await this.selectTeamFromSearch(parsedSearch)
    }
  }

  selectTeamFromSearch = async (parsedSearch) => {
    const searchKeys = Object.keys(parsedSearch)
    const teamKeys = Object.keys(teams)

    if (searchKeys.includes('team')){
      this.setState({ isLoading: true })
      if (teamKeys.includes(parsedSearch.team)) {
        await this.selectTeam(parsedSearch.team)
      }
    }

    this.setState({ isLoading: false })
  }

  selectTeam = async (teamKey) => {
    try {
      const teamId = teams[teamKey].id
      const response = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${teamId}?expand=team.stats`)
      const teamResponse = response.data.teams[0]
      const stats = teamResponse.teamStats[0].splits
      const lastFive = await fetchPreviousFiveGames(teamId)
      this.setState({
        teamData: {
          selectedTeam: teamKey,
          colors: getTeamColors(teamKey),
          teamStats: {
            stats: stats[0],
            rankings: stats[1]
          },
          venue: teamResponse.venue.name,
          city: teamResponse.venue.city,
          division: teamResponse.division.name,
          conference: teamResponse.conference.name,
          firstYear: teamResponse.firstYearOfPlay,
          lastFive
        } 
      })
    } catch (error) {
      this.setState({ teamData: { selectedTeam: null } })
    }
  }

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

  generateBlurb = () => {
    const { selectedTeam, city, venue, firstYear } = this.state.teamData
    const name = teams[selectedTeam].name

    let blurb = `The ${name} have been playing since ${firstYear}. `
    blurb += `They are located in ${city} and currently play in ${venue}.`

    return blurb
  }

  renderTeamHeader = () => {
    const { selectedTeam, division, conference } = this.state.teamData
    return (
      <div
        className='team-info-pane-container'
        style={{ backgroundColor: teams[selectedTeam].primaryColor }}>
        <div className='team-info-pane'>
          <div className='team-title'>
            { teams[selectedTeam].name }
          </div>
          <div className='team-info-component'>
            { this.generateBlurb() }
          </div>
          <div className='team-info-component'>
            Division: { division }
          </div>
          <div className='team-info-component'>
            Conference: { conference }
          </div>
        </div>
      </div>
    )
  }

  renderComparisonStat = (name, statKey) => {
    const { teamData } = this.state
    const teamColors = {
      teamOneColor: teamData.colors.primaryColor,
      teamTwoColor: '#000000'
    }

    return (
      <div className='comparison-chart-container'>
        <TrendComparisonChart
          name={ name }
          statKey={ statKey}
          teamPanel1Data={ teamData }
          teamPanel2Data={ { lastFive: [] } }
          teamColors={ teamColors }
          isTeam />
      </div>
    )
  }

  renderRankingsChart = () => {
    const { teamStats, colors } = this.state.teamData
    return (
      <div className='team-rankings'>
        <h5>Rankings</h5>
        <RankingsChart  
          data={ teamStats.rankings.stat }
          colors={ colors }/>
      </div>
    )
  }

  renderTeamDashboard = () => (
    <div className='team-dashboard'>
      { this.renderTeamHeader() }
      { this.renderRankingsChart() }
      { this.renderComparisonStat('Goals', 'goals') }
      { this.renderComparisonStat('Shots', 'shots') }
      { this.renderComparisonStat('Hits', 'hits') }
      { this.renderComparisonStat('Takeaways', 'takeaways') }
    </div>
  )

  render() {
    const { isLoading, teamData } = this.state
    const backgroundImagePath = 'https://samirjoshi.github.io/hockey-dashboard/background2.jpg'

    return (
      <div className="App" style={{
        marginBottom: 0,
        backgroundImage: `url(${backgroundImagePath})`,
        backgroundSize: 'cover'
      }} >
        { isLoading &&
          this.renderLoadingHeader()
        }
        {
          !!(teamData && teamData.selectedTeam) &&
          this.renderTeamDashboard()
        }
      </div>  
    )
  }
}

export default TeamDashboard
