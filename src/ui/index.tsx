import React, { useEffect, useState } from 'react'
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
import Keyboard from './components/Keyboard'

export default function App() {
  const [keyboardHandler, setKeyboardHandler] = useState<
    (note: number, on: boolean) => void | undefined
  >()

  useEffect(() => {
    let pending = false
    const unsubscribe = store.subscribe(() => {
      const volume = store.getState().volume

      if (volume !== 0 && !pending) {
        pending = true
        initEngine()
          .then(keyboardHandler => {
            if (keyboardHandler) {
              setKeyboardHandler(() => keyboardHandler)
              console.log('Engine initialisation success.')
              unsubscribe()
            } else {
              throw new Error('No keyboard bindings')
            }
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
        <Keyboard min={15} max={51} handler={keyboardHandler} />
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
