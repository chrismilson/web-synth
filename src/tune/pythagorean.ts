import TwelveTone from './twelve-tone'

/**
 * Returns the value of the fration a^n / b^m. It is used in calculating the
 * ratio of certain notes in the pythagorean tuning.
 *
 * @param a The base of the numerator
 * @param b The base of the denominator
 * @param n The exponent on the numerator
 * @param m The exponent on the denominator
 */
const ratio = (a: number, b: number, n: number, m: number) => {
  return Math.pow(a, n) / Math.pow(b, m)
}

/**
 * From [the wilipedia
 * article](https://en.wikipedia.org/wiki/Pythagorean_tuning):
 *
 * > Between the enharmonic notes at both ends of this sequence is a pitch ratio
 * > of 312 / 219 = 531441 / 524288, or about 23 cents, known as the Pythagorean
 * > comma. To produce a twelve-tone scale, one of them is arbitrarily
 * > discarded.
 */
const discardGFlat = true

const base = [
  1, // C
  ratio(2, 3, 8, 5), // Db
  ratio(3, 2, 2, 3), // D
  ratio(2, 3, 5, 3), // Eb
  ratio(3, 2, 4, 6), // E
  ratio(2, 3, 2, 1), // F
  discardGFlat ? ratio(3, 2, 6, 9) : ratio(2, 3, 10, 6), // F# or Gb
  ratio(3, 2, 1, 1), // G
  ratio(2, 3, 7, 4), // Ab
  ratio(3, 2, 3, 4), // A
  ratio(2, 3, 4, 2), // Bb
  ratio(3, 2, 5, 7) // B
]

const moo = [...base].sort()

console.log(base)

/**
 * Returns the frequencies of a single octave
 *
 * @param fundamental The frequency in hertz of the fundamental pitch.
 */
const getNotes = (fundamental: number): TwelveTone => {
  return new TwelveTone(base.map(ratio => ratio * fundamental))
}

export default getNotes
