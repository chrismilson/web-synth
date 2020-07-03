import { observeStore } from '../../state/store'
import FrequencyModulatorNode from './FrequencyModulatorNode'
import { Selectors } from './common'

export default class HighpassNode extends BiquadFilterNode {
  cutoff: FrequencyModulatorNode

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      cutoff: number
      peak: number
      modulationGenerator: number
      envelopeGenerator: number
    }> = {
      cutoff: state => state.highpass.cutoff,
      peak: state => state.highpass.peak,
      modulationGenerator: state =>
        state.highpass.modulator.modulationGenerator,
      envelopeGenerator: state => state.highpass.modulator.envelopeGenerator
    }
  ) {
    super(context)

    this.type = 'highpass'
    this.frequency.value = 0

    this.cutoff = new FrequencyModulatorNode(context, {
      modulationGenerator: selectors.modulationGenerator,
      envelopeGenerator: selectors.envelopeGenerator
    })

    const frequencyIn = context.createConstantSource()
    frequencyIn.start()

    frequencyIn.connect(this.cutoff).connect(this.frequency)

    observeStore(selectors.cutoff, cutoff => {
      const level = 1 - (1 - cutoff) * (1 - cutoff)
      const min = 100
      const max = 15000

      // a logarithmic curve
      frequencyIn.offset.value = Math.pow(max - min + 1, level) + min - 1
    })

    observeStore(selectors.peak, peak => {
      const min = 0
      const max = 40

      this.Q.value = Math.pow(max - min + 1, peak) + min - 1
    })
  }
}
