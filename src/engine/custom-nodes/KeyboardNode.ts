import TwelveTone from '../../tuning'
import equalTemper from '../../tuning/references/equal-temper'

/**
 * The keyboard is an interesting problem, because it operates mainly on changes
 * in state rather than current state. This is because when a key is pressed it
 * should trigger something - the change from not pressed to pressed or vice
 * versa is important, but the fact that a given key is down is not so
 * important.
 */
export default class KeyboardNode {
  scale: TwelveTone
  /** The control frequency of the keyboard */
  frequency: ConstantSourceNode
  /** The trigger out of the keyboard: 1 when key is pressed and 0 otherwise. */
  trigger: ConstantSourceNode

  constructor(context: AudioContext) {
    this.frequency = context.createConstantSource()
    this.trigger = context.createConstantSource()

    this.frequency.start()
    this.trigger.start()

    this.scale = new TwelveTone(440, equalTemper)

    this.triggerNote = this.triggerNote.bind(this)
  }

  triggerNote(note: number, on: boolean) {
    console.log(note, on ? 'on' : 'off')
    if (on) {
      this.frequency.offset.value = this.scale.getNote(note - 69)
      this.trigger.offset.value = 1
    } else {
      this.trigger.offset.value = 0
    }
  }
}
