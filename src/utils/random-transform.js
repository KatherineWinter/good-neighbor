export function randomTransform(seed) {
  const seedRandom = new Math.seedrandom(seed)
  const positive = Math.floor(Math.random() * 2) === 1 ? 1 : -1
  const rotate = Math.floor(seedRandom() * 35) * positive
  const x = Math.floor(seedRandom() * 20)
  const y = Math.floor(seedRandom() * 20)
  return `rotate(${rotate}deg) translateX(${x}px) translateY(${y}px)`
}
