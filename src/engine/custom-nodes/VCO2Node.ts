import { observeStore } from '../../state/store'
import { Selectors } from './common'
import { VCO2WaveShape } from '../../state/types/state'
import PulseOscillatorNode from './PulseOscillatorNode'
import RingOscillatorNode from './RingOscillatorNode'

export default class VCO2Node extends GainNode {
  frequency: AudioParam
  ring: AudioNode

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      waveShape: VCO2WaveShape
      pitch: number
      scale: number
    }> = {
      waveShape: state => state.vco2.waveShape,
      pitch: state => state.vco2.pitch,
      scale: state => state.vco2.scale
    }
  ) {
    super(context)

    const saw = context.createOscillator()
    const square = new PulseOscillatorNode(context)
    const pulse = new PulseOscillatorNode(context)
    const ring = new RingOscillatorNode(context)
    const frequency = context.createConstantSource()
    const pitch = context.createGain()
    const scale = context.createGain()

    const sawLevel = context.createGain()
    const squareLevel = context.createGain()
    const pulseLevel = context.createGain()
    const ringLevel = context.createGain()

    this.frequency = frequency.offset
    this.ring = ring

    frequency.offset.value = 0
    saw.type = 'sawtooth'
    saw.frequency.value = 0
    square.pulseWidth.value = 0.5
    square.frequency.value = 0
    pulse.pulseWidth.value = 0.75
    pulse.frequency.value = 0

    frequency.connect(pitch).connect(scale)

    scale.connect(saw.frequency)
    scale.connect(square.frequency)
    scale.connect(pulse.frequency)

    square.connect(ring, 0, 1)

    saw.connect(sawLevel).connect(this)
    square.connect(squareLevel).connect(this)
    pulse.connect(pulseLevel).connect(this)
    ring.connect(ringLevel).connect(this)

    saw.start()
    frequency.start()

    observeStore(selectors.waveShape, shape => {
      sawLevel.gain.value = shape === VCO2WaveShape.SAWTOOTH ? 1 : 0
      squareLevel.gain.value = shape === VCO2WaveShape.SQUARE ? 1 : 0
      pulseLevel.gain.value = shape === VCO2WaveShape.PULSE ? 1 : 0
      ringLevel.gain.value = shape === VCO2WaveShape.RING ? 1 : 0
    })
    observeStore(selectors.pitch, value => {
      pitch.gain.value = Math.pow(2, value)
    })
    observeStore(selectors.scale, octave => {
      scale.gain.value = Math.pow(2, octave)
    })
  }
}
