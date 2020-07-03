import { observeStore } from '../../state/store'
import { Selectors } from './common'
import { VCO1WaveShape } from '../../state/types/state'

export default class VCO1Node extends AudioWorkletNode {
  shape: AudioParam
  pulseWidth: AudioParam
  scale: AudioParam
  frequency: AudioParam

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      waveShape: VCO1WaveShape
      pulseWidth: number
      scale: number
    }> = {
      waveShape: state => state.vco1.waveShape,
      pulseWidth: state => state.vco1.pulseWidth,
      scale: state => state.vco1.scale
    }
  ) {
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
    observeStore(selectors.waveShape, shape => {
      this.shape.value = shape
    })
    observeStore(selectors.pulseWidth, pulseWidth => {
      this.pulseWidth.value = pulseWidth
    })
    observeStore(selectors.scale, scale => {
      this.scale.value = scale
    })
  }
}
