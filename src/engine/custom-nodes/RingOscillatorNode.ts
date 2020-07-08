export default class RingOscillatorNode extends AudioWorkletNode {
  constructor(context: AudioContext) {
    super(context, 'xor-processor', { numberOfInputs: 2 })
  }
}
