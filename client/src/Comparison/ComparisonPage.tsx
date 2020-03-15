import React, { FC, useState } from 'react'
import { Button, Dropdown, Transition } from "semantic-ui-react"

import { teamMap } from "../constants/teams"
import { ComparisonContainer } from './ComparisonContainer'

export const generateOptions = () => {
  return Object.values(teamMap).map(value => ({
    text: value.name,
    key: value.id,
    value: value.id
  })).sort((team1, team2) => {
    if (team1.text < team2.text) {
      return -1
    }
    if (team1.text > team2.text) {
      return 1
    }

    return 0
  })

}

export const ComparisonPage: FC = () => {
  const [dropdownValue1, setDropdownValue1] = useState('')
  const [dropdownValue2, setDropdownValue2] = useState('')
  const [showComparison, setShowComparison] = useState(false)

  const renderHomePage = () => (
    <div className="comparison-page">
      <div className="comparison-page-home-content">
        <div className="header">Compare Hockey Teams Head to Head</div>
        <div className="sub-header">Choose two teams to see how they compare</div>
        <div className="action-container">
          <Dropdown
            className="select-team-action"
            placeholder="Select a team"
            selection
            options={ generateOptions() } 
            onChange={ (_, { value }) => setDropdownValue1(value as string) }
          />
          <Dropdown
            placeholder="Select a team"
            className="select-team-action"
            selection
            options={ generateOptions() } 
            onChange={ (_, { value }) => setDropdownValue2(value as string) }
          />
          <Button
            primary
            className="select-team-action"
            onClick={ () => { setShowComparison(true) } }
            disabled={ !dropdownValue1 || !dropdownValue2 }
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  )

  if (showComparison) {
    return (
      <Transition animation={ "browse" } duration={ 500 }>
        <ComparisonContainer teamId1={dropdownValue1} teamId2={dropdownValue2} />
      </Transition>
    )
  }

  return (
    <Transition animation={ "browse" } duration={ 500 }>
      { renderHomePage() }
    </Transition>
  )
}