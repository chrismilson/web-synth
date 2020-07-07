import { observeStore } from '../../state/store'
import { Selectors, ParamaterError } from './common'

export default class DAREnvelopeNode extends AudioWorkletNode {
  delay: AudioParam
  attack: AudioParam
  release: AudioParam

  constructor(
    context: AudioContext,
    selectors: Selectors<{ delay: number; attack: number; release: number }> = {
      delay: state => state.envelopeGenerator1.delay,
      attack: state => state.envelopeGenerator1.attack,
      release: state => state.envelopeGenerator1.release
    }
  ) {
    super(context, 'dar-envelope-processor')

    const delay = this.parameters.get('delay')
    const attack = this.parameters.get('attack')
    const release = this.parameters.get('release')

    if (delay === undefined || attack === undefined || release === undefined) {
      throw new ParamaterError()
    }

    this.delay = delay
    this.attack = attack
    this.release = release

    observeStore(selectors.delay, delay => {
      this.delay.value = delay
    })
    observeStore(selectors.attack, attack => {
      this.attack.value = attack
    })
    observeStore(selectors.release, release => {
      this.release.value = release
    })
  }
}
