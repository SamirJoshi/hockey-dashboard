export const getRankingsSuffix = (rank) => {
  if ([11, 12, 13].includes(rank)) {
    return 'th'
  } 
  
  const remainder = rank % 10
  if (remainder === 1) {
    return 'st'
  } else if (remainder === 2) {
    return 'nd'
  } else if (remainder === 3) {
    return 'rd'
  } else {
    return 'th'
  }
}