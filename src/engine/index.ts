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
import KeyboardNode from './custom-nodes/KeyboardNode'
import DAREnvelopeNode from './custom-nodes/DAREnvelopeNode'
import HADSREnvelopeNode from './custom-nodes/HADSREnvelopeNode'

// loads the external worklet processors and sets up the default patch.
const init = async () => {
  const context = new AudioContext()
  await context.resume()
  if (context.state !== 'running') {
    throw new Error('The audio context failed to start.')
  }

  // the site is not hosted at the root
  if (process.env.NODE_ENV === 'development') {
    await context.audioWorklet.addModule('web-synth/audio-processors.js')
  } else {
    await context.audioWorklet.addModule('audio-processors.js')
  }

  // instantiate each of the modules
  const keyboard = new KeyboardNode(context)
  const masterTune = new MasterTuneNode(context)
  const portamento = new PortamentoNode(context)
  const modulationGenerator = new ModulationGeneratorNode(context)
  const envelopeGenerator1 = new DAREnvelopeNode(context)
  const envelopeGenerator2 = new HADSREnvelopeNode(context)
  const frequencyModulator = new FrequencyModulatorNode(context)
  const vco1 = new VCO1Node(context)
  const vco2 = new VCO2Node(context)
  const vcoMixer = new VCOMixerNode(context)
  const highpass = new HighpassNode(context)
  const lowpass = new LowpassNode(context)
  const volume = new VolumeNode(context)
  const vca = context.createGain()
  vca.gain.value = 0

  // initialise the default patch

  // the keyboard triggers both envelopes
  keyboard.trigger.connect(envelopeGenerator1)
  keyboard.trigger.connect(envelopeGenerator2)

  // the keyboard frequency gets tuned and ported.
  keyboard.frequency.connect(portamento).connect(masterTune)

  // the frequency then gets modulated
  masterTune.connect(frequencyModulator)

  // there are two sources for modulation:
  // the modulation generator (a low frequency oscillator); and,
  modulationGenerator.connect(frequencyModulator.modulationGenerator)
  // the first envelope generator.
  envelopeGenerator1.connect(frequencyModulator.envelopeGenerator)
  frequencyModulator.connect(vco1.frequency)
  frequencyModulator.connect(vco2.frequency)

  // the cutoff for both filters is also frequency modulated.
  modulationGenerator.connect(highpass.cutoff.modulationGenerator)
  modulationGenerator.connect(lowpass.cutoff.modulationGenerator)
  envelopeGenerator2.connect(highpass.cutoff.envelopeGenerator)
  envelopeGenerator2.connect(lowpass.cutoff.envelopeGenerator)

  vco1.connect(vco2) // ring modulation

  vco1.connect(vcoMixer.vco1in)
  vco2.connect(vcoMixer.vco2in)

  envelopeGenerator2.connect(vca.gain)

  vcoMixer
    .connect(highpass)
    .connect(lowpass)
    .connect(vca)
    .connect(volume)
    .connect(context.destination)

  return keyboard.triggerNote
}

export default init
