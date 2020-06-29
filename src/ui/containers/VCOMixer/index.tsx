import React from 'react'
import VCO1Level from './vco1Level'
import VCO2Level from './vco2Level'
import './style.scss'

const VCOMixer: React.FC = () => {
  return (
    <div className="VCOMixer module">
      VCO MIXER
      <VCO1Level />
      <VCO2Level />
    </div>
  )
}

export default VCOMixer
