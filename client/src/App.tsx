import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom'

import { ComparisonPage } from './Comparison/ComparisonPage'
import { TeamPage } from './Team/TeamPage'
import { RankingPage } from './Ranking/RankingPage'

function App() {
  const [showBurgerMenu, setShowBurgerMenu] = useState()
  return (
    <section className="hero is-fullheight has-background-white-ter">
      <Router basename='/hockey-dashboard'>
        <div className="hero-head">
          <div className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <div
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                onClick={ () => { setShowBurgerMenu(!showBurgerMenu) }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            </div>
            <div className={ `navbar-menu ${ showBurgerMenu ?  "is-active" : "" } ` }>
              <div className="navbar-start">
                <NavLink
                  to="/comparison"
                  className="navbar-item"
                  activeClassName="has-text-black has-text-weight-medium"
                  onClick={ () => { setShowBurgerMenu(false) } }
                >
                  Head to Head
                </NavLink>
                <NavLink
                  to="/teams"
                  className="navbar-item"
                  activeClassName="has-text-black has-text-weight-medium"
                  onClick={ () => { setShowBurgerMenu(false) } }
                >
                  Teams
                </NavLink>
                <NavLink
                  to="/rankings"
                  className="navbar-item"
                  activeClassName="has-text-black has-text-weight-medium"
                >
                  Rankings
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-body">
            <Switch>
              <Route path='/comparison' component={ ComparisonPage } />
              <Route path='/teams' component={ TeamPage } />
              <Route path='/rankings' component={ RankingPage } />
              <Redirect from='/' to='/comparison' />
            </Switch>
        </div>
        <div className="hero-foot has-text-dark has-text-centered">
          <div>
            Credits to the NHL and their stats API for the data used to construct the dashboards. <br />
            Credits to <a href='https://teamcolorcodes.com/nhl-team-color-codes/'>Team Color Codes</a> for collecting the team colors that were used on this site. <br />
            See the full project on <a href='https://github.com/SamirJoshi/hockey-dashboard'>Github</a>
          </div>
        </div>
      </Router>
    </section>
  )
}
  

export default App
