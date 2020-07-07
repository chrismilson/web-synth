import { observeStore } from '../../state/store'
import { Selectors, ParamaterError } from './common'

export default class ModulationGeneratorNode extends AudioWorkletNode {
  waveForm: AudioParam
  frequency: AudioParam

  constructor(
    context: AudioContext,
    selectors: Selectors<{ waveForm: number; frequency: number }> = {
      waveForm: state => state.modulationGenerator.waveForm,
      frequency: state => state.modulationGenerator.frequency
    }
  ) {
    super(context, 'modulation-generator-processor', { numberOfOutputs: 2 })

    const waveForm = this.parameters.get('waveForm')
    const frequency = this.parameters.get('frequency')

    if (waveForm === undefined || frequency === undefined) {
      throw new ParamaterError()
    }

    this.waveForm = waveForm
    this.frequency = frequency

    observeStore(selectors.waveForm, waveForm => {
      this.waveForm.value = waveForm
    })

    observeStore(selectors.frequency, frequency => {
      this.frequency.value = frequency
    })
  }
}
