import React from 'react'
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

const unsubscribe = store.subscribe(() => {
  const volume = store.getState().volume

  if (volume !== 0) {
    unsubscribe()
    initEngine()
  }
})

export default function App() {
  return (
    <div className="App">
      <VCO1 />
      <VCO2 />
      <VCOMixer />
      <Volume />
      <Portamento />
      <MasterTune />
      <FrequencyModulator />
    </div>
  )
}
