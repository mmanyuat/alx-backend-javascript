/**
 * Function to divide numerator by denominator.
 * If the denominator is zero, it throws an error.
 *
 * @param {Number} numerator - The numerator value.
 * @param {Number} denominator - The denominator value.
 * @returns {Number} - The result of division.
 * @throws {Error} - If denominator is 0, it throws 'cannot divide by 0'.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
