import { observeStore } from '../../state/store'

export default class VolumeNode extends GainNode {
  constructor(context: AudioContext) {
    super(context)

    observeStore(
      state => state.volume,
      volume => {
        this.gain.value = volume
      }
    )
  }
}
