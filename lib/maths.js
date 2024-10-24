function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max))
}

function mapRange(in_min, in_max, input, out_min, out_max) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
}

function truncate(value, decimals) {
  return parseFloat(value.toFixed(decimals))
}

function isEmptyArray(arr) {
  if (!arr) return true

  return Array.isArray(arr) && arr.length === 0
}

function adjustArrayLength(arr = [], length = 12, override = 100) {
  if (arr.length === override) return arr
  if (isEmptyArray(arr)) return []

  return Array.from({ length }, (_, i) => arr[i % arr.length])
}

const Maths = { lerp, clamp, mapRange, truncate, adjustArrayLength }

export { lerp, clamp, mapRange, truncate, adjustArrayLength }
export default Maths
