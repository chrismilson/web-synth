import { Selectors } from './common'
import VolumeNode from './VolumeNode'

export default class VCOMixerNode extends GainNode {
  vco1in: GainNode
  vco2in: GainNode

  constructor(
    context: AudioContext,
    selectors: Selectors<{ vco1Level: number; vco2Level: number }> = {
      vco1Level: state => state.vcoMixer.vco1Level,
      vco2Level: state => state.vcoMixer.vco2Level
    }
  ) {
    super(context)
    this.vco1in = new VolumeNode(context, { volume: selectors.vco1Level })
    this.vco2in = new VolumeNode(context, { volume: selectors.vco2Level })

    this.vco1in.connect(this)
    this.vco2in.connect(this)
  }
}
