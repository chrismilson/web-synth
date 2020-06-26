import { observeStore } from '../../state/store'
import VCO1Node from './VCO1Node'

export default class VCO2Node extends AudioWorkletNode {
  shape: AudioParam
  pitch: AudioParam
  scale: AudioParam
  frequency: AudioParam

  constructor(context: AudioContext, vco1: VCO1Node) {
    super(context, 'vco2-processor')
    vco1.connect(this)

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

    observeStore(
      state => state.vco2.waveShape,
      shape => {
        this.shape.value = shape
      }
    )
    observeStore(
      state => state.vco2.pitch,
      pitch => {
        this.pitch.value = pitch
      }
    )
    observeStore(
      state => state.vco2.scale,
      scale => {
        this.scale.value = scale
      }
    )
  }
}
