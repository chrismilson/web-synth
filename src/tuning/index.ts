import fiveLimit from './references/five-limit'

export enum Key {
  A = -3,
  A_SHARP = -2,
  B_FLAT = -2,
  B = -1,
  C = 0,
  C_SHARP = 1,
  D_FLAT = 1,
  D = 2,
  D_SHARP = 3,
  E_FLAT = 3,
  E = 4,
  F = 5,
  F_SHARP = 6,
  G_FLAT = 6,
  G = 7,
  G_SHARP = 8,
  A_FLAT = 8
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
