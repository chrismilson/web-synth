import { observeStore } from '../../state/store'

/**
 * This node adds a lowpass filter on the control frequency, effectively adding
 * a ramp/ slide effect when the notes change.
 */
export default class PortamentoNode extends BiquadFilterNode {
  constructor(context: AudioContext) {
    super(context)

    this.type = 'lowpass'
    // we want no resonance, because otherwise the frequency value will
    // overshoot.
    this.Q.value = -12

    observeStore(
      state => state.portamento,
      portamento => {
        const min = 1.5
        const max = 25

        // a logarithmic response to the portamento value
        this.frequency.value = Math.pow(max - min + 1, 1 - portamento) + min - 1
      }
    )
  }
}
