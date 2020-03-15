export interface TeamData {
  id: string
  info: {
    firstYearOfPlay: string
    venue: string
    city: string
    division: string
    conference: string
  }
  points: number
  record: {
    wins: number
    losses: number
    otl: number
  }
  rankings: {
    goalsFor: number
    goalsAgainst: number
    powerPlay: number
    penaltyKill: number
    faceoffPerc: number
  }
}

export type LastFive = {
  goals: number
  pim: number
  shots: number
  powerPlayPercentage: number
  powerPlayGoals: number
  faceOffWinPercentage: number
  blocked: number
  takeaways: number
  giveaways: number
  hits: number
}[]