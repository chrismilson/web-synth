import React from 'react'
import Delay from './Delay'
import Attack from './Attack'
import Release from './Release'
import './style.scss'

const EnvelopeGenerator1: React.FC = () => {
  return (
    <div className="EnvelopeGenerator1 module">
      ENVELOPE GENERATOR 1
      <Delay />
      <Attack />
      <Release />
    </div>
  )
}

export default EnvelopeGenerator1
