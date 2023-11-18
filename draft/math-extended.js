// The following API calls are missing in the standard library

// Math.isEven()
Math.isEven = function(n) {
  if (n % 1 !== 0) {
    return null // return null for floats
  } else {
    return (n & 1) === 0
  }
}
console.log(Math.isEven(2))

// Math.isOdd()
Math.isOdd = function(n) {
  if (n % 1 !== 0) {
    return null // return null for floats
  } else {
    return (n & 1) !== 0
  }
}
console.log(Math.isOdd(1))

// includes both edge values
Math.randomBetween = function (a, b) {
  return this.floor(this.random() * (b - a + 1) + a)
}
console.log(Math.randomBetween(1, 2))


/**
 * Clamps value and returns a value not less than lower and not more than upper.
 *
 * @private
 * @param {number} num The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
Math.clamp = function(num, lower, upper) {
  if (num === num) {
    if (upper !== undefined) {
      num = num <= upper ? num : upper
    }
    if (lower !== undefined) {
      num = num >= lower ? num : lower
    }
  }
  return num
}
console.log(Math.clamp(500, 245, 1024))
