export default class TwelveTone {
  private baseOctave: number[]

  constructor(baseOctave: number[]) {
    this.baseOctave = baseOctave
  }

  getNote(note: number) {
    return this.baseOctave[note % 12] * Math.pow(2, Math.floor(note / 12))
  }
}
