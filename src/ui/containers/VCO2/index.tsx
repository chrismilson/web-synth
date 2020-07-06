import React from 'react'
import WaveShape from './WaveShape'
import Pitch from './Pitch'
import Scale from './Scale'
import './style.scss'

const VCO2: React.FC = () => {
  return (
    <div className="VCO2 module">
      VOLTAGE CONTROLLED OSCILLATOR 2
      <WaveShape />
      <Pitch />
      <Scale />
    </div>
  )
}

export default VCO2
