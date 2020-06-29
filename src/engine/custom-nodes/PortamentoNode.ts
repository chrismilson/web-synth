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
        this.frequency.value = Math.pow(1 - portamento, 2) * 25 + 1.5
      }
    )
  }
}
