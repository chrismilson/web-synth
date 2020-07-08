class NoiseProcessor extends AudioWorkletProcessor {
  process(_inputs, outputs) {
    const output = outputs[0]

    for (let c = 0; c < output.length; c++) {
      const outChannel = output[c]

      for (let s = 0; s < outChannel.length; s++) {
        outChannel[s] = Math.random() * 2 - 1
      }
    }

    return true
  }
}

class PulseProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'pulseWidth',
        automationRate: 'k-rate',
        defaultValue: 0.5,
        min: 0.5,
        max: 0.99
      },
      {
        name: 'frequency',
        min: Number.EPSILON
      }
    ]
  }

  constructor() {
    super()
    this.phase = 0
  }

  process(_inputs, outputs, parameters) {
    const output = outputs[0]
    const outLen = output[0].length

    const frequency = parameters.frequency
    const constFreq = frequency.length === 1

    const pulseWidth = parameters.pulseWidth[0]

    for (let c = 0; c < output.length; c++) {
      const outChannel = output[c]

      for (let s = 0; s < outLen; s++) {
        const f = frequency[constFreq ? 0 : s]
        const main = (f * s) / sampleRate + this.phase
        const indicator = (main % 1) - ((main + pulseWidth) % 1) > 0

        outChannel[s] = indicator ? 1 : -1
      }
    }

    this.phase += (frequency[frequency.length - 1] * outLen) / sampleRate
    this.phase %= sampleRate

    return true
  }
}

class XORProcessor extends AudioWorkletProcessor {
  process(inputs, outputs) {
    const inputA = inputs[0]
    const inputB = inputs[1]
    const output = outputs[0]
    const outLen = output[0].length

    for (let c = 0; c < output.length; c++) {
      const channelA = inputA[c]
      const channelB = inputB[c]
      const outChannel = output[c]

      for (let s = 0; s < outLen; s++) {
        const a = channelA[s] > 0
        const b = channelB[s] > 0
        outChannel[s] = a !== b ? 1 : -1
      }
    }

    return true
  }
}

class ModulationGeneratorProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'waveForm',
        automationRate: 'k-rate',
        defaultValue: 0.5,
        min: 0,
        max: 1
      },
      {
        name: 'frequency',
        automationRate: 'k-rate',
        min: Number.EPSILON
      }
    ]
  }

  constructor() {
    super()
    this.phase = 0
  }

  process(_inputs, outputs, parameters) {
    const triangle = outputs[0]
    const square = outputs[1]
    const outLen = triangle[0].length

    const waveForm = parameters.waveForm[0]
    const frequency = parameters.frequency[0]

    for (let c = 0; c < triangle.length; c++) {
      const triangleChannel = triangle[c]
      const squareChannel = square[c]

      for (let s = 0; s < outLen; s++) {
        const main = (frequency * s) / sampleRate + this.phase

        const offset = (main % 1) - waveForm

        if (offset < 0) {
          squareChannel[s] = 0
          triangleChannel[s] = 0.5 + offset / waveForm
        } else if (offset > 0) {
          squareChannel[s] = 1
          triangleChannel[s] = 0.5 - offset / (1 - waveForm)
        } else {
          squareChannel[s] = 1
          triangleChannel[s] = 0.5
        }
      }
    }

    this.phase += (frequency * outLen) / sampleRate
    this.phase %= sampleRate

    return true
  }
}

class PortamentoProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'time',
        automationRate: 'k-rate',
        min: 0
      }
    ]
  }

  constructor() {
    super()
    this.previousValue = []
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0]
    const output = outputs[0]
    const outLen = output[0].length

    const limit = 1 - parameters.time[0]

    for (let c = 0; c < output.length; c++) {
      const inChannel = input[c]
      const outChannel = output[c]

      let value = this.previousValue[c] || 0

      for (let s = 0; s < outLen; s++) {
        const inSample = inChannel[s]

        value += Math.max(-limit, Math.min(limit, inSample - value))

        outChannel[s] = value
      }

      this.previousValue[c] = value
    }

    return true
  }
}

class DAREnvelopeProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'delay',
        automationRate: 'k-rate',
        min: 0
      },
      {
        name: 'attack',
        automationRate: 'k-rate',
        min: 0
      },
      {
        name: 'release',
        automationRate: 'k-rate',
        min: 0
      }
    ]
  }

  constructor() {
    super()
    // the current number of consecutive samples in the given state
    this.phase = 0
    this.stage = 'release'
    this.value = []
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0]
    const output = outputs[0]
    const outLen = output[0].length

    const delay = Math.max(10, parameters.delay[0] * sampleRate)
    const attack = Math.max(10, parameters.attack[0] * sampleRate)
    const release = Math.max(10, parameters.release[0] * sampleRate)

    for (let c = 0; c < output.length; c++) {
      const inChannel = input[c]
      const outChannel = output[c]

      let value = this.value[c] || 0
      for (let s = 0; s < outLen; s++) {
        const on = inChannel[s] > 0.5

        if (on) {
          if (this.stage === 'release') {
            this.stage = 'delay'
            this.phase = 0
          }
          if (this.stage === 'delay') {
            if (this.phase < delay) {
              value = 0
              this.phase += 1
            } else {
              this.stage = 'attack'
              this.phase = 0
            }
          }
          if (this.stage === 'attack') {
            if (this.phase <= attack) {
              value = this.phase / attack
              this.phase += 1
            } else {
              value = 1
            }
          }
          outChannel[s] = value
        } else {
          if (this.stage !== 'release') {
            this.stage = 'release'
            this.phase = 1
          }

          if (this.phase >= release) {
            this.phase = 0
          }

          if (this.phase > 0) {
            outChannel[s] = value * (1 - this.phase / release)
            this.phase += 1
          } else {
            outChannel[s] = 0
          }
        }
      }
      this.value[c] = value
    }
    return true
  }
}

class HADSREnvelopeProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'hold',
        automationRate: 'k-rate',
        min: 0
      },
      {
        name: 'attack',
        automationRate: 'k-rate',
        min: 0
      },
      {
        name: 'decay',
        automationRate: 'k-rate',
        min: 0
      },
      {
        name: 'sustain',
        automationRate: 'k-rate',
        min: 0
      },
      {
        name: 'release',
        automationRate: 'k-rate',
        min: 0
      }
    ]
  }

  constructor() {
    super()
    // the current number of consecutive samples in the given state
    this.phase = 0
    this.stage = 'release'
    this.value = []
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0]
    const output = outputs[0]
    const outLen = output[0].length

    const hold = Math.max(10, parameters.hold[0] * sampleRate)
    const attack = Math.max(10, parameters.attack[0] * sampleRate)
    const decay = Math.max(10, parameters.decay[0] * sampleRate)
    const sustain = parameters.sustain[0]
    const release = Math.max(10, parameters.release[0] * sampleRate)

    for (let c = 0; c < output.length; c++) {
      const inChannel = input[c]
      const outChannel = output[c]

      let value = this.value[c] || 0
      for (let s = 0; s < outLen; s++) {
        const on = inChannel[s] > 0.5

        if (on) {
          if (this.stage === 'release') {
            this.stage = 'attack'
            this.phase = 0
          }
          if (this.stage === 'attack') {
            if (this.phase < attack) {
              value = this.phase / attack
              this.phase += 1
            } else {
              this.stage = 'decay'
              this.phase = 0
            }
          }
          if (this.stage === 'decay') {
            if (this.phase < decay) {
              value = (this.phase / decay) * (sustain - 1) + 1
              this.phase += 1
            } else {
              value = sustain
            }
          }
          outChannel[s] = value
        } else {
          if (this.stage !== 'release') {
            this.stage = 'release'
            this.phase = 1
          }
          if (this.phase >= release) {
            this.phase = 0
          }

          if (this.phase > 0) {
            outChannel[s] = value * (1 - this.phase / release)
            this.phase += 1
          } else {
            outChannel[s] = 0
          }
        }
      }
      this.value[c] = value
    }
    return true
  }
}

registerProcessor('noise-processor', NoiseProcessor)
registerProcessor('pulse-processor', PulseProcessor)
registerProcessor('xor-processor', XORProcessor)
registerProcessor(
  'modulation-generator-processor',
  ModulationGeneratorProcessor
)
registerProcessor('portamento-processor', PortamentoProcessor)
registerProcessor('dar-envelope-processor', DAREnvelopeProcessor)
registerProcessor('hadsr-envelope-processor', HADSREnvelopeProcessor)
