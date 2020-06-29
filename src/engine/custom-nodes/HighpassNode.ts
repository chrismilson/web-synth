import { observeStore } from '../../state/store'

export default class HighpassNode extends BiquadFilterNode {
  constructor(context: AudioContext) {
    super(context)

    this.type = 'highpass'

    observeStore(
      state => state.highpass.cutoff,
      cutoff => {
        const min = 100
        const max = 15000

        // a logarithmic curve
        this.frequency.value =
          Math.pow(max - min + 1, 1 - (1 - cutoff) * (1 - cutoff)) + min - 1
      }
    )

    observeStore(
      state => state.highpass.peak,
      peak => {
        const min = 0
        const max = 40

        this.Q.value = Math.pow(max - min + 1, peak) + min - 1
      }
    )
  }
}
