import React, { Component } from 'react';
import './App.css';
import teams from './constants/teams'
import Select from 'react-select'

class TeamSelectDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdown = () => this.setState({ dropdownOpen: !this.state.dropdownOpen })

  getDropdownTitle = () => this.props.selectedTeam && 
    ({ label: teams[this.props.selectedTeam].name, value: this.props.selectedTeam })

  generateOptions = () => Object.keys(teams).map(teamKey => ({
    label: teams[teamKey].name,
    value: teamKey
  }))

  render() {
    return (
      <Select
        className='team-select-dropdown'
        value={ this.getDropdownTitle() }
        onChange={ ({ value }) => this.props.selectTeam(value, this.props.panel) }
        options={ this.generateOptions() } />
    )
  }
}

export default TeamSelectDropdown