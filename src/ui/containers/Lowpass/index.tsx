import React from 'react'
import Cutoff from './Cutoff'
import Peak from './Peak'
import './style.scss'

const Lowpass: React.FC = () => {
  return (
    <div className="Lowpass module">
      VOLTAGE CONTROLLED LOWPASS FILTER
      <Cutoff />
      <Peak />
    </div>
  )
}

export default Lowpass
