function perimeterSequence (a, n) {
  if (a === n) return a

  const value = 4 * a

  return perimeterSequence(value, n)
}

console.log(perimeterSequence(1, 3))
