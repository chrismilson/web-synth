import React from 'react'
import Cutoff from './Cutoff'
import Peak from './Peak'
import './style.scss'

const Highpass: React.FC = () => {
  return (
    <div className="Highpass module">
      VOLTAGE CONTROLLED HIGHPASS FILTER
      <Cutoff />
      <Peak />
    </div>
  )
}

export default Highpass
