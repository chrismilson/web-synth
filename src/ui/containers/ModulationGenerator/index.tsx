import React from 'react'
import WaveForm from './WaveForm'
import Frequency from './Frequency'
import './style.scss'

const ModulationGenerator: React.FC = () => {
  return (
    <div className="ModulationGenerator module">
      MODULATION GENERATOR
      <WaveForm />
      <Frequency />
    </div>
  )
}

export default ModulationGenerator
