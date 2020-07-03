import { observeStore } from '../../state/store'
import { Selectors } from './common'

export default class HADSREnvelopeNode extends AudioWorkletNode {
  hold: AudioParam
  attack: AudioParam
  decay: AudioParam
  sustain: AudioParam
  release: AudioParam

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      hold: number
      attack: number
      decay: number
      sustain: number
      release: number
    }> = {
      hold: state => state.envelopeGenerator2.hold,
      attack: state => state.envelopeGenerator2.attack,
      decay: state => state.envelopeGenerator2.decay,
      sustain: state => state.envelopeGenerator2.sustain,
      release: state => state.envelopeGenerator2.release
    }
  ) {
    super(context, 'hadsr-envelope-processor')

    const hold = this.parameters.get('hold')
    const attack = this.parameters.get('attack')
    const decay = this.parameters.get('decay')
    const sustain = this.parameters.get('sustain')
    const release = this.parameters.get('release')

    if (
      hold === undefined ||
      attack === undefined ||
      decay === undefined ||
      sustain === undefined ||
      release === undefined
    ) {
      throw new Error('Incorrect parameters on custom processor')
    }

    this.hold = hold
    this.attack = attack
    this.decay = decay
    this.sustain = sustain
    this.release = release

    observeStore(selectors.hold, time => {
      this.hold.value = time
    })
    observeStore(selectors.attack, time => {
      this.attack.value = time
    })
    observeStore(selectors.decay, time => {
      this.decay.value = time
    })
    observeStore(selectors.sustain, level => {
      this.sustain.value = level
    })
    observeStore(selectors.release, time => {
      this.release.value = time
    })
  }
}
