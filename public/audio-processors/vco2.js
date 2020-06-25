class VCO2Processor extends AudioWorkletProcessor {
  static get parameterDescriptors() {
    return [
      {
        name: 'shape',
        automationRate: 'k-rate',
        min: 0,
        max: 3
      },
      {
        name: 'pitch',
        automationRate: 'k-rate',
        min: -1,
        max: 1
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

  getSawtoothSample(main) {
    return (main % 1) * 2 - 1
  }

  getPWMSample(main, pw) {
    const indicator = (main % 1) - ((main + pw) % 1)
    return indicator > 0 ? 1 : -1
  }

  getRingSample(main, inSample) {
    return this.getSawtoothSample(main) * inSample
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0]
    const output = outputs[0]
    const outLen = output[0].length

    const shape = parameters.shape[0]

    const frequency = parameters.frequency
    const scale = Math.pow(2, parameters.scale[0])
    const pitch = Math.pow(2, parameters.pitch[0])
    const constFreq = frequency.length === 1

    for (let c = 0; c < output.length; c++) {
      const inChannel = input[c]
      const outChannel = output[c]

      for (let s = 0; s < outChannel.length; s++) {
        const f = scale * pitch * frequency[constFreq ? 0 : s]
        const main = (f * s) / sampleRate + this.phase

        if (shape === 0) {
          outChannel[s] = this.getSawtoothSample(main)
        } else if (shape === 1) {
          outChannel[s] = this.getPWMSample(main, 0.5)
        } else if (shape === 2) {
          outChannel[s] = this.getPWMSample(main, 0.25)
        } else if (shape === 3) {
          outChannel[s] = this.getRingSample(main, inChannel[s])
        } else {
          console.error('wut')
        }
      }
    }

    this.phase +=
      (scale * pitch * frequency[frequency.length - 1] * outLen) / sampleRate
    this.phase %= sampleRate

    return true
  }
}

registerProcessor('vco2-processor', VCO2Processor)
