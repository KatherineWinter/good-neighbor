export function isStepComplete(step, finishedList) {
  if (!finishedList) return false

  const finishedStep = finishedList.find((finished) => finished.id === step.id)
  return !isNaN(new Date(finishedStep?.completionDate))
}
