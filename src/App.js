import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import ComparisonDashboard from './comparisonDashboard'
import TeamDashboard from './teamDashboard'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/comparison' component={ ComparisonDashboard } />
            <Route path='/team' component={ TeamDashboard } />
            <Redirect from='/' to='/comparison' />
          </Switch>
        </Router>
        <div className='credits-and-info-container'>
          Credits to the NHL and their stats API for the data used to construct the dashboards.
          Credits to https://teamcolorcodes.com/nhl-team-color-codes/ for collecting the team colors that were used on this site.
          Made with <span role='img' aria-label='shark'>🦈</span> by it me sj.
        </div>  
      </div>
    )
  }
}

export default App
