import { meritScore } from './merit-score'

export function getUserScore(merits, userData) {
  if (!merits) return 0
  let score = 0
  merits.forEach((merit) => {
    score += meritScore(merit, userData)
  })

  return score
}
