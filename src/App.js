import React, { Component } from 'react'
import {
  BrowserRouter as Router,
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
            <Route path='/comparisons' component={ ComparisonDashboard } />
            <Route path='/team' component={ TeamDashboard } />
            <Redirect to='/comparisons' />
          </Switch>
        </Router>
        <div className='credits-and-info-container'>
          Credits to the NHL and their stats API for the data used to construct the dashboards. Made with <span role='img' aria-label='shark'>🦈</span> by it me sj.
        </div>  
      </div>
    )
  }
}

export default App
