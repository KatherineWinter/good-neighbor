export function completionDateInfo(userData, step) {
  const finishedStep = userData?.find((finished) => finished.id === step?.id)
  const completionDate = finishedStep ? new Date(finishedStep?.completionDate) : null
  return {
    isDateValid: !isNaN(completionDate),
    date: completionDate,
  }
}
