import React, { FC, useState, useEffect } from "react";
import { Button, Dropdown, Transition } from "semantic-ui-react";
import { useLocation, useHistory } from "react-router";
import queryString from "query-string";

import { teamMap } from "../constants/teams";
import { ComparisonContainer } from "./ComparisonContainer";

export const generateOptions = () => {
  return Object.values(teamMap)
    .map(value => ({
      text: value.name,
      key: value.id,
      value: value.id
    }))
    .sort((team1, team2) => {
      if (team1.text < team2.text) {
        return -1;
      }
      if (team1.text > team2.text) {
        return 1;
      }

      return 0;
    });
};

export const ComparisonPage: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [dropdownValue1, setDropdownValue1] = useState("");
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const dropdownOptions = generateOptions();

  useEffect(() => {
    const { teamId1, teamId2 } = queryString.parse(location.search);
    if (teamId1 && teamId2) {
      if (
        typeof teamId1 !== "string" ||
        !dropdownOptions.find(option => option.value === Number(teamId1)) ||
        typeof teamId2 !== "string" ||
        !dropdownOptions.find(option => option.value === Number(teamId2))
      ) {
        history.push({ search: "" });
      } else {
        setDropdownValue1(teamId1);
        setDropdownValue2(teamId2);
        setShowComparison(true);
      }
    } else if (teamId1 || teamId2) {
      history.push({ search: "" });
    } else {
      setShowComparison(false);
    }
  }, [history, location.search, dropdownOptions]);

  const renderHomePage = () => (
    <div className="comparison-page">
      <div className="comparison-page-home-content">
        <div className="header">Compare Hockey Teams Head to Head</div>
        <div className="sub-header">
          Choose two teams to see how they compare
        </div>
        <div className="action-container">
          <Dropdown
            className="select-team-action"
            placeholder="Select a team"
            selection
            options={dropdownOptions}
            onChange={(_, { value }) => setDropdownValue1(value as string)}
            value={dropdownValue1 ? Number(dropdownValue1) : ""}
          />
          <Dropdown
            placeholder="Select a team"
            className="select-team-action"
            selection
            options={dropdownOptions}
            onChange={(_, { value }) => setDropdownValue2(value as string)}
          />
          <Button
            primary
            className="select-team-action"
            onClick={() => {
              history.push({
                search: `?teamId1=${dropdownValue1}&teamId2=${dropdownValue2}`
              });
            }}
            disabled={!dropdownValue1 || !dropdownValue2}
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  );

  if (showComparison) {
    return (
      <Transition animation={"browse"} duration={500}>
        <ComparisonContainer
          teamId1={dropdownValue1}
          teamId2={dropdownValue2}
        />
      </Transition>
    );
  }

  return (
    <Transition animation={"browse"} duration={500}>
      {renderHomePage()}
    </Transition>
  );
};
