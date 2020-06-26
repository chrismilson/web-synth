import VCO1Node from './custom-nodes/VCO1Node'
import VCO2Node from './custom-nodes/VCO2Node'
import VCOMixerNode from './custom-nodes/VCOMixerNode'
import VolumeNode from './custom-nodes/VolumeNode'

// loads the external worklet processors and sets up the default patch.
const init = async () => {
  const context = new AudioContext()
  await context.audioWorklet.addModule('audio-processors.js')

  const vco1 = new VCO1Node(context)
  const vco2 = new VCO2Node(context, vco1)
  const vcoMixer = new VCOMixerNode(context, vco1, vco2)
  const volume = new VolumeNode(context)

  vcoMixer.connect(volume)
}

export default init
