import React, { FC, useState, useEffect } from 'react'
import { Button, Dropdown, Segment } from "semantic-ui-react"
import { useLocation, useHistory } from 'react-router'
import queryString from 'query-string'

import { generateOptions } from '../Comparison/ComparisonPage'
import { TeamContainer } from './TeamContainer'

export const TeamPage: FC = () => {
  const location = useLocation()
  const history = useHistory()
  const dropdownOptions = generateOptions()
  const [dropdownValue, setDropdownValue] = useState('')
  const [showTeamData, setShowTeamData] = useState(false)

  useEffect(() => {
    const { teamId } = queryString.parse(location.search)
    if (teamId) {
      if (typeof teamId !== 'string' || !dropdownOptions.find(option => option.value === Number(teamId))) {
        history.push({ search: '' })
      } else {
        setDropdownValue(teamId)
        setShowTeamData(true)
      }
    } else {
      setShowTeamData(false)
    }
  }, [history, location.search, dropdownOptions, dropdownValue])

  if (showTeamData) {
    return (
      <TeamContainer teamId={dropdownValue} />
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
            options={dropdownOptions}
            onChange={(_, { value }) => setDropdownValue(value as string)}
          />
          <Button
            primary
            className="select-team-action"
            onClick={() => { history.push({ search: `?teamId=${dropdownValue}`}) }}
            disabled={!dropdownValue}
          >
            Go
          </Button>
        </div>
      </div>
    </Segment>
  )
}