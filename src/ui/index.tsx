import React, { useState } from 'react'
import './style.scss'

import VCO1 from './containers/VCO1'
import VCO2 from './containers/VCO2'
import Volume from './containers/Volume'
import VCOMixer from './containers/VCOMixer'
import Portamento from './containers/Portamento'
import MasterTune from './containers/MasterTune'
import FrequencyModulator from './containers/FrequencyModulator'
import Highpass from './containers/Highpass'
import Lowpass from './containers/Lowpass'
import ModulationGenerator from './containers/ModulationGenerator'
import EnvelopeGenerator1 from './containers/EnvelopeGenerator1'
import EnvelopeGenerator2 from './containers/EnvelopeGenerator2'
import SynthKeys from './containers/SynthKeys'
import Initialise from './containers/Initialise/Initialise'

export default function App() {
  const [initialised, setInitialised] = useState(false)

  return (
    <div className="App">
      {!initialised && <Initialise onInitialise={() => setInitialised(true)} />}
      <div className="Synth">
        <div className="Knobs">
          <VCO1 />
          <VCO2 />
          <VCOMixer />
          <Volume />
          <Highpass />
          <Lowpass />
          <Portamento />
          <MasterTune />
          <FrequencyModulator />
          <ModulationGenerator />
          <EnvelopeGenerator1 />
          <EnvelopeGenerator2 />
        </div>
        <div className="keyboardDock">
          <SynthKeys />
        </div>
      </div>
    </div>
  )
}
