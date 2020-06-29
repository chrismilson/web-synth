import VCO1Node from './custom-nodes/VCO1Node'
import VCO2Node from './custom-nodes/VCO2Node'
import VCOMixerNode from './custom-nodes/VCOMixerNode'
import VolumeNode from './custom-nodes/VolumeNode'
import AudioContext from './audioContext'
import MasterTuneNode from './custom-nodes/MasterTuneNode'
import PortamentoNode from './custom-nodes/PortamentoNode'
import HighpassNode from './custom-nodes/HighpassNode'
import LowpassNode from './custom-nodes/LowpassNode'
import ModulationGeneratorNode from './custom-nodes/ModulationGeneratorNode'
import FrequencyModulatorNode from './custom-nodes/FrequencyModulatorNode'

// loads the external worklet processors and sets up the default patch.
const init = async () => {
  const context = new AudioContext()
  await context.resume()
  // the site is not hosted at the root
  await context.audioWorklet.addModule('web-synth/audio-processors.js')

  // a filler for changing frequency.
  const freq = context.createConstantSource()
  freq.offset.value = 440
  freq.start()

  setInterval(() => {
    if (freq.offset.value === 440) {
      freq.offset.value = 220
    } else {
      freq.offset.value = 440
    }
  }, 1000)

  // instantiate each of the modules

  const masterTune = new MasterTuneNode(context)
  const portamento = new PortamentoNode(context)
  const modulationGenerator = new ModulationGeneratorNode(context)
  const frequencyModulator = new FrequencyModulatorNode(context)
  const vco1 = new VCO1Node(context)
  const vco2 = new VCO2Node(context)
  const vcoMixer = new VCOMixerNode(context)
  const highpass = new HighpassNode(context)
  const lowpass = new LowpassNode(context)
  const volume = new VolumeNode(context)

  // initialise the default patch

  freq.connect(masterTune).connect(portamento)
  portamento.connect(vco1.frequency)
  portamento.connect(vco2.frequency)

  modulationGenerator.connect(frequencyModulator.modulationGenerator)
  frequencyModulator.connect(vco1.frequency)
  frequencyModulator.connect(vco2.frequency)

  vco1.connect(vco2) // ring modulation

  vco1.connect(vcoMixer.vco1in)
  vco2.connect(vcoMixer.vco2in)

  vcoMixer
    .connect(highpass)
    .connect(lowpass)
    .connect(volume)
    .connect(context.destination)
}

export default init
