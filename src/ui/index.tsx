import React, { useEffect } from 'react'
import store from '../state/store'
import initEngine from '../engine'
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

export default function App() {
  useEffect(() => {
    let pending = false
    const unsubscribe = store.subscribe(() => {
      const volume = store.getState().volume

      if (volume !== 0 && !pending) {
        pending = true
        initEngine()
          .then(() => {
            console.log('Engine initialisation success.')
            unsubscribe()
          })
          .catch(error => {
            console.log('Engine initialisation failed.')
            console.error(error)
            // try again
            pending = false
          })
      }
    })
  }, [])

  return (
    <div className="App">
      <div className="keyboardDock">
        <SynthKeys />
      </div>
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
  )
}
