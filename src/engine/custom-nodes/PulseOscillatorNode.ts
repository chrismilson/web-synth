import { ParamaterError } from './common'

export default class PulseOscillatorNode extends AudioWorkletNode {
  pulseWidth: AudioParam
  frequency: AudioParam

  constructor(context: AudioContext) {
    super(context, 'pulse-processor')

    const pulseWidth = this.parameters.get('pulseWidth')
    const frequency = this.parameters.get('frequency')

    if (pulseWidth === undefined || frequency === undefined) {
      throw new ParamaterError()
    }

    this.pulseWidth = pulseWidth
    this.frequency = frequency
  }
}
