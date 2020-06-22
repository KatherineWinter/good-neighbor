export function completionDateInfo(userData, step) {
  const finishedStep = userData?.find((finished) => finished.id === step?.id)
  const completionDate = finishedStep
    ? new Date(finishedStep?.completionDate)
    : undefined
  return {
    isDateValid: !isNaN(completionDate),
    date: completionDate,
  }
}
