import { observeStore } from '../../state/store'

export default class VCOMixerNode extends GainNode {
  vco1in: GainNode
  vco2in: GainNode

  constructor(context: AudioContext) {
    super(context)
    this.vco1in = context.createGain()
    this.vco2in = context.createGain()

    this.vco1in.connect(this)
    this.vco2in.connect(this)

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
