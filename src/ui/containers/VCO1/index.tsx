import React from 'react'
import WaveShape from './WaveShape'
import PulseWidth from './PulseWidth'
import Scale from './Scale'
import './style.scss'

const VCO1: React.FC = () => {
  return (
    <div className="VCO1 module">
      VOLTAGE CONTROLLED OSCILLATOR 1
      <WaveShape />
      <PulseWidth />
      <Scale />
    </div>
  )
}

export default VCO1
