import { observeStore } from '../../state/store'
import { Selectors } from './common'
import { VCO1WaveShape } from '../../state/types/state'
import PulseOscillatorNode from './PulseOscillatorNode'

export default class VCO1Node extends GainNode {
  frequency: AudioParam
  pulse: AudioNode

  constructor(
    context: AudioContext,
    selectors: Selectors<{
      waveShape: VCO1WaveShape
      pulseWidth: number
      scale: number
    }> = {
      waveShape: state => state.vco1.waveShape,
      pulseWidth: state => state.vco1.pulseWidth,
      scale: state => state.vco1.scale
    }
  ) {
    super(context)

    const triangle = context.createOscillator()
    const saw = context.createOscillator()
    const pulse = new PulseOscillatorNode(context)
    const noise = new AudioWorkletNode(context, 'noise-processor')
    const frequency = context.createConstantSource()
    const scale = context.createGain()

    const triangleLevel = context.createGain()
    const sawLevel = context.createGain()
    const pulseLevel = context.createGain()
    const noiseLevel = context.createGain()

    this.frequency = frequency.offset
    this.pulse = pulse

    frequency.offset.value = 0
    triangle.type = 'triangle'
    triangle.frequency.value = 0
    saw.type = 'sawtooth'
    saw.frequency.value = 0

    frequency.connect(scale)

    scale.connect(triangle.frequency)
    scale.connect(saw.frequency)
    scale.connect(pulse.frequency)

    triangle.connect(triangleLevel).connect(this)
    saw.connect(sawLevel).connect(this)
    pulse.connect(pulseLevel).connect(this)
    noise.connect(noiseLevel).connect(this)

    triangle.start()
    saw.start()
    frequency.start()

    observeStore(selectors.waveShape, shape => {
      triangleLevel.gain.value = shape === VCO1WaveShape.TRIANGLE ? 1 : 0
      sawLevel.gain.value = shape === VCO1WaveShape.SAWTOOTH ? 1 : 0
      pulseLevel.gain.value = shape === VCO1WaveShape.SQUARE ? 1 : 0
      noiseLevel.gain.value = shape === VCO1WaveShape.NOISE ? 1 : 0
    })

    observeStore(selectors.pulseWidth, pw => {
      pulse.pulseWidth.value = pw
    })

    observeStore(selectors.scale, octave => {
      scale.gain.value = Math.pow(2, octave)
    })
  }
}
