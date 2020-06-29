import { observeStore } from '../../state/store'

/**
 * This node adds an offset to the incoming control frequency.
 */
export default class MasterTuneNode extends GainNode {
  constructor(context: AudioContext) {
    super(context)

    observeStore(
      state => state.masterTune,
      tune => {
        this.gain.value = Math.pow(2, tune)
      }
    )
  }
}
