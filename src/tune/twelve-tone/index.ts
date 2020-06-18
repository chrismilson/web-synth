import reference from './references/five-limit'

export class TwelveTone {
  private baseOctave: number[]

  constructor(fundamental: number) {
    // this.baseOctave = fiveLimitReference.map(ratio => ratio * fundamental)
    this.baseOctave = reference.map(ratio => ratio * fundamental)
  }

  getNote(note: number) {
    return this.baseOctave[note % 12] * Math.pow(2, Math.floor(note / 12))
  }
}

export default TwelveTone
