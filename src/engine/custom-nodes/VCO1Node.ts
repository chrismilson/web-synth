import { observeStore } from '../../state/store'

export default class VCO1Node extends AudioWorkletNode {
  shape: AudioParam
  pulseWidth: AudioParam
  scale: AudioParam
  frequency: AudioParam

  constructor(context: AudioContext) {
    super(context, 'vco1-processor')

    const shape = this.parameters.get('shape')
    const pulseWidth = this.parameters.get('pulseWidth')
    const scale = this.parameters.get('scale')
    const frequency = this.parameters.get('frequency')

    if (
      shape === undefined ||
      pulseWidth === undefined ||
      scale === undefined ||
      frequency === undefined
    ) {
      throw new Error('Incorrect parameters on custom processor')
    }

    this.shape = shape
    this.pulseWidth = pulseWidth
    this.scale = scale
    this.frequency = frequency

    // observe the state for changes in the values
    observeStore(
      state => state.vco1.waveShape,
      shape => {
        this.shape.value = shape
      }
    )
    observeStore(
      state => state.vco1.pulseWidth,
      pulseWidth => {
        this.pulseWidth.value = pulseWidth
      }
    )
    observeStore(
      state => state.vco1.scale,
      scale => {
        this.scale.value = scale
      }
    )
  }
}
