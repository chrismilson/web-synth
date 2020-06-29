import React from 'react'
import WaveShape from './WaveShape'
import PulseWidth from './Pitch'
import Scale from './Scale'
import './style.scss'

const VCO2: React.FC = () => {
  return (
    <div className="VCO2 module">
      VOLTAGE CONTROLLED OSCILLATOR 2
      <WaveShape />
      <PulseWidth />
      <Scale />
    </div>
  )
}

export default VCO2
