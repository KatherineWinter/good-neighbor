import { isStepComplete } from './is-step-complete'

export function meritScore(merit, userData) {
  let score = 0
  merit.steps.forEach((step, index) => {
    if (isStepComplete(step, userData)) {
      score += (index + 1) * 100
    }
  })
  return score
}
