import { observeStore } from '../../state/store'

/**
 * This node adds a lowpass filter on the control frequency, effectively adding
 * a ramp/ slide effect when the notes change.
 */
export default class PortamentoNode extends AudioWorkletNode {
  time: AudioParam

  constructor(context: AudioContext) {
    super(context, 'portamento-processor')

    const time = this.parameters.get('time')

    if (time === undefined) {
      throw new Error('Incorrect parameters on custom processor')
    }

    this.time = time

    observeStore(
      state => state.portamento,
      portamento => {
        portamento *= 0.8
        portamento += 0.1
        const slope = 5000
        this.time.value = 1 - (Math.pow(slope + 1, 1 - portamento) - 1) / slope
      }
    )
  }
}
