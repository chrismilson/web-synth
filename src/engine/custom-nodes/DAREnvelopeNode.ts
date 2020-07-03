import { observeStore } from '../../state/store'

export default class DAREnvelopeNode extends AudioWorkletNode {
  delay: AudioParam
  attack: AudioParam
  release: AudioParam

  constructor(context: AudioContext) {
    super(context, 'dar-envelope-processor')

    const delay = this.parameters.get('delay')
    const attack = this.parameters.get('attack')
    const release = this.parameters.get('release')

    if (delay === undefined || attack === undefined || release === undefined) {
      throw new Error('Incorrect parameters on custom processor')
    }

    this.delay = delay
    this.attack = attack
    this.release = release

    observeStore(
      state => state.envelopeGenerator1.delay,
      delay => {
        this.delay.value = delay
      }
    )
    observeStore(
      state => state.envelopeGenerator1.attack,
      attack => {
        this.attack.value = attack
      }
    )
    observeStore(
      state => state.envelopeGenerator1.release,
      release => {
        this.release.value = release
      }
    )
  }
}
