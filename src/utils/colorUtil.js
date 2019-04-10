import teams from '../constants/teams'

export const getTeamColors = (teamKey) => {
  const colors = {
    primaryColor: '#000',
    secondaryColor: '#000',
    tertiaryColor: '#000',
    fourthColor: '#000'
  }

  if (teamKey) {
    colors.primaryColor = teams[teamKey].primaryColor
    colors.secondaryColor = teams[teamKey].secondaryColor || '#000'
    colors.tertiaryColor = teams[teamKey].thirdColor || '#000'
  }

  return colors
}