import { observeStore } from '../../state/store'
import { Selectors } from './common'

/**
 * This node adds an offset to the incoming control frequency.
 */
export default class MasterTuneNode extends GainNode {
  constructor(
    context: AudioContext,
    selectors: Selectors<{ masterTune: number }> = {
      masterTune: state => state.masterTune
    }
  ) {
    super(context)

    observeStore(selectors.masterTune, tune => {
      this.gain.value = Math.pow(2, tune)
    })
  }
}
