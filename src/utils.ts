/**
 * Checks if the given value is a valid number.
 * @param number | string - The value to be checked.
 * @returns Returns `true` if the value is a valid number, otherwise `false`.
 */
export function checkNumber(number: number | string) {
  return Number.isNaN(Number(number))
}
