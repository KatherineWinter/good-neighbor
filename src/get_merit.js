export async function getMeritBadges() {
  try {
    const meritBadgetsResult = await fetch(
      'https://www.scoutbook.com/mobile/references/boy-scouting/merit-badges/swimming-merit-badge-requirements.asp'
    )
    console.log(meritBadgetsResult)
  } catch (error) {
    console.error(error)
  }
}
