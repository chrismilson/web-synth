import { observeStore } from '../../state/store'
import { Selectors } from './common'

export default class FrequencyModulatorNode extends GainNode {
  modulationGenerator: GainNode
  envelopeGenerator: GainNode

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      modulationGenerator: number
      envelopeGenerator: number
    }> = {
      modulationGenerator: state =>
        state.frequencyModulator.modulationGenerator,
      envelopeGenerator: state => state.frequencyModulator.envelopeGenerator
    }
  ) {
    super(context)
    this.gain.value = 0

    // the envelope in will be in the range 0 to 1, we want to change it so that
    // it is in the range 0 to level where level is the setting for EG.
    this.envelopeGenerator = context.createGain()
    // the modulation generator will be in the range -1 to 1
    this.modulationGenerator = context.createGain()

    // we then want to offset the incoming values
    const egOffset = context.createConstantSource()
    const mgOffset = context.createConstantSource()
    mgOffset.offset.value = 1
    egOffset.start()
    mgOffset.start()

    // we then want to multiply the values together and apply that to the
    // incoming signal
    const multiplier = context.createGain()
    multiplier.gain.value = 0

    this.modulationGenerator.connect(multiplier)
    mgOffset.connect(multiplier)

    this.envelopeGenerator.connect(multiplier.gain)
    egOffset.connect(multiplier.gain)

    multiplier.connect(this.gain)

    observeStore(selectors.modulationGenerator, level => {
      this.modulationGenerator.gain.value = level
    })

    observeStore(selectors.envelopeGenerator, level => {
      this.envelopeGenerator.gain.value = level
      egOffset.offset.value = 1 - level
    })
  }
}
