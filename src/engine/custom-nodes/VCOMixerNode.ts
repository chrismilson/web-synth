import VCO1Node from './VCO1Node'
import VCO2Node from './VCO2Node'
import { observeStore } from '../../state/store'

export default class VCOMixerNode extends GainNode {
  vco1in: GainNode
  vco2in: GainNode

  constructor(context: AudioContext, vco1: VCO1Node, vco2: VCO2Node) {
    super(context)
    this.vco1in = context.createGain()
    this.vco2in = context.createGain()

    vco1.connect(this.vco1in).connect(this)
    vco2.connect(this.vco2in).connect(this)

    observeStore(
      state => state.vcoMixer.vco1Level,
      level => {
        this.vco1in.gain.value = level
      }
    )

    observeStore(
      state => state.vcoMixer.vco2Level,
      level => {
        this.vco2in.gain.value = level
      }
    )
  }
}
