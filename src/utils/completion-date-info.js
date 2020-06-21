export function completionDateInfo(userData, step) {
  const finishedStep = userData?.find((finished) => finished.id === step.id)
  const completionDate = new Date(finishedStep?.completionDate)
  return {
    isDateValid: !isNaN(completionDate),
    date: completionDate,
  }
}