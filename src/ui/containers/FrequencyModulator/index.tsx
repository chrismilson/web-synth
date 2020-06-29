import React from 'react'
import EnvelopeGenerator from './EnvelopeGenerator'
import ModulationGenerator from './ModulationGenerator'
import './style.scss'

const FrequencyModulator: React.FC = () => {
  return (
    <div className="FrequencyModulator module">
      FREQUENCY MODULATION
      <ModulationGenerator />
      <EnvelopeGenerator />
    </div>
  )
}

export default FrequencyModulator
