import { observeStore } from '../../state/store'

export default class ModulationGeneratorNode extends AudioWorkletNode {
  waveForm: AudioParam
  frequency: AudioParam

  constructor(context: AudioContext) {
    super(context, 'modulation-generator-processor', { numberOfOutputs: 2 })

    const waveForm = this.parameters.get('waveForm')
    const frequency = this.parameters.get('frequency')

    if (waveForm === undefined || frequency === undefined) {
      throw new Error('Incorrect parameters on custom processor')
    }

    this.waveForm = waveForm
    this.frequency = frequency

    observeStore(
      state => state.modulationGenerator.waveForm,
      waveForm => {
        this.waveForm.value = waveForm
      }
    )

    observeStore(
      state => state.modulationGenerator.frequency,
      frequency => {
        this.frequency.value = frequency
      }
    )
  }
}
