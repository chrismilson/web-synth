import { observeStore } from '../../state/store'
import { Selectors } from './common'
import { VCO2WaveShape } from '../../state/types/state'

export default class VCO2Node extends AudioWorkletNode {
  shape: AudioParam
  pitch: AudioParam
  scale: AudioParam
  frequency: AudioParam

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      waveShape: VCO2WaveShape
      pitch: number
      scale: number
    }> = {
      waveShape: state => state.vco2.waveShape,
      pitch: state => state.vco2.pitch,
      scale: state => state.vco2.scale
    }
  ) {
    super(context, 'vco2-processor')

    const shape = this.parameters.get('shape')
    const pitch = this.parameters.get('pitch')
    const scale = this.parameters.get('scale')
    const frequency = this.parameters.get('frequency')

    if (
      shape === undefined ||
      pitch === undefined ||
      scale === undefined ||
      frequency === undefined
    ) {
      throw new Error('Incorrect parameters on custom processor')
    }

    this.shape = shape
    this.pitch = pitch
    this.scale = scale
    this.frequency = frequency

    observeStore(selectors.waveShape, shape => {
      this.shape.value = shape
    })
    observeStore(selectors.pitch, pitch => {
      this.pitch.value = pitch
    })
    observeStore(selectors.scale, scale => {
      this.scale.value = scale
    })
  }
}
