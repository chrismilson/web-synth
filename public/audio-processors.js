const getSawtoothSample = main => (main % 1) * 2 - 1

const getTriangleSample = main => Math.abs(getSawtoothSample(main)) * 2 - 1

const getPWMSample = (main, pw) => ((main % 1) - ((main + pw) % 1) > 0 ? 1 : -1)

const getRingSample = (main, inSample) => getSawtoothSample(main) * inSample

const getNoiseSample = () => Math.random() * 2 - 1

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

    const shape = parameters.shape[0]

    const frequency = parameters.frequency
    const scale = Math.pow(2, parameters.scale[0] - 1)
    const pulseWidth = parameters.pulseWidth[0]
    const constFreq = frequency.length === 1

    for (let c = 0; c < output.length; c++) {
      const outChannel = output[c]

      for (let s = 0; s < outLen; s++) {
        const f = scale * frequency[constFreq ? 0 : s]
        const main = (f * s) / sampleRate + this.phase

        if (shape === 0) {
          outChannel[s] = getTriangleSample(main)
        } else if (shape === 1) {
          outChannel[s] = getSawtoothSample(main)
        } else if (shape === 2) {
          outChannel[s] = getPWMSample(main, pulseWidth)
        } else if (shape === 3) {
          outChannel[s] = getNoiseSample()
        }
      }
    }

    this.phase +=
      (scale * frequency[frequency.length - 1] * outLen) / sampleRate
    this.phase %= sampleRate

    return true
  }
}

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
        min: Number.EPSILON
      }
    ]
  }

  constructor() {
    super()
    this.phase = 0
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
          outChannel[s] = getSawtoothSample(main)
        } else if (shape === 1) {
          outChannel[s] = getPWMSample(main, 0.5)
        } else if (shape === 2) {
          outChannel[s] = getPWMSample(main, 0.25)
        } else if (shape === 3) {
          outChannel[s] = getRingSample(main, inChannel[s])
        }
      }
    }

    this.phase +=
      (scale * pitch * frequency[frequency.length - 1] * outLen) / sampleRate
    this.phase %= sampleRate

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

registerProcessor('vco1-processor', VCO1Processor)
registerProcessor('vco2-processor', VCO2Processor)
registerProcessor(
  'modulation-generator-processor',
  ModulationGeneratorProcessor
)
registerProcessor('portamento-processor', PortamentoProcessor)
