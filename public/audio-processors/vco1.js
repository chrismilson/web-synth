const truncate = v => v - Math.floor(v)

class VCO1Processor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'shape',
        automationRate: 'k-rate',
        min: 0,
        max: 3
      },
      {
        name: 'pulseWidth',
        automationRate: 'k-rate',
        defaultValue: 0.5,
        min: 0.01,
        max: 0.99
      },
      {
        name: 'scale',
        automationRate: 'k-rate',
        min: 0,
        max: 3
      },
      {
        name: 'frequency',
        defaultValue: 440,
        min: Number.EPSILON
      }
    ]
  }

  constructor() {
    super()
    this.phase = 0
  }

  processTriangle(output, outLen, parameters) {
    const freq = parameters.frequency
    const constFreq = freq.length === 1

    for (let c = 0; c < output.length; c++) {
      const channel = output[c]

      for (let s = 0; s < outLen; s++) {
        const main = (freq[constFreq ? 0 : s] * s) / sampleRate + this.phase
        const saw = truncate(main) * 2 - 1
        channel[s] = Math.abs(saw) * 2 - 1
      }
    }

    this.phase += (outLen * freq[freq.length - 1]) / sampleRate
    this.phase %= sampleRate
  }

  processSawtooth(output, outLen, parameters) {
    const freq = parameters.frequency
    const constFreq = freq.length === 1

    for (let c = 0; c < output.length; c++) {
      const channel = output[c]

      for (let s = 0; s < outLen; s++) {
        const main = (freq[constFreq ? 0 : s] * s) / sampleRate + this.phase
        channel[s] = truncate(main) * 2 - 1
      }
    }

    this.phase += (outLen * freq[freq.length - 1]) / sampleRate
    this.phase %= sampleRate
  }

  processPulse(output, outLen, parameters) {
    const pulseWidth = parameters.pulseWidth[0]
    const freq = parameters.frequency
    const constFreq = freq.length === 1

    for (let c = 0; c < output.length; c++) {
      const channel = output[c]

      for (let s = 0; s < outLen; s++) {
        const main = (freq[constFreq ? 0 : s] * s) / sampleRate + this.phase
        const indicator = truncate(main) - truncate(main + pulseWidth)
        channel[s] = indicator > 0 ? 1 : -1
      }
    }

    this.phase += (outLen * freq[freq.length - 1]) / sampleRate
    this.phase %= sampleRate
  }

  /** Random noise with java's Math.random */
  processNoise(output, outLen) {
    for (let c = 0; c < output.length; c++) {
      const channel = output[c]
      for (let s = 0; s < outLen; s++) {
        channel[s] = Math.random() * 2 - 1
      }
    }
  }

  process(_inputs, outputs, parameters) {
    const output = outputs[0]
    const outLen = output[0].length

    // throw new Error(parameters.shape)

    const shape = parameters.shape[0]

    if (shape === 0) {
      this.processTriangle(output, outLen, parameters)
    } else if (shape === 1) {
      this.processSawtooth(output, outLen, parameters)
    } else if (shape === 2) {
      this.processPulse(output, outLen, parameters)
    } else if (shape === 3) {
      this.processNoise(output, outLen)
    }

    return true
  }
}

registerProcessor('vco1-processor', VCO1Processor)
