import React, { FC, useState } from 'react'
import { Button, Dropdown, Segment } from "semantic-ui-react"

import { generateOptions } from '../Comparison/ComparisonPage'
import { TeamContainer } from './TeamContainer'

export const TeamPage: FC = () => {
  const [dropdownValue, setDropdownValue] = useState('')
  const [showTeamData, setShowTeamData] = useState(false)

  if (showTeamData) {
    return (
      <TeamContainer teamId={ dropdownValue } />
    )
  }

  return (
    <Segment className="team-page">
      <div className="team-page-home-content">
        <div className="header">
          Select a team
        </div>
        <div className="action-container">
          <Dropdown
            className="select-team-action"
            placeholder="Select a team"
            selection
            options={ generateOptions() } 
            onChange={ (_, { value }) => setDropdownValue(value as string) }
          />
          <Button
            primary
            className="select-team-action"
            onClick={ () => { setShowTeamData(true) } }
            disabled={ !dropdownValue }
          >
            Go
          </Button>
        </div>
      </div>
    </Segment>
  )
}