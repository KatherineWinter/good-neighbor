import { completionDateInfo } from './completion-date-info'

export function findIncompleteStep(userData, steps) {
  let initActiveIndex = null
  for (let index = 0; index < steps.length; ++index) {
    const completeInfo = completionDateInfo(userData, steps[index])
    if (!completeInfo.isDateValid) {
      initActiveIndex = index
      break
    }
  }

  return initActiveIndex
}
