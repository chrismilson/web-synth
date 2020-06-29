import { observeStore } from '../../state/store'

export default class FrequencyModulatorNode extends GainNode {
  modulationGenerator: GainNode
  envelopeGenerator: GainNode

  constructor(context: AudioContext) {
    super(context)

    this.modulationGenerator = context.createGain()
    this.envelopeGenerator = context.createGain()

    this.modulationGenerator.connect(this)
    this.envelopeGenerator.connect(this)

    observeStore(
      state => state.frequencyModulator.modulationGenerator,
      level => {
        this.modulationGenerator.gain.value = Math.pow(500, level) - 1
      }
    )

    observeStore(
      state => state.frequencyModulator.envelopeGenerator,
      level => {
        this.envelopeGenerator.gain.value = Math.pow(500, level) - 1
      }
    )
  }
}
