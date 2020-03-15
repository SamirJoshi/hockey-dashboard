import { teamMap } from '../constants/teams'

export const getPrimaryColor = (teamId: string): string => {
    const team = Object.values(teamMap).find(team => team.id.toString() === teamId.toString())
    if (!team) {
        return "#000000"
    }
    return team.primaryColor
}

export const getSecondaryColor = (teamId: string): string => {
    const team = Object.values(teamMap).find(team => team.id.toString() === teamId.toString())
    if (!team) {
        return "#000000"
    }
    return team.secondaryColor
}

export const getTertiaryColor = (teamId: string): string => {
    const team = Object.values(teamMap).find(team => team.id.toString() === teamId.toString())
    if (!team) {
        return "#000000"
    }
    return team.thirdColor
}

export const getTeamName = (teamId: string): string => {
    const team = Object.values(teamMap).find(team => team.id.toString() === teamId.toString())
    if (!team) {
        return ""
    }
    return team.name
}
