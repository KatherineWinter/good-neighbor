export function randomTransform(seed) {
  const seedRandom = new Math.seedrandom(seed)
  const positive = Math.floor(Math.random() * 2) === 1 ? 1 : -1
  const rotate = Math.floor(seedRandom() * 25) * positive
  const x = Math.floor(seedRandom() * 10)
  const y = Math.floor(seedRandom() * 10)
  return `rotate(${rotate}deg) translateX(${x}px) translateY(${y}px)`
}
