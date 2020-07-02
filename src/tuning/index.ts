import fiveLimit from './references/five-limit'

export class TwelveTone {
  private baseOctave: number[]

  constructor(fundamental: number, reference = fiveLimit) {
    // this.baseOctave = fiveLimitReference.map(ratio => ratio * fundamental)
    this.baseOctave = reference.map(ratio => ratio * fundamental)
  }

  getNote(note: number) {
    const key = ((note % 12) + 12) % 12
    const octave = Math.floor(note / 12)
    return this.baseOctave[key] * Math.pow(2, octave)
  }
}

export default TwelveTone
