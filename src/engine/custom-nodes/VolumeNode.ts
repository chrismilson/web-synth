import { observeStore } from '../../state/store'
import { Selectors } from './common'

export default class VolumeNode extends GainNode {
  constructor(
    context: AudioContext,
    selectors: Selectors<{ volume: number }> = {
      volume: state => state.volume
    }
  ) {
    super(context)

    observeStore(selectors.volume, volume => {
      this.gain.value = volume
    })
  }
}
