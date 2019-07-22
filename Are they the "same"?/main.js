function comp(array1, array2) {
  if (!array1 || !array2) return false

  const a1 = [...array1].sort((a, b) => a - b)
  const a2 = [...array2].sort((a, b) => a - b)
  const a1Squared = a1.map(num => Math.pow(num, 2))

  return JSON.stringify(a1Squared) === JSON.stringify(a2)
}

module.exports = comp
