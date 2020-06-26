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
        min: 0.5,
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
        defaultValue: 110,
        min: Number.EPSILON
      }
    ]
  }

  constructor() {
    super()
    this.phase = 0
  }

  getSawtoothSample(main) {
    return (main % 1) * 2 - 1
  }

  getTriangleSample(main) {
    return Math.abs(this.getSawtoothSample(main)) * 2 - 1
  }

  getPWMSample(main, pw) {
    const indicator = (main % 1) - ((main + pw) % 1)
    return indicator > 0 ? 1 : -1
  }

  getNoiseSample() {
    return Math.random() * 2 - 1
  }

  process(_inputs, outputs, parameters) {
    const output = outputs[0]
    const outLen = output[0].length

    const shape = parameters.shape[0]

    const frequency = parameters.frequency
    const scale = Math.pow(2, parameters.scale[0])
    const pulseWidth = parameters.pulseWidth[0]
    const constFreq = frequency.length === 1

    for (let c = 0; c < output.length; c++) {
      const outChannel = output[c]

      for (let s = 0; s < outLen; s++) {
        const f = scale * frequency[constFreq ? 0 : s]
        const main = (f * s) / sampleRate + this.phase

        if (shape === 0) {
          outChannel[s] = this.getTriangleSample(main)
        } else if (shape === 1) {
          outChannel[s] = this.getSawtoothSample(main)
        } else if (shape === 2) {
          outChannel[s] = this.getPWMSample(main, pulseWidth)
        } else if (shape === 3) {
          outChannel[s] = this.getNoiseSample()
        }
      }
    }

    this.phase +=
      (scale * frequency[frequency.length - 1] * outLen) / sampleRate
    this.phase %= sampleRate

    return true
  }
}

registerProcessor('vco1-processor', VCO1Processor)
