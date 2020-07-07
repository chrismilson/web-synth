import TwelveTone from '../../tuning'
import equalTemper from '../../tuning/references/equal-temper'
import { observeStore } from '../../state/store'

export default class KeyboardNode {
  /** The control frequency of the keyboard */
  frequency: ConstantSourceNode
  /** The trigger out of the keyboard: 1 when key is pressed and 0 otherwise. */
  trigger: ConstantSourceNode
  /** The lowest note the keyboard will play */
  bassNote: number

  constructor(context: AudioContext) {
    this.frequency = context.createConstantSource()
    this.trigger = context.createConstantSource()
    this.bassNote = 0

    this.frequency.start()
    this.trigger.start()

    // // this scale is just tunung in the key of C
    // const scale = new TwelveTone(450, fiveLimit, Key.C)
    const scale = new TwelveTone(440, equalTemper)

    observeStore(
      state => state.keyboard.bassNote,
      bassNote => {
        this.bassNote = bassNote
      }
    )

    observeStore(
      state => state.keyboard.keys,
      keys => {
        const target = keys.indexOf(true)

        if (target >= 0) {
          const targetFreq = scale.getNote(this.bassNote + target)
          this.frequency.offset.value = targetFreq
          this.trigger.offset.value = 1
        } else {
          this.trigger.offset.value = 0
        }
      }
    )
  }
}
