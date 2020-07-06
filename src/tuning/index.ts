import fiveLimit from './references/five-limit'

export enum Key {
  A = 0,
  A_SHARP = 1,
  B_FLAT = 1,
  B = 2,
  C = 3,
  C_SHARP = 4,
  D_FLAT = 4,
  D = 5,
  D_SHARP = 6,
  E_FLAT = 6,
  E = 7,
  F = 8,
  F_SHARP = 9,
  G_FLAT = 9,
  G = 10,
  G_SHARP = 11,
  A_FLAT = 11
}

export class TwelveTone {
  private baseOctave: number[]
  private key: Key

  constructor(fundamental: number, reference = fiveLimit, key = Key.A) {
    this.key = key
    this.baseOctave = reference.map(ratio => ratio * fundamental)
  }

  getNote(note: number) {
    note -= this.key
    const key = ((note % 12) + 12) % 12
    const octave = Math.floor(note / 12)
    return this.baseOctave[key] * Math.pow(2, octave - 6)
  }
}

export default TwelveTone
